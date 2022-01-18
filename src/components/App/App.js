import './App.css';
import { Routes, Route } from 'react-router';
import React, { useState, useEffect } from 'react';
import MainPage from '../MainPage/MainPage.js';
import ViewPage from '../ViewPage/ViewPage';
import EditPage from '../EditPage/EditPage';
import NewPage from '../NewPage/NewPage';
import ErrorPage from '../ErrorPage/ErrorPage';

function App() {
  const [trips, setTrips] = useState([])
  const [POIs, setPOIs] = useState('')
  const [selectedPOI, setSelectedPOI] = useState('')
  const [currTrip, setCurrTrip] = useState('')
  
  useEffect(() => {
    const retrievedTrips = JSON.parse(localStorage.getItem('savedTrips'))
    if (retrievedTrips?.length) {
      setTrips(retrievedTrips)
    } 
  }, []);

  useEffect(() => {
    localStorage.setItem('savedTrips', JSON.stringify(trips))
  }, [trips])

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

  function addTrip(newTrip) {
    setTrips(trips => [...trips, newTrip])
  }

  function checkTrip(id) {
    return !(trips.some(trip => trip.id === id))
  }

  function editTrip(newTrip, newPOI) {
    const newTrips = [...trips]
    const oldTrip = newTrips.find(trip => trip.id === newTrip.id)
    const isDupe = (oldTrip.destinations.some(dest => dest.id === newPOI.id))
    if (!isDupe) {
      oldTrip.destinations.push(newPOI)
    }
    setTrips(() => newTrips)
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' 
        element={<MainPage trips={trips} />} />

        <Route path='/new-trip' 
        element={<NewPage addTrip={addTrip} 
        checkTrip={checkTrip} />}/>

        <Route path='/edit/:tripID' 
        element={<EditPage 
        trips={trips} 
        POIs={POIs} 
        setPOIs={setPOIs}
        selectedPOI={selectedPOI}
        currTrip={currTrip}
        setCurrTrip={setCurrTrip} 
        highlightSelectedPOI={highlightSelectedPOI}
        updateSelectedPOI={updateSelectedPOI}
        removePOI={removePOI}
        />} />

        <Route path='/view/:tripID' 
        element={<ViewPage 
        trips={trips} 
        POIs={POIs} 
        setPOIs={setPOIs}
        selectedPOI={selectedPOI}
        currTrip={currTrip}
        setCurrTrip={setCurrTrip} 
        highlightSelectedPOI={highlightSelectedPOI}
        updateSelectedPOI={updateSelectedPOI}
        removePOI={removePOI}
        />} />

        <Route path='*' element={<ErrorPage />} />

      </Routes>
    </div>
  );
}

export default App;
