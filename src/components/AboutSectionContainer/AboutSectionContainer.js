import React from 'react'
import './AboutSectionContainer.css'
import About from "../About/About.js"
import Visit from "../Visit/Visit.js"


const AboutSectionContainer = () => {
  return (
    <div class='about-section-container'>
      <div className='about-section-image'>
        <h1>Image here</h1>
        {/* <img src='' /> */}
      </div>
      <Visit />
      <About />
      <div className='about-section-image'>
        <h1>Image here</h1>
        {/* <img src='' /> */}
      </div>
    </div>
  )
}

export default AboutSectionContainer