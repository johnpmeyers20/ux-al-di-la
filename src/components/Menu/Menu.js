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
          <Link className="menu-section-title" id="brunch" to='/'>brunch</Link>
          <Link className="menu-section-title" id="lunch" to='/lunch-menu'>lunch</Link>
          <Link className="menu-section-title" id="dinner" to='/dinner-menu'>dinner</Link>
          <Link className="menu-section-title" id="dessert" to='/dessert-menu'>dessert</Link>
        </nav>
        <div className='current-menu'>
          <Route exact path='/' render={() => <MenuBrunch menu={this.state.menus.Brunch} />} />
          <Route path='/lunch-menu' render={() => <MenuLunch menu={this.state.menus.Lunch} />} />
          <Route path='/dinner-menu' render={() => <MenuDinner menu={this.state.menus.Dinner} />} />
          <Route path='/dessert-menu' render={() => <MenuDessert menu={this.state.menus.Dessert} />} />
        </div>
      </div>
    )
  }
}

export default Menu;


// Don't know what's going on here. this needs to be a class component. Ask Sebastian.
// export default function Menu({dark, id}){ 
//   return (
//     <div className={"section" + (dark ? " section-dark" : "")}>
//     <div className="section-content" id={id}>
//       <nav className='menu-nav-container'>
//         <Link className="menu-section-title" id="brunch" to='/'>brunch</Link>
//         <Link className="menu-section-title" id="lunch" to='/lunch-menu'>lunch</Link>
//         <Link className="menu-section-title" id="dinner" to='/dinner-menu'>dinner</Link>
//         <Link className="menu-section-title" id="dessert" to='/dessert-menu'>dessert</Link>
//       </nav>
//       <div className='current-menu'>
//         <Route exact path='/' render={() => <MenuBrunch menu={this.state.menus.Brunch} />} />
//         <Route path='/lunch-menu' render={() => <MenuLunch menu={this.state.menus.Lunch} />} />
//         <Route path='/dinner-menu' render={() => <MenuDinner menu={this.state.menus.Dinner} />} />
//         <Route path='/dessert-menu' render={() => <MenuDessert menu={this.state.menus.Dessert} />} />
//       </div>
//     </div>
//     </div>
//   )
// }




