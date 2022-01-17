import React, { useState, useEffect } from 'react'
import './TripPage.css'
import Nav from '../Nav/Nav';
import Map from '../Map/Map';
import Form from '../Form/Form';
import POIListings from '../POIListings/POIListings';
import DestinationForm from '../DestinationForm/DestinationForm'
import MarinaListings from '../MarinaListings/MarinaListings';
import { useParams } from 'react-router'

function TripPage({addTrip, editTrip, trips, setTrips, stage, setStage}) {
  const [marinas, setMarinas] = useState('')
  const [selectedMarina, setSelectedMarina] = useState('')
  const [POIs, setPOIs] = useState('')
  const [selectedPOI, setSelectedPOI] = useState('')
  const [currTrip, setCurrTrip] = useState('')

  const { tripID } = useParams()

  useEffect(() => {
    if (tripID && stage === 'existing') {
      const matchedTrip = trips.find(trip => trip.id === tripID)
      setCurrTrip(matchedTrip)
      setPOIs(matchedTrip.destinations)
  }
  }, [tripID])

  function updateSelectedMarina(id) {
    setSelectedMarina(marinas.find(marina => marina.id === id))
  }

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
      if (!trips[0]) {
        addTrip(newTrip)
      } else if (trips.find(trip => trip.id === currTrip.id)) {
        editTrip(newTrip, currPOI)
      } else if (!trips.find(trip => trip.id === currTrip.id)) {
        addTrip(newTrip)
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
        marinas={marinas} 
        selectedMarina={selectedMarina}
        updateSelectedMarina={updateSelectedMarina}
        POIs={POIs}
        selectedPOI={selectedPOI}
        highlightSelectedPOI={highlightSelectedPOI}
        stage={stage}
        setMarinas={setMarinas} />
      {stage === 'marina' && <section className='TripPage--right'>
        <DestinationForm 
        selectedMarina={selectedMarina} 
        setSelectedMarina={setSelectedMarina}
        addTrip={addTrip}
        setCurrTrip={setCurrTrip}
        setStage={setStage} />
        <MarinaListings 
          marinas={marinas}
          selectedMarina={selectedMarina}
          updateSelectedMarina={updateSelectedMarina}
          type='marina' />
      </section>
      }
      {stage === 'locations' && <section className='TripPage--right'>
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
      }
      {stage === 'existing' && currTrip && <section className='TripPage--right'>
      <h1>{currTrip.marina.name}</h1>
      <p>{currTrip.date}</p>
      <button onClick={() => setStage('locations')}>Edit</button>
        <POIListings 
          POIs={currTrip.destinations}
          selectedPOI={selectedPOI}
          updateSelectedPOI={updateSelectedPOI}
          type='poi'
          removePOI={removePOI}
          currTrip={currTrip}
           />
      </section>
      } 
      
    </main>
    </>
   );
}

export default TripPage