import React from 'react'
import './ImageArray.css'
import Food1 from "../../Images/Food-1.png"
import Food2 from "../../Images/Food-2.png"
import Food3 from "../../Images/Food-3.png"
import Food4 from "../../Images/Food-4.png"

const ImageArray = () => {
  return (
    <div className="image-array-container">
      <img src={Food1} alt='dish one' />
      <img src={Food2} alt='dish two' />
      <img src={Food3} alt='dish three' />
      <img src={Food4} alt='dish four' />
    </div>
  )
}

export default ImageArray