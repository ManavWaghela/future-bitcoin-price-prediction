// eslint-disable-next-line
import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';


const App = () => {

const [playState, setPlayState] = useState(false);
//checking

  return (
  <div>
    <Navbar />
    <Hero />
    <div className="container">
      <Title subTitle='Predictions' title='What We Offer'/>
      <Programs />
      <h2 style={{  textAlign: 'center', fontSize: '32px', color: '#ffffff', marginTop: '160px', textTransform: 'uppercase',}}>Latest from the Blog</h2> 
      <p style={{ textAlign: 'center', color: '#d8cccc', fontSize: '20px', fontWeight: 600,  marginTop: '10px',}} >
      Stay up-to-date with the latest news, analysis, and insights about Bitcoin and cryptocurrency trading. </p>      
      <Campus />
      <Title subTitle='Chat with our AI assistant' title='Start Chatting'/>
      <Testimonials />
      <About setPlayState={setPlayState}/>
      <Title subTitle='Contact Us' title='Get in Touch'/>
      <Contact />
      <Footer />
    </div> 
    <VideoPlayer playState={playState} setPlayState={setPlayState}/>   
  </div>
  )
}

export default App