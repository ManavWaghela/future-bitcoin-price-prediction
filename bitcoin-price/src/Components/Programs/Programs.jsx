// eslint-disable-next-line
import React, { useState, useEffect } from 'react'
import './Programs.css'
import download from '../../assets/download.png'

const Programs = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [bitcoinPrice, setBitcoinPrice] = useState(null);

  useEffect(() => {
    const fetchBitcoinPrice = async () => {
      if (selectedDate) {
        try {
          const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
          const data = await response.json();
          setBitcoinPrice(data.bpi.USD.rate);
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchBitcoinPrice();
  }, [selectedDate]);

  return (
    <div className='bitcoin-predict'>
      <div className='text-section'>
        <h1>Predict the Future of Bitcoin</h1>
        <p>Our AI-driven prediction engine analyzes market trends to deliver precise forecasts and insights tailored to your Bitcoin investments. By leveraging advanced algorithms, we provide you with actionable data to enhance your investment strategies. Stay ahead in the dynamic cryptocurrency market with our accurate predictions.</p>
        <div className='buttons'>
          <label>Select Date:</label>
          <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
        </div>
        {bitcoinPrice && (
          <p>Bitcoin Price on {selectedDate}: ${bitcoinPrice}</p>
        )}
      </div>
      <div className='program'>
        <img src={download} alt="" />
      </div>
    </div>
  );
};

export default Programs;