import React, { useState, useEffect } from 'react'
import './TripPage.css'
import Nav from './Nav';
import Map from './Map';
import Form from './Form';
import POICard from './POICard';

function TripPage() {
  return ( 
    <>
    <Nav />
    <main className='TripPage'>
      <Map />
      <section>
      <Form />
      <section>
        <POICard />
        <POICard />
        <POICard />
        <POICard />

      </section>
      </section>
    </main>
    </>
   );
}

export default TripPage