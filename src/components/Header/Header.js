
import React, { Component } from "react";

import { Link, animateScroll as scroll } from "react-scroll";
import Logo from '../../Images/al_di_la_logo.svg'
import Hero from '../../Images/Hero.png'
import "../Header/Header.css"
export default class Header extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <header>
      <nav className="nav" id="navbar">
        <div className="nav-content">
          
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                menu
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                visit
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <img src={Logo} alt="logo"/>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                about
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                press
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div style={{ backgroundImage: "url(" + Hero + ")", backgroundSize: "cover", height: "80vh" }}></div>
      </header>
    );
  }
}


















// import React from 'react'
// import './Header.css'
// import { Link } from 'react-router-dom'
// import Logo from '../../Images/al_di_la_logo.svg'
// import Hero from '../../Images/Hero.png'

// const header = () => {
//   return (
//     <header>
//       <nav>
//         {/* links to a div on current page, not rendering a component */}
//         <Link to=''>Menu</Link>
//         <Link to=''>Visit</Link>
//         <img src={Logo} alt="logo"/>
//         <Link to=''>About</Link>
//         <Link to=''>Press</Link>
//       </nav>
//       <div style={{ backgroundImage: "url(" + Hero + ")", backgroundSize: "cover", height: "100vh" }}></div>
//     </header>
//   )
// }

// export default header