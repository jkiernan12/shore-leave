import React, { useState, useEffect } from 'react'
import Nav from './Nav';
import TripSection from './TripSection';

function MainPage({trips, setStage}) {
  const pastTrips = trips?.filter(trip => new Date(trip.date) < new Date(Date.now()))

  const upcomingTrips = trips?.filter(trip => new Date(trip.date) >= new Date(Date.now()))

  return ( 
    <div>
      <Nav setStage={setStage}/>
      <TripSection title='Upcoming Trips' tripType='upcoming' trips={upcomingTrips} setStage={setStage} />
      <TripSection title='Past Trips' tripType='past' trips={pastTrips} setStage={setStage} />
    </div>
   );
}

export default MainPage;