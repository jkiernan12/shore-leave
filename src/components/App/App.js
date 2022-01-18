import './App.css';
import { Routes, Route, useParams } from 'react-router';
import React, { useState, useEffect } from 'react';
import MainPage from '../MainPage/MainPage.js';
import TripPage from '../TripPage/TripPage.js'

function App() {
  const [trips, setTrips] = useState([])
  const [stage, setStage] = useState('marina')

  function getTripByID(id) {
    return trips.find(trip => trip.id === id)
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
        <Route path='/' element={<MainPage trips={trips} setStage={setStage} />} />
        <Route path='/new-trip' element={<TripPage addTrip={addTrip} editTrip={editTrip} trips={trips} setTrips={setTrips} stage={stage} setStage={setStage} checkTrip={checkTrip} />}/>
        <Route path='/trips/:tripID' element={<TripPage addTrip={addTrip} editTrip={editTrip} trips={trips} setTrips={setTrips} setStage={setStage} stage={stage} checkTrip={checkTrip}/>} />
      </Routes>
    </div>
  );
}

export default App;
