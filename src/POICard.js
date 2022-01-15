import React from 'react';
import './POICard.css'
import logo from './logo.svg'

function POICard({name, image, selected, rating}) {
  return ( 
    <article className={`POICard highlighted__${selected}`}>
      <img className='POICard--image' src={image ? image : logo}/>
      <div className='POICard--text'>
        <h3>{name}</h3>
        <p>Information about the item here and more info. about the item here and more info. about the item here and more info. </p>
        {rating && <p>Rating: {rating}</p>}
      </div>
      <div className='POICard--heart'></div>
    </article>
   );
}

export default POICard;