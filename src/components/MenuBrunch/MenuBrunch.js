import React from 'react'
import './MenuBrunch.css'

const MenuBrunch = (props) => {
  let items = props.menu.items;
  console.log(items);
  return (
    <div className="menu-container">
      <h3 className="menu-section-title">Eggs and Breakfast</h3>
      {items.filter(item => item.type === "Eggs and Breakfast").map(item => {
        return (
          <div>
            <div className="menu-dish"><strong>{item.dish}</strong> ${item.cost.toFixed(2)}<br />{item.caption}</div>
          </div>)
      })}
      <h3 className="menu-section-title">Salads</h3>
      {items.filter(item => item.type === "Salads").map(item => {
        return (
          <div>
            <div className="menu-dish"><strong>{item.dish}</strong> ${item.cost.toFixed(2)}<br />{item.caption}</div>
          </div>)
      })}
      <h3 className="menu-section-title">Pasta</h3>
      {items.filter(item => item.type === "Pasta").map(item => {
        return (
          <div>
            <div className="menu-dish"><strong>{item.dish}</strong> ${item.cost.toFixed(2)}<br />{item.caption}</div>
          </div>)
      })}
      <h3 className="menu-section-title">Sides</h3>
      {items.filter(item => item.type === "Sides").map(item => {
        return (
          <div>
            <div className="menu-dish"><strong>{item.dish}</strong> ${item.cost.toFixed(2)}<br />{item.caption}</div>
          </div>)
      })}
    </div>
  )
}

export default MenuBrunch