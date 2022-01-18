import React, { useState } from 'react';
import './Form.css'
import { Link } from 'react-router-dom';
import { searchPOI } from '../../api-calls.js';
import PropTypes from 'prop-types'

function Form({ setter, currTrip, setErrorMessage }) {
  const [locomotion, setLocomotion] = useState('walk')
  const [travelTime, setTravelTime] = useState(1)
  const [interest, setInterest] = useState('restaurants')

  function handlePOIClick(e) {
    e.preventDefault()
    searchPOI({locomotion, travelTime, interest}, currTrip, setter)
    .then(data => setter(data))
    .catch(err => setErrorMessage('There was an issue connecting with the database. Please try again later'))
  }

  return ( 
    <form className='Form'>
      <div className='Form--section'>
        <label htmlFor="locomotion">Travel type:</label>
        <select name="locomotion" value={locomotion} onChange={(e) => setLocomotion(e.target.value)} >
          <option value='walk'>Walk</option>
          <option value='bike'>Bike</option>
          <option value='other'>Scooter/skateboard</option>
        </select>
      </div>
      <div className='Form--section'>
        <label htmlFor="travel-time">Travel time (in mins):</label>
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
      <button onClick={handlePOIClick}>Search</button>
      <Link to='/'>
      <button className='return--button'>Return Home</button>
      </Link>
    </form>
   );
}

Form.propTypes = {
  currTrip: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  setter: PropTypes.func,
  setErrorMessage: PropTypes.func

}

export default Form;