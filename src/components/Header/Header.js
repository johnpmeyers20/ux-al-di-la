<<<<<<< HEAD
import React,
{
  Component
}

  from "react";

import {
  Link,
  animateScroll as scroll
}

  from "react-scroll";
=======
import React, { useState, useRef } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { useOnClickOutside } from '../../hooks';
>>>>>>> 3c9c5f99a06766e4be4d18d0e5da70f48a8af547
import Logo from '../../Images/al_di_la_logo.svg'
import Hero from '../../Images/Hero-edit.png'
import "../Header/Header.css"
import Burger from '../Burger/Burger.js';
import SideNav from '../SideNav/SideNav.js'

export default function Header({ id }) {
<<<<<<< HEAD
  const scrollToTop = () => {
    scroll.scrollToTop();
  }

    ;
=======

  const [open, setOpen] = useState(false);
  const node = useRef(); 
  useOnClickOutside(node, () => setOpen(false));
>>>>>>> 3c9c5f99a06766e4be4d18d0e5da70f48a8af547

  return (
    <header id={id}>
      <nav className="nav" id="navbar">
          
        <div className="nav-content">
          <div ref={node}>
            <Burger open={open} setOpen={setOpen}/>
            <SideNav open={open} setOpen={setOpen}/>
          </div>
          <Link
            className="nav-item"
            activeClass="active"
            to="brunch"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            menu
              </Link>
          {/* </li> */}
          {/* <li className="nav-item"> */}
          <Link
            className="nav-item"
            activeClass="active"
            to="section2"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            visit
              </Link>
          {/* </li> */}
          {/* <li className="nav-item"> */}
          <Link
            className="nav-item-logo"
            activeClass="active"
            to="section3"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <img src={Logo} alt="logo" />
          </Link>
          {/* </li> */}
          {/* <li className="nav-item"> */}
          <Link
            className="nav-item"
            activeClass="active"
            to="section4"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            about
              </Link>
          {/* </li> */}
          {/* <li className="nav-item"> */}
          <Link
            className="nav-item"
            activeClass="active"
            to="section5"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            press
          </Link>
          {/* </li> */}
          {/* </ul> */}
        </div>
      </nav>
      {/* <div style={{ backgroundImage: "url(" + Hero + ")", backgroundSize: "cover", height: "80vh", backgroundPosition: "center" }}> */}
      <div className="hero-text-container">
        <h1 className="hero-text">A Taste of Northern Italy</h1>
        <button className="order-button">order here</button>
<<<<<<< HEAD
        <img src={Hero} width="100%" height="100%" />
=======
        <img className="hero-image" src={Hero} alt="" width="100%" height="100%" />
>>>>>>> 3c9c5f99a06766e4be4d18d0e5da70f48a8af547
      </div>
      {/* </div> */}
    </header>
  );
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