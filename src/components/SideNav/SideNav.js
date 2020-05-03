import React from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom"
// import { animateScroll as scroll } from "react-scroll";

// import './SideNav.css'
// import { StyledNav } from './SideNav.styled.js';

// import Header from "../Header/Header.js"
import styled from 'styled-components';

import Menu  from '../Menu/Menu.js'

import About   from '../About/About.js'
import Visit  from '../Visit/Visit.js'
import Press  from '../Press/Press.js'


const StyledNav = styled.nav`
background-color: #fec91d;
opacity: 0.7;
  width: 200px;
  position: fixed;
  top: 55px;
  left: 0;
  height: 22%;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)") };
  transition: transform 0.5s ease;
  z-index: 2;
  padding: 45px 35px;
  border: 1px solid #fec91d;
  border-radius: 1px;
  margin-left: 1px;
  a {
    font-size: 24px;
    text-decoration: none;
    color: black;
    display: block;
    font-family: "Brandon Reg";
    text-align: left;
    margin-bottom: 20px;
  }
`;




const SideNav = ({ open }) => {
  return (
    <StyledNav open={open}>
     
      <a href="/brunch">
        
        menu
      </a>
      <a href="/section2">
        
        visit
        </a>
      <a href="/section4">
        
        about
        </a>
        <a href="/section5">
       
        press
        </a>
    </StyledNav>
  )
}
export default SideNav;






 {/* <Link to="/brunch">menu</Link>
      <Link to="/section2">visit</Link>
      <Link to="/section4">about</Link>
      <Link to="/section5">press</Link> */}


















// const SideNav = ({ open }) => {
  

//   return (
//     <StyledNav open={open}>
      
//       <Link to="/brunch">menu</Link>
//       <Link to="/section2">visit</Link>
//       <Link to="/section4">about</Link>
//       <Link to="/section5">press</Link>
      
//     </StyledNav>
//   )
// }
// export default SideNav;