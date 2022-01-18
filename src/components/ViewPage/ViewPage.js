import React, { useState, useEffect } from 'react'
import '../TripPage/TripPage.css'
import Nav from '../Nav/Nav';
import Map from '../Map/Map';
import POIListings from '../POIListings/POIListings';
import { useParams, useNavigate } from 'react-router'
import PropTypes from 'prop-types'

function ViewPage({trips, POIs, setPOIs, selectedPOI, currTrip, setCurrTrip, highlightSelectedPOI, updateSelectedPOI, removePOI}) {
  const { tripID } = useParams()
  let navigate = useNavigate()

  useEffect(() => {
    if (tripID) {
      const matchedTrip = trips.find(trip => trip.id === tripID)
      setCurrTrip(matchedTrip)
      setPOIs(matchedTrip.destinations)
  }
  }, [tripID])

  return ( 
    <>
      <Nav />
      <main className='TripPage'>
        <Map className='Map' 
          POIs={POIs}
          selectedPOI={selectedPOI}
          highlightSelectedPOI={highlightSelectedPOI} />
     {currTrip && <section className='TripPage--right'>
     <div className='ViewPage--info'>
      <h1>{currTrip.marina.name}</h1>
      <p>{currTrip.date}</p>
      <button onClick={() => navigate(`/edit/${currTrip.id}`)}>Edit</button>
     </div>

        <POIListings 
          POIs={currTrip.destinations}
          selectedPOI={selectedPOI}
          updateSelectedPOI={updateSelectedPOI}
          type='poi'
          removePOI={removePOI}
          currTrip={currTrip}
           />
      </section>}
      </main>
      </>
   );
}

ViewPage.propTypes = {
  trips: PropTypes.array.isRequired,
  POIs: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  setPOIs: PropTypes.func.isRequired,
  selectedPOI: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  currTrip: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  setCurrTrip: PropTypes.func.isRequired,
  highlightSelectedPOI: PropTypes.func.isRequired,
  updateSelectedPOI: PropTypes.func.isRequired,
  removePOI: PropTypes.func.isRequired
}

export default ViewPage