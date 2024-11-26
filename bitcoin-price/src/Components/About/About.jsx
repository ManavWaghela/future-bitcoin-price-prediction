// eslint-disable-next-line
import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt=""  className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>ABOUT OUR PLATFORM</h3>
            <h2>Empowering Your Financial Future</h2>
            <p>Join us on an innovative journey into the world of cryptocurrency with our comprehensive Bitcoin price prediction platform. Our state-of-the-art algorithms and analytics tools are designed to equip users with the insights, skills, and strategies needed to navigate the ever-evolving crypto market successfully.</p>
            <p>With a focus on data-driven predictions, real-time analytics, and personalized support, our platform empowers investors and enthusiasts to make informed decisions that can lead to significant financial growth.</p>
            <p>Whether you are a novice exploring the world of Bitcoin or an experienced trader seeking advanced forecasting tools, our diverse offerings provide the perfect pathway to achieve your financial goals and unlock your full potential in the dynamic landscape of cryptocurrency.</p>
        </div>
    </div>
  )
}

export default About