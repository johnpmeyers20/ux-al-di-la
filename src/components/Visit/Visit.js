import React from 'react'
import './Visit.css'
import Map from "../../Images/Map.png"

export default function Visit({ id }) {
  return (

    <visit className="section-content" id={id}>
    <div className='visit-image' style={{ backgroundImage: "url(" + Map + ")", backgroundSize: "cover", padding:"40px" }}></div>
    <div className='visit-box'>
      <p style={{fontSize: "26px"}}>248 5th Avenue Brooklyn, NY 11215<br/>Phone: 718-783-4565</p>
      <p>al di là is primarily a walk-in restaurant, but a very limited number of reservations are available for parties of 6-10 people</p>
      <p>Reservations, event booking & general inquiry:<br/>info@aldilatrattoria.com</p>
      <p>Dinner : Mon. - Sat. 5:30 - 11pm | Sun. 5-10pm<br/>
      Lunch : Mon. - Fri. 12pm - 3pm<br/>
      Brunch: Sat. & Sun. 11am - 3pm
      </p>
      </div>
     </visit>
  )
}

