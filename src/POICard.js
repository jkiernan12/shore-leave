import React, {useEffect, useRef} from 'react';
import './POICard.css'
import logo from './logo.svg'
import Button from './Button';

function POICard({name, image, selected, rating, fuel}) {
  const selectedCard = useRef(null)

  const scrollToElement = () => {
    selectedCard.current.scrollIntoView()
  }

  useEffect(() => {
    if (selected) {
      scrollToElement()
    }
  }, [selected])

  return ( 
    <article ref={selectedCard} className={`POICard highlighted__${selected}`}>
      <img className='POICard--image' src={image ? image : logo}/>
      <div className='POICard--text'>
        <h3>{name}</h3>
        {fuel.length > 0 && <p>Fuel Available: {fuel.join(', ')}</p>}
        {rating && <p>Rating: {rating}</p>}
      </div>
      <button className='button__primary POI--button'>Select</button>
    </article>
   );
}

export default POICard;