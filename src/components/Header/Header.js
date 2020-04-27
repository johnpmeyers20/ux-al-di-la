import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const header = () => {
  return (
    <header>
      <nav>
        {/* links to a div on current page, not rendering a component */}
        <Link to=''>Menu</Link>
        <Link to=''>Visit</Link>
        <img className='header-nav-image' alt='logo' />
        <Link to=''>About</Link>
        <Link to=''>Press</Link>
      </nav>
      <div>
        <img className='hero-image' src='Hero.png' alt='Hero' />
      </div>
    </header>
  )
}

export default header