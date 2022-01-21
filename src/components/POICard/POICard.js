import React, {useEffect, useRef, useState} from 'react';
import './POICard.css'
import logo from '../../logo.svg'
import PropTypes from 'prop-types'
import { fetchImages, fetchTravelTime, travelTime } from '../../api-calls';

function POICard({type, name, selected, id, rating, fuel, updateSelectedMarina, updateSelectedPOI, categories, distance, address, removePOI, currTrip, location}) {
  const selectedCard = useRef(null)

  const [saved, setSaved] = useState(false)
  const [image, setImage] = useState('')
  const [travelTime, setTravelTime] = useState(0);

  const scrollToElement = () => {
    selectedCard.current.scrollIntoView()
  }

  useEffect(() => {
    if (type === 'poi') {
      fetchImages(id)
      .then(url => setImage(url))
      .catch(err => console.log(err))
      fetchTravelTime([currTrip.marina.location.lon + ',' + currTrip.marina.location.lat, location.lon + ',' + location.lat])
      .then(data => setTravelTime(data))
      .catch(err => console.log(err))
    }
  }, [])

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
          {categories.length > 0 && <p><span className='bold'>Categories</span>: {categories.join(', ')}</p>}
          <p><span className='bold'>Distance</span>: {distance} meters</p>
          <p><span className='bold'>Address</span>: {address}</p>
          {travelTime > 0 && <p><span className='bold'>Travel Time</span>: {travelTime} mins</p>}
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