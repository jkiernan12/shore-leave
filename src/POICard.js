import React from 'react';
import './POICard.css'
import logo from './logo.svg'

function POICard() {
  return ( 
    <article className='POICard'>
      <img className='POICard--image' src={logo}/>
      <div className='POICard--text'>
        <h3>Title</h3>
        <p>Information about the item here and more info. about the item here and more info. about the item here and more info. </p>
      </div>
      <div className='POICard--heart'></div>
    </article>
   );
}

export default POICard;