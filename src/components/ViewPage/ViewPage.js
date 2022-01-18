import React, { useState, useEffect } from 'react'
import '../TripPage/TripPage.css'
import Nav from '../Nav/Nav';
import Map from '../Map/Map';
import POIListings from '../POIListings/POIListings';
import { useParams, useNavigate } from 'react-router'
import NewPage from '../NewPage/NewPage';
import EditPage from '../EditPage/EditPage';

function ViewPage({addTrip, editTrip, trips, setTrips, checkTrip}) {
  const [POIs, setPOIs] = useState('')
  const [selectedPOI, setSelectedPOI] = useState('')
  const [currTrip, setCurrTrip] = useState('')

  const { tripID } = useParams()
  let navigate = useNavigate()

  useEffect(() => {
    if (tripID) {
      const matchedTrip = trips.find(trip => trip.id === tripID)
      setCurrTrip(matchedTrip)
      setPOIs(matchedTrip.destinations)
  }
  }, [tripID])

  function highlightSelectedPOI(id) {
    setSelectedPOI(POIs.find(poi => poi.id === id))
  }

  function updateSelectedPOI(id) {
    const currPOI = POIs.find(poi => poi.id === id)
    let updatedDestinations = currTrip.destinations
    const isDupe = currTrip.destinations.some(destination => destination.id === id)
    if (!isDupe) {
      updatedDestinations = {
        destinations: [...currTrip.destinations, currPOI]
      }
      const newTrip = {...currTrip, ...updatedDestinations}
      setCurrTrip(newTrip) 
      if (!trips[0] || checkTrip(newTrip.id)) {
        addTrip(newTrip)
      } else if (!checkTrip(newTrip.id)) {
        editTrip(newTrip, currPOI)
      } 
    } 
  }

  function removePOI(id) {
    const newTrips = [...trips]
    const oldTrip = newTrips.find(trip => trip.id === currTrip.id)
    const oldDestinationIndex = oldTrip.destinations.findIndex(destination => destination.id === id)
    oldTrip.destinations.splice(oldDestinationIndex, 1)
    setTrips(() => ([...newTrips]))
    setCurrTrip(oldTrip)
  }
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