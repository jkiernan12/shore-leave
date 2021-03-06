import React, { useEffect } from 'react';
import './Form.css'
import { Link } from 'react-router-dom';
import { searchPOI, fetchIsochrone } from '../../api-calls.js';
import PropTypes from 'prop-types'

function Form({ setter, currTrip, setCurrTrip, setErrorMessage }) {
  useEffect(() => {
    if (currTrip) {
      handlePOIClick()
    }
  }, []);
  
  function handlePOIClick(e) {
    if (e) {
      e.preventDefault()
    }
    searchPOI(currTrip.query, currTrip, setter)
    .then(data => setter(data.filter(poi => poi.travelTime <= currTrip.query.travelRadius)))
    .catch(err => setErrorMessage('There was an issue connecting with the database. Please try again later'))
    
    fetchIsochrone(currTrip.marina.location.lon, currTrip.marina.location.lat, currTrip.query.travelRadius)
    .then(data => {
      const newCurrTrip = {...currTrip}
      newCurrTrip.query.isochrone = data
      setCurrTrip(newCurrTrip)
    })
  }
  
  function handleInputChange(e) {
    const newValue = {
      [e.target.name]: e.target.value
    }
    let newQuery = {...currTrip.query, ...newValue}
    const newCurrTrip = {...currTrip, ...{query: newQuery}}
    setCurrTrip(newCurrTrip)
  }

  return ( 
    <form className='Form'>
      <div className='Form--section'>
        <label htmlFor="locomotion">Travel type:</label>
        <select name="locomotion" value={currTrip.query?.locomotion} onChange={(e) => handleInputChange(e)} >
          <option value='walk'>Walk</option>
          <option value='bike'>Bike</option>
          <option value='other'>Scooter/skateboard</option>
        </select>
      </div>
      <div className='Form--section'>
        <label htmlFor="travelRadius">Travel time (in mins):</label>
        <input name="travelRadius" type="number" min="1" value={currTrip.query?.travelRadius} onChange={(e) => handleInputChange(e)} />
      </div>
      <div className='Form--section'>
        <label htmlFor="interest">What are you looking for?</label>
        <select name="interest" value={currTrip.query?.interest} onChange={(e) => handleInputChange(e)} >
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