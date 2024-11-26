from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import r2_score
from sklearn.model_selection import train_test_split
import pandas as pd
import requests

app = Flask(__name__)
CORS(app)  # Allow CORS for all routes

# Load the dataset
bitcoin_data = pd.read_csv("Bitcoin_Historical_Data.csv")

# Convert 'Date' column to datetime datatype
bitcoin_data['Date'] = pd.to_datetime(bitcoin_data['Date'], dayfirst=True)  # Use dayfirst=True to avoid warnings

# Extract additional features
bitcoin_data['DayOfWeek'] = bitcoin_data['Date'].dt.dayofweek
bitcoin_data['Month'] = bitcoin_data['Date'].dt.month
bitcoin_data['Year'] = bitcoin_data['Date'].dt.year

# Set 'Date' column as index
bitcoin_data.set_index('Date', inplace=True)

# Define features and target variable
features = ['DayOfWeek', 'Month', 'Year']
X = bitcoin_data[features]
y = bitcoin_data['Price']

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize and train the Random Forest model on the training set
model = RandomForestRegressor(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Function to predict Bitcoin price for a future date
def predict_future_price(future_date):
    # Ensure the input date format is in 'YYYY-MM-DD'
    future_date = pd.to_datetime(future_date, format='%Y-%m-%d')  # Specify the format explicitly
    future_data = pd.DataFrame({'DayOfWeek': [future_date.dayofweek],
                                'Month': [future_date.month],
                                'Year': [future_date.year]})
    future_price = model.predict(future_data)
    return future_price[0]

# Function to convert price from USD to INR
def convert_price_to_inr(price_in_usd):
    url = "https://api.exchangerate-api.com/v4/latest/USD"
    response = requests.get(url)
    rates = response.json()["rates"]
    inr_rate = rates["INR"]
    price_in_inr = price_in_usd * inr_rate
    return price_in_inr

# Function to calculate the R-squared score (accuracy) of the model
def calculate_accuracy():
    # Predict Bitcoin prices for the testing dataset
    y_pred = model.predict(X_test)
    # Calculate R-squared score
    r2 = r2_score(y_test, y_pred)
    return round(r2 * 100, 2)  # Return the accuracy in percentage

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    input_date = data.get('date')
    try:
        future_price_usd = predict_future_price(input_date)
        future_price_inr = convert_price_to_inr(future_price_usd)
        accuracy = calculate_accuracy()  # Calculate accuracy
        response = {
            "usd": future_price_usd,
            "inr": future_price_inr,
            "accuracy": accuracy  # Include accuracy in the response
        }
        return jsonify(response)
    except ValueError:
        return jsonify({"error": "Invalid date format"}), 400

@app.route('/', methods=['GET', 'POST'])
def index():
    prediction_result = None
    accuracy = None
    if request.method == 'POST':
        input_date = request.form['input_date']
        try:
            future_price_usd = predict_future_price(input_date)
            future_price_inr = convert_price_to_inr(future_price_usd)
            prediction_result = f"Predicted Bitcoin price on {input_date}: ${future_price_usd:.2f} (USD) / ₹{future_price_inr:.2f} (INR)"
            accuracy = calculate_accuracy()  # Calculate accuracy
        except ValueError:
            prediction_result = "Invalid date format. Please enter the date in the format 'DD-MM-YYYY'."
    return render_template('index.html', prediction_result=prediction_result, accuracy=accuracy)

if __name__ == '__main__':
    app.run(debug=True)
