import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router';
import React, { useState } from 'react';
import MainPage from './MainPage';
import TripPage from './TripPage'

function App() {
  const [trips, setTrips] = useState([])

  function addTrip(newTrip) {
    setTrips([...trips, newTrip])
  }

  function editTrip(newTrip) {
    const oldTrip = trips.find(trip => trip.id === newTrip.id)
    oldTrip.destinations = [...oldTrip.destinations, newTrip.destinations]
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/trip' element={<TripPage addTrip={addTrip} editTrip={editTrip} trips={trips} />}/>
      </Routes>
    </div>
  );
}

export default App;
