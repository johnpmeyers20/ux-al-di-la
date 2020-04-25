import React from "react"
import './Menu.css'
import { Link, Route } from "react-router-dom"

const Menu = () => {
  return (
    <div>
      <nav>
        <Link to="" >Brunch</Link>
        <Link to="" >Lunch</Link>
        <Link to="" >Dinner</Link>
        <Link to="" >Dessert</Link>
      </nav>
      <Route />
      <Route />
      <Route />
      <Route />
    </div>
  )
}

export default Menu