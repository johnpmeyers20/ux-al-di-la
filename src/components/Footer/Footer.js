import React from 'react'
import './Footer.css'
import Fb from "../../Images/Facebook.svg"
import Ig from "../../Images/Instagram.svg"

const Footer = () => {
  return (
    <footer>
      <p>&copy;2020 al di là, All Rights Reserved</p>
      <div>
        <img className="fb-link" src={Fb} />
        <img className="ig-link" src={Ig} />
      </div>
    </footer>
  )
}

export default Footer