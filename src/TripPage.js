import React, { useState, useEffect } from 'react'
import './TripPage.css'
import Nav from './Nav';
import Map from './Map';
import Form from './Form';
import POICard from './POICard';

function TripPage() {
  const [marinas, setMarinas] = useState([])

  // useEffect(() => {
  //   console.log(marinas)
  // }, [marinas]);

  function updateMarinas({north, east, south, west}) {
    console.log(`https://api.marinas.com/v1/points/search?bounds[ne][lat]=${north}&bounds[ne][lon]=${east}&bounds[sw][lat]=${south}&bounds[sw][lon]=${west}`)
    fetch(`https://api.marinas.com/v1/points/search?bounds[ne][lat]=${north}&bounds[ne][lon]=${east}&bounds[sw][lat]=${south}&bounds[sw][lon]=${west}`)
    .then(res => res.json())
    .then(data => {
      const allMarinas = data.data.filter(point => point.kind === "marina");
      setMarinas([allMarinas])
    })
    .then(console.log(marinas))
     
  }

  return ( 
    <>
    <Nav />
    <main className='TripPage'>
      <Map updateMarinas={updateMarinas} />
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