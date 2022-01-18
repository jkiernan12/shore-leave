import React, {useEffect, useRef, useState} from 'react';
import './POICard.css'
import logo from '../../logo.svg'
import PropTypes from 'prop-types'

function POICard({type, name, image, selected, id, rating, fuel, updateSelectedMarina, updateSelectedPOI, categories, distance, address, removePOI, currTrip}) {
  const selectedCard = useRef(null)

  const [saved, setSaved] = useState(false)

  const scrollToElement = () => {
    selectedCard.current.scrollIntoView()
  }

  useEffect(() => {
    if (selected) {
      scrollToElement()
    }
  }, [selected])

  useEffect(() => {
    if (currTrip && currTrip.destinations?.length) {
    const isSaved = currTrip.destinations.some(dest => dest.id === id)
    setSaved(isSaved)
    } 
  }, [currTrip?.destinations])

  function handleDelete(id) {
    removePOI(id)
    setSaved(false)
  }

  function handleSelect(id) {
    updateSelectedPOI(id)
    setSaved(true)
  }

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
        {!saved && <button onClick={() => handleSelect(id) } className='button__primary POI--button'>Select</button>}
        {saved && <button onClick={() => handleDelete(id)}>Delete</button>}
      </article>
     )
  }
}

POICard.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  selected: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  rating: PropTypes.string,
  fuel: PropTypes.array,
  updateSelectedMarina: PropTypes.func,
  updateSelectedPOI: PropTypes.func,
  categories: PropTypes.array,
  distance: PropTypes.number,
  address: PropTypes.string,
  removePOI: PropTypes.func,
  currTrip: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
}

export default POICard;