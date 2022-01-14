import React, { useState } from 'react';
import Button from './Button';
import './Form.css'

function Form() {
  return ( 
    <form className='Form'>
      <div className='Form--section'>
        <label htmlFor="locomotion">How will you travel</label>
        <select name="locomotion">
          <option value='walk'>Walk</option>
          <option value='bike'>Bike</option>
          <option value='other'>Scooter/skateboard</option>
        </select>
      </div>
      <div className='Form--section'>
        <label htmlFor="travel-time">How long do you want to travel?</label>
        <input name="travel-time" type="number" min="1" />
      </div>
      <div className='Form--section'>
        <label htmlFor="locomotion">How will you travel</label>
        <select name="poi">
          <option value='restaurants'>Restaurants</option>
          <option value='grocery-stores'>Grocery Stores</option>
          <option value='hardware-stores'>Hardware Stores</option>
          <option value='entertainment'>entertainment</option>
        </select>
      </div>
      <div className='Form--section'>
        <label htmlFor="date">Date</label>
        <input name="date" type="date" />
      </div>
      <Button content='Submit' link={null} colorTheme='primary' />
    </form>
   );
}

export default Form;