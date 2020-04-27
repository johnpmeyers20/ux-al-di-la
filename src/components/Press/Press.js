import React from 'react'
import './Press.css'
import Press1 from "../../Images/Press-1.png"
import Press2 from "../../Images/Press-2.png"
import Press3 from "../../Images/Press-3.png"
import Press4 from "../../Images/Press-4.png"

const Press = () => {
  return (
    <press>
      <img src={Press1} alt='press image' />
      <img src={Press2} alt='press image' />
      <img src={Press3} alt='press image' />
      <img src={Press4} alt='press image' />
    </press>
  )
}

export default Press