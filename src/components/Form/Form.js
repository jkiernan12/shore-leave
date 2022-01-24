import React, { useState } from 'react';
import './Form.css'
import { Link } from 'react-router-dom';
import { searchPOI } from '../../api-calls.js';
import PropTypes from 'prop-types'

function Form({ setter, currTrip, setErrorMessage, query, setQuery }) {
  const [locomotion, setLocomotion] = useState('walk')
  const [travelRadius, setTravelRadius] = useState(1)
  const [interest, setInterest] = useState('restaurants')

  function handlePOIClick(e) {
    e.preventDefault()
    const currLocomotion = query.locomotion
    const currTravelRadius = query.travelRadius
    const currInterest = query. interest
    console.log(query)
    searchPOI(query, currTrip, setter)
    .then(data => setter(data))
    .catch(err => setErrorMessage('There was an issue connecting with the database. Please try again later'))
  }

  return ( 
    <form className='Form'>
      <div className='Form--section'>
        <label htmlFor="locomotion">Travel type:</label>
        <select name="locomotion" value={query.locomotion} onChange={(e) => setQuery({...query, ...{locomotion: e.target.value}})} >
          <option value='walk'>Walk</option>
          <option value='bike'>Bike</option>
          <option value='other'>Scooter/skateboard</option>
        </select>
      </div>
      <div className='Form--section'>
        <label htmlFor="travel-time">Travel time (in mins):</label>
        <input name="travel-time" type="number" min="1" value={query.travelRadius} onChange={(e) => setQuery({...query, ...{travelRadius: e.target.value}})} />
      </div>
      <div className='Form--section'>
        <label htmlFor="locomotion">What are you looking for?</label>
        <select name="poi" value={query.interest} onChange={(e) => setQuery({...query, ...{interest: e.target.value}})} >
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