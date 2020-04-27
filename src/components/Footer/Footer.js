import React from 'react'
import './Footer.css'
import Fb from "../../Images/Facebook.svg"
import Ig from "../../Images/Instagram.svg"

const Footer = () => {
  return (
    <footer>
      <h2>This is a footer</h2>
      <img src={Fb} />
      <img src={Ig} />
    </footer>
  )
}

export default Footer