import React from 'react'
import Nav from '../Nav/Nav.js';
import TripSection from '../TripSection/TripSection.js';

function MainPage({trips}) {
  const pastTrips = trips?.filter(trip => new Date(trip.date) < new Date(Date.now()))
  const upcomingTrips = trips?.filter(trip => new Date(trip.date) >= new Date(Date.now()))

  return ( 
    <div>
      <Nav />
      <TripSection title='Upcoming Trips' trips={upcomingTrips}  />
      <TripSection title='Past Trips' trips={pastTrips}  />
    </div>
   );
}

export default MainPage;