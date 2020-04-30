import React from 'react'
import './Menu.css'
import { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'
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
      menus: Menus,
      // active: false
    }
  }

  // toggleSelected = () => {
  //   this.setState({active: !this.state.active})
  // }

  render() {
    console.log(this.state.menus.Dinner)

    return (
      <div>
        {/* <nav className='menu-nav-container'>
          <NavLink activeClassName={ this.state.active ? "selected" : "" } className="menu-section-title" onClick={this.toggleSelected} id="brunch" to='/'>brunch</NavLink>
          <NavLink activeClassName={ this.state.active ? "selected" : "" } className="menu-section-title" onClick={this.toggleSelected} id="lunch" to='/lunch-menu'>lunch</NavLink>
          <NavLink activeClassName={ this.state.active ? "selected" : "" } className="menu-section-title" onClick={this.toggleSelected} id="dinner" to='/dinner-menu'>dinner</NavLink>
          <NavLink activeClassName={ this.state.active ? "selected" : "" } className="menu-section-title" onClick={this.toggleSelected} id="dessert" to='/dessert-menu'>dessert</NavLink>
        </nav> */}
        <nav className='menu-nav-container'>
          <NavLink className="menu-section-title" activeClassName="selected" id="brunch" exact to='/'>brunch</NavLink>
          <NavLink className="menu-section-title" activeClassName="selected" id="lunch" exact to='/lunch-menu'>lunch</NavLink>
          <NavLink className="menu-section-title" activeClassName="selected" id="dinner" exact to='/dinner-menu'>dinner</NavLink>
          <NavLink className="menu-section-title" activeClassName="selected" id="dessert" exact to='/dessert-menu'>dessert</NavLink>
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




