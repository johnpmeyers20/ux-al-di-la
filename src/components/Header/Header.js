import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import Logo from '../../Images/al_di_la_logo.svg'
import Hero from '../../Images/Hero.png'

const header = () => {
  return (
    <header>
      <nav>
        {/* links to a div on current page, not rendering a component */}
        <Link to=''>Menu</Link>
        <Link to=''>Visit</Link>
        <img src={Logo} alt="logo"/>
        <Link to=''>About</Link>
        <Link to=''>Press</Link>
      </nav>
      <div style={{ backgroundImage: "url(" + Hero + ")", backgroundSize: "cover", height: "100vh" }}></div>
    </header>
  )
}

export default header