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

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/trip' element={<TripPage addTrip={addTrip} />}/>
      </Routes>
    </div>
  );
}

export default App;
