import React, { useState } from 'react';
import Button from './Button';
import './Form.css'

function Form({ searchPOI }) {
  const [locomotion, setLocomotion] = useState('walk')
  const [travelTime, setTravelTime] = useState(1)
  const [interest, setInterest] = useState('restaurants')

  function handlePOIClick(e) {
    e.preventDefault()
    searchPOI({locomotion, travelTime, interest})
  }

  return ( 
    <form className='Form'>
      <div className='Form--section'>
        <label htmlFor="locomotion">How will you travel</label>
        <select name="locomotion" value={locomotion} onChange={(e) => setLocomotion(e.target.value)} >
          <option value='walk'>Walk</option>
          <option value='bike'>Bike</option>
          <option value='other'>Scooter/skateboard</option>
        </select>
      </div>
      <div className='Form--section'>
        <label htmlFor="travel-time">How long do you want to travel?</label>
        <input name="travel-time" type="number" min="1" value={travelTime} onChange={(e) => setTravelTime(e.target.value)} />
      </div>
      <div className='Form--section'>
        <label htmlFor="locomotion">What are you looking for?</label>
        <select name="poi" value={interest} onChange={(e) => setInterest(e.target.value)} >
          <option value='restaurants'>Restaurants</option>
          <option value='grocery-stores'>Grocery Stores</option>
          <option value='hardware-stores'>Hardware Stores</option>
          <option value='entertainment'>entertainment</option>
        </select>
      </div>
      <button onClick={handlePOIClick}>Submit</button>
    </form>
   );
}

export default Form;