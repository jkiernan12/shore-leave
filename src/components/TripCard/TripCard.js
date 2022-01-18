import React from 'react';
import { Link } from 'react-router-dom';
import './TripCard.css'

function TripCard({title, date, image, id}) {
  return ( 
    <Link to={`/view/${id}`} className='TripCard' >
      <img className='TripCard--image' src={image} />
      <div className='TripCard--text'>
        <h3>{title}</h3>
        <p>{date}</p>
      </div>
    </Link>
   );
}

export default TripCard;