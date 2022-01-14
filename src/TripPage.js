import React, { useState, useEffect } from 'react'
import './TripPage.css'
import Nav from './Nav';
import Map from './Map';
import Form from './Form';

function TripPage() {
  return ( 
    <>
    <Nav />
    <main className='TripPage'>
      <Map />
      <section>
      <Form />
      </section>
    </main>
    </>
   );
}

export default TripPage