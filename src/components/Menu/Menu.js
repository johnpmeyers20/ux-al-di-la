import React from 'react'
import './Menu.css'
import { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import MenuBrunch from '../MenuBrunch/MenuBrunch'
import MenuLunch from '../MenuLunch/MenuLunch'
import MenuDinner from '../MenuDinner/MenuDinner'
import MenuDessert from '../MenuDessert/MenuDessert'
import Menus from './Menus.json'


console.log(Menus);

class Menu extends Component {
  constructor() {
    super()
    this.state = {
      menus: Menus
    }
  }
  render() {
    console.log(this.state.menus.Dinner)
    return (
      <div>
        <nav className='menu-nav-container'>
          <Link className="menu-section-title" to='/'>brunch</Link>
          <Link className="menu-section-title" to='/lunch-menu'>lunch</Link>
          <Link className="menu-section-title" to='/dinner-menu'>dinner</Link>
          <Link className="menu-section-title" to='/dessert-menu'>dessert</Link>
        </nav>
        <div className='current-menu'>
          <Route exact path='/' render={MenuBrunch} />
          <Route path='/lunch-menu' render={MenuLunch} />
          <Route path='/dinner-menu' render={() =>
            <MenuDinner menu={this.state.menus.Dinner} />} />
          <Route path='/dessert-menu' render={MenuDessert} />
        </div>

      </div>
    )
  }

}

export default Menu;
