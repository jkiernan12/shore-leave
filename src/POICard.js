import React, {useEffect, useRef} from 'react';
import './POICard.css'
import logo from './logo.svg'
import Button from './Button';

function POICard({type, name, image, selected, id, rating, fuel, updateSelectedMarina, updateSelectedPOI, categories, distance, address}) {
  const selectedCard = useRef(null)

  const scrollToElement = () => {
    selectedCard.current.scrollIntoView()
  }

  useEffect(() => {
    if (selected) {
      scrollToElement()
    }
  }, [selected])
  if (type === 'marina') {
  return ( 
    <article ref={selectedCard} className={`POICard highlighted__${selected}`}>
      <img className='POICard--image' src={image ? image : logo}/>
      <div className='POICard--text'>
        <h3>{name}</h3>
        {fuel.length > 0 && <p>Fuel Available: {fuel.join(', ')}</p>}
        {rating && <p>Rating: {rating}</p>}
      </div>
      <button onClick={() => updateSelectedMarina(id) } className='button__primary POI--button'>Select</button>
    </article>
   )
  } else {
    return ( 
      <article ref={selectedCard} className={`POICard highlighted__${selected}`}>
        <img className='POICard--image' src={image ? image : logo}/>
        <div className='POICard--text'>
          <h3>{name}</h3>
          {categories.length > 0 && <p>Categories: {categories.join(', ')}</p>}
          <p>Distance: {distance} meters</p>
          <p>Address: {address}</p>
          {rating && <p>Rating: {rating}</p>}
        </div>
        <button onClick={() => updateSelectedPOI(id) } className='button__primary POI--button'>Select</button>
      </article>
     )
  }
}

export default POICard;