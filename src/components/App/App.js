import './App.css';
import { Routes, Route, useParams } from 'react-router';
import React, { useState, useEffect } from 'react';
import MainPage from '../MainPage/MainPage.js';
import ViewPage from '../ViewPage/ViewPage';
import EditPage from '../EditPage/EditPage';
import NewPage from '../NewPage/NewPage';

function App() {
  const [trips, setTrips] = useState([])

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
        editTrip={editTrip} 
        trips={trips} 
        setTrips={setTrips} 
        checkTrip={checkTrip} />}/>
        <Route path='/edit/:tripID' 
        element={<EditPage 
        addTrip={addTrip} 
        editTrip={editTrip} 
        trips={trips} 
        setTrips={setTrips} 
        checkTrip={checkTrip}/>} />
        <Route path='/view/:tripID' 
        element={<ViewPage 
        addTrip={addTrip} 
        editTrip={editTrip} 
        trips={trips} 
        setTrips={setTrips} 
        checkTrip={checkTrip}/>} />
      </Routes>
    </div>
  );
}

export default App;
