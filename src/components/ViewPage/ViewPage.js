import React, { useState, useEffect } from 'react'
import '../TripPage/TripPage.css'
import Nav from '../Nav/Nav';
import Map from '../Map/Map';
import POIListings from '../POIListings/POIListings';
import { useParams, useNavigate } from 'react-router'

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
      <h1>{currTrip.marina.name}</h1>
      <p>{currTrip.date}</p>
      <button onClick={() => navigate(`/edit/${currTrip.id}`)}>Edit</button>
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

export default ViewPage