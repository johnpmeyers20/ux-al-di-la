import React from 'react'
import './Press.css'
import Press1 from "../../Images/Press-1.png"
import Press2 from "../../Images/Press-2.png"
import Press3 from "../../Images/Press-3.png"
import Press4 from "../../Images/Press-4.png"

export default function Press ({dark, id }){
  return (

    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
      <a href="https://tmagazine.blogs.nytimes.com/2014/08/28/al-di-la-vino-sunday-night-dinner/"><img src={Press1}/></a>
      <a href="https://www.cntraveler.com/restaurants/brooklyn/al-di-la-trattoria"><img src={Press2}/></a>
      <a href="https://www.timeout.com/newyork/restaurants/al-di-la-vino"><img src={Press3}/></a>
      <a href="https://www.wsj.com/articles/brooklyn-restaurant-reaches-far-with-challenging-wines-1379037898"><img src={Press4}/></a>
      </div>
      </div>

  )
}

