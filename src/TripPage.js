import React, { useState, useEffect } from 'react'
import './TripPage.css'
import Nav from './Nav';
import Map from './Map';
import Form from './Form';
import POICard from './POICard';
import data from './datafile'

function TripPage() {
  const [marinas, setMarinas] = useState([])

  function cleanMarinaData(data) {
    return null
  }

  function updateMarinas({north, east, south, west}) {
    fetch(`https://api.marinas.com/v1/points/search?bounds[ne][lat]=${north}&bounds[ne][lon]=${east}&bounds[sw][lat]=${south}&bounds[sw][lon]=${west}`)
    .then(res => res.json())
    .then(data => {
      const allMarinas = data.data.filter(point => point.kind === "marina");
      console.log(allMarinas)
      setMarinas([allMarinas])
    })
    
  }

  return ( 
    <>
    <Nav />
    <main className='TripPage'>
      <Map updateMarinas={updateMarinas} marinas={marinas} />
      <section className='TripPage--right'>
      <Form />
        <section className='POI-section'>
          <POICard />
          <POICard />
          <POICard />
          <POICard />
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