import React from 'react';
import HamburgerMenu from '../../Images/menu-icon.svg';
import './Burger.css'

const Burger = ({ open, setOpen }) => {
  return (
    
    <button className="nav-toggle" open={open} onClick={() => setOpen(!open)}>
            <img src={HamburgerMenu}/>
    </button>
    // </burger>
  );
}

export default Burger;