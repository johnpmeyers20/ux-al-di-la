import React from 'react';
import { Link, Route } from 'react-router-dom'
// import './SideNav.css'
// import { StyledNav } from './SideNav.styled.js';
import styled from 'styled-components';


const StyledNav = styled.nav`
background-color: #fec91d;
  width: 400px;
  position: fixed;
  top: 55px;
  left: 0;
  height: 50%;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.5s ease;
  z-index: 2;
  padding: 45px 35px;
  border: 1px solid white;
  border-radius: 5px;
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
      
      <Link to="/brunch">menu</Link>
      <Link to="/section2">visit</Link>
      <Link to="/section4">about</Link>
      <Link to="/section5">press</Link>
      
    </StyledNav>
  )
}
export default SideNav;