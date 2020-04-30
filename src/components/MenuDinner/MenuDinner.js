import React from 'react'
import './MenuDinner.css'

const MenuDinner = (props) => {
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
      <h3 className="dish-title">Primi</h3>
      {items.filter(item => item.type === "Primi").map(item => {
        return (
          <div>
            <div className="menu-dish"><strong>{item.dish}</strong> ${item.cost.toFixed(2)}<br />{item.caption}</div>
          </div>)
      })}
      <h3 className="dish-title">Secondi</h3>
      {items.filter(item => item.type === "Secondi").map(item => {
        return (
          <div>
            <div className="menu-dish"><strong>{item.dish}</strong> ${item.cost.toFixed(2)}<br />{item.caption}</div>
          </div>)
      })}
      <h3 className="dish-title">Contorni</h3>
      {items.filter(item => item.type === "Contorni").map(item => {
        return (
          <div>
            <div className="menu-dish"><strong>{item.dish}</strong> ${item.cost.toFixed(2)}<br />{item.caption}</div>
          </div>)
      })}
    </div>
  )
}

export default MenuDinner