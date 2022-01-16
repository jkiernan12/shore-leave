import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router';
import React, { useState } from 'react';
import MainPage from './MainPage';
import TripPage from './TripPage'

function App() {
  const [trips, setTrips] = useState([])
  const [stage, setStage] = useState('marina')

  function addTrip(newTrip) {
    console.log('add trip runs')
    setTrips([...trips, newTrip])
  }

  function editTrip(newTrip, newPOI) {
    const oldTrip = trips.find(trip => trip.id === newTrip.id)
    const isDupe = (oldTrip.destinations.some(dest => dest.id === newPOI.id))
    if (!isDupe) {
      oldTrip.destinations.push(newPOI)
    }
    setTrips(trips)
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage trips={trips} setStage={setStage} />} />
        <Route path='/new-trip' element={<TripPage addTrip={addTrip} editTrip={editTrip} trips={trips} stage={stage} setStage={setStage} />}/>
        <Route path='/trips/:tripID' element={<TripPage addTrip={addTrip} editTrip={editTrip} trips={trips} setStage={setStage} stage={stage} />} />
      </Routes>
    </div>
  );
}

export default App;
