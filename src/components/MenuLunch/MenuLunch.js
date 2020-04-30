import React from 'react'
import './MenuLunch.css'


const MenuLunch = (props) => {
  let items = props.menu.items;
  console.log(items);
  return (
    <div className="menu-container">
      <h3 className="dish-title">Antipasti</h3>
      {items.filter(item => item.type === "Antipasti").map(item => {
        return (
          <div>
            <div className="menu-dish"><strong>{item.dish}</strong> ${item.cost.toFixed(2)}<br />{item.caption}</div>
          </div>)
      })}
      <h3 className="dish-title">Panini</h3>
      {items.filter(item => item.type === "Panini").map(item => {
        return (
          <div>
            <div className="menu-dish"><strong>{item.dish}</strong> ${item.cost.toFixed(2)}<br />{item.caption}</div>
          </div>)
      })}
      <h3 className="dish-title">Pasta</h3>
      {items.filter(item => item.type === "Pasta").map(item => {
        return (
          <div>
            <div className="menu-dish"><strong>{item.dish}</strong> ${item.cost.toFixed(2)}<br />{item.caption}</div>
          </div>)
      })}
      <h3 className="dish-title">Piatti Caldi</h3>
      {items.filter(item => item.type === "Piatti Caldi").map(item => {
        return (
          <div>
            <div className="menu-dish"><strong>{item.dish}</strong> ${item.cost.toFixed(2)}<br />{item.caption}</div>
          </div>)
      })}
    </div>
  )
}

export default MenuLunch