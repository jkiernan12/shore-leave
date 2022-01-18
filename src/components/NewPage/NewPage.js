import React, { useState, useEffect } from 'react'
import '../TripPage/TripPage.css'
import Nav from '../Nav/Nav';
import Map from '../Map/Map';
import Form from '../Form/Form';
import POIListings from '../POIListings/POIListings';
import DestinationForm from '../DestinationForm/DestinationForm'
import MarinaListings from '../MarinaListings/MarinaListings';
import { useParams } from 'react-router'

function NewPage({addTrip, trips, setPOIs, stage, setStage, checkTrip}) {
  const [marinas, setMarinas] = useState('')
  const [selectedMarina, setSelectedMarina] = useState('')
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

  return ( 
    <>
    <Nav />
    <main className='TripPage'>
      <Map className='Map' 
        marinas={marinas} 
        selectedMarina={selectedMarina}
        updateSelectedMarina={updateSelectedMarina}
        stage={stage}
        setMarinas={setMarinas} />
      <section className='TripPage--right'>
        <DestinationForm 
        selectedMarina={selectedMarina} 
        setSelectedMarina={setSelectedMarina}
        addTrip={addTrip}
        setCurrTrip={setCurrTrip}
        setStage={setStage}
        checkTrip={checkTrip} />
        <MarinaListings 
          marinas={marinas}
          selectedMarina={selectedMarina}
          updateSelectedMarina={updateSelectedMarina}
          type='marina' />
      </section>
    </main>
    </>
   );
}

export default NewPage