import React from 'react'
import './MenuDinner.css'

const MenuDinner = (props) => {
  let items = props.menu.items;
  console.log(items);
  return (
    <div>
      <h3>Antipasti</h3>
        {items.map(item => {return (item.type)})}
      <h3>Primi</h3>
      {items.filter(item => item.type === "Primi").map(item => { return (<h4>{item.dish}</h4>)})}
      <h3>Secondi</h3>
      <h3>Contorni</h3>
    </div>
  )
}

export default MenuDinner