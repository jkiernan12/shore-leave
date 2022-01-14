import React, { useState, useEffect } from 'react'
import Nav from './Nav';
import TripSection from './TripSection';

function MainPage() {
  return ( 
    <div>
      <Nav />
      <TripSection title='Upcoming Trips' tripType='upcoming' />
      <TripSection title='Past Trips' tripType='past' />
    </div>
   );
}

export default MainPage;