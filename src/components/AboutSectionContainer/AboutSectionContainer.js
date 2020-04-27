import React from 'react'
import './AboutSectionContainer.css'
import About from "../About/About.js"
import Visit from "../Visit/Visit.js"
import Map from "../../Images/Map.png"
import AboutImg from "../../Images/About.png"

const AboutSectionContainer = () => {
  return (
    <div class='about-section-container'>
      <img className='about-section-image' src={Map}/>
      <Visit />
      <About />
      <img className='about-section-image' src={AboutImg}/>
    </div>
  )
}

export default AboutSectionContainer