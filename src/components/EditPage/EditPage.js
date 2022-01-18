import React, { useState, useEffect } from 'react'
import '../TripPage/TripPage.css'
import Nav from '../Nav/Nav';
import Map from '../Map/Map';
import Form from '../Form/Form';
import POIListings from '../POIListings/POIListings';
import { useParams } from 'react-router'


function EditPage({trips, POIs, setPOIs, selectedPOI, currTrip, setCurrTrip, highlightSelectedPOI, updateSelectedPOI, removePOI}) {
  
  const { tripID } = useParams()

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
      <section className='TripPage--right'>
        <Form setter={setPOIs}
          currTrip={currTrip}
        />
        <POIListings 
          POIs={POIs}
          selectedPOI={selectedPOI}
          updateSelectedPOI={updateSelectedPOI}
          type='poi'
          removePOI={removePOI}
          currTrip={currTrip} />
      </section>
      </main>
      </>
      
   );
}

export default EditPage