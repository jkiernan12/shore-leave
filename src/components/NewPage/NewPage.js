import React, { useState } from 'react'
import '../TripPage/TripPage.css'
import Nav from '../Nav/Nav';
import Map from '../Map/Map';
import DestinationForm from '../DestinationForm/DestinationForm'
import MarinaListings from '../MarinaListings/MarinaListings'
import PropTypes from 'prop-types'
import {IMarina} from '../../interfaces'

function NewPage({addTrip, checkTrip}) {
  const [marinas, setMarinas] = useState('')
  const [selectedMarina, setSelectedMarina] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

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
        setMarinas={setMarinas}
        setErrorMessage={setErrorMessage} />
      <section className='TripPage--right'>
        <DestinationForm 
        selectedMarina={selectedMarina} 
        setSelectedMarina={setSelectedMarina}
        addTrip={addTrip}
        checkTrip={checkTrip} />
        {errorMessage && <p>{errorMessage}</p>}
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

NewPage.propTypes = {
  addTrip: PropTypes.func.isRequired,
  checkTrip: PropTypes.func.isRequired
}

export default NewPage