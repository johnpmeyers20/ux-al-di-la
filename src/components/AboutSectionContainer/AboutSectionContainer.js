import React from 'react'
import './AboutSectionContainer.css'
import About from "../About/About.js"
import Visit from "../Visit/Visit.js"
import Map from "../../Images/Map.png"
import AboutImg from "../../Images/About.png"

const AboutSectionContainer = ({ Map, AboutImg, dark, id }) => {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
   
    <div class='about-section-container'id={id}>
      <img className='about-section-image' src={Map}/>
      <Visit />
      <About />
      <img className='about-section-image' src={AboutImg}/>
      </div>
      </div>
  )
}

export default AboutSectionContainer