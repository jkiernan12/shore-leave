import './App.css';
import { Routes, Route } from 'react-router';
import React, { useState, useEffect } from 'react';
import MainPage from '../MainPage/MainPage.js';
import ViewPage from '../ViewPage/ViewPage';
import EditPage from '../EditPage/EditPage';
import NewPage from '../NewPage/NewPage';
import ErrorPage from '../ErrorPage/ErrorPage';
import { ITrip, IDestination } from '../../interfaces' 

function App() {
  const [trips, setTrips] = useState<ITrip[]>([])
  const [POIs, setPOIs] = useState<IDestination[]>([])
  const [selectedPOI, setSelectedPOI] = useState<IDestination>()
  const [currTrip, setCurrTrip] = useState<ITrip>()
  
  useEffect(() => {
    const retrievedData = (localStorage.getItem('savedTrips') || '')
    if (retrievedData) {
      const retrievedTrips = JSON.parse(localStorage.getItem('savedTrips') || '')
      if (retrievedTrips?.length) {
        setTrips(retrievedTrips)
      } 
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('savedTrips', JSON.stringify(trips))
  }, [trips])

  useEffect(() => {
    if (trips.length && currTrip) {
      const workingTrips = [...trips]
      const currTripIndex = workingTrips.findIndex(trip => {
        return trip.id === currTrip.id
      })
      workingTrips.splice(currTripIndex, 1, currTrip)
      setTrips(workingTrips)
    } 
  }, [currTrip])

  function highlightSelectedPOI(id: string) {
    setSelectedPOI(POIs.find(poi => poi.id === id))
  }

  function updateSelectedPOI(id: string) {
  if (currTrip) {   
   const currPOI = POIs.find(poi => poi.id === id)
    let updatedDestinations = currTrip.destinations
    const isDupe = currTrip.destinations.some(destination => destination.id === id)
    if (!isDupe && currPOI) {
      const newDestinations = {
        destinations: [...currTrip.destinations, currPOI]
      }
      const newTrip = {...currTrip, ...newDestinations}
      if (newTrip.destinations) {
        setCurrTrip(newTrip) }
      }
    } 
  }

  function removePOI(id: string) {
    if (currTrip) {
      const newTrips = [...trips]
      const oldTrip = newTrips.find(trip => trip.id === currTrip.id)
      setTrips(() => ([...newTrips]))
      if (oldTrip) {
        const oldDestinationIndex = oldTrip.destinations.findIndex(destination => destination.id === id)
        oldTrip.destinations.splice(oldDestinationIndex, 1)
        setCurrTrip(oldTrip)
      } else {
        console.log('error')
      }
    }
  }

  function addTrip(newTrip: ITrip) {
    trips ? setTrips(trips => [...trips, newTrip]) : setTrips([newTrip])
    setCurrTrip(() => newTrip)
  }

  function checkTrip(id:string) {
    return (trips && trips.length > 0) ? !(trips.some(trip => trip.id === id)): true
  }

  function editTrip(newTrip:ITrip, newPOI:IDestination) {
    const newTrips = [...trips]
    const oldTrip = newTrips.find(trip => trip.id === newTrip.id)
    if (oldTrip) {

      const isDupe = (oldTrip.destinations.some(dest => dest.id === newPOI.id))
      if (!isDupe) {
        oldTrip.destinations.push(newPOI)
      }
      setTrips(() => newTrips)
    }
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
        selectedPOI={selectedPOI || ''}
        currTrip={currTrip || ''}
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
        selectedPOI={selectedPOI || ''}
        currTrip={currTrip || ''}
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
