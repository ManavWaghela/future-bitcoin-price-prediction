// eslint-disable-next-line
import React from 'react'
import './Hero.css'
import { Link } from 'react-scroll';
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>Unlock Tomorrow’s Bitcoin Trends Today</h1>
            <p>"Predict the Future, Trade with Confidence"</p>
            <button className='btn'><Link to='text-section' smooth={true} offset={-235} duration={500}>Get Started </Link><img src={dark_arrow}></img></button>
        </div>
    </div>
  )
}

export default Hero