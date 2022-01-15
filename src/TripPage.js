import React, { useState, useEffect } from 'react'
import './TripPage.css'
import Nav from './Nav';
import Map from './Map';
import Form from './Form';
import POICard from './POICard';
import data from './datafile'

function TripPage() {
  const [marinas, setMarinas] = useState('')
  const [selectedMarina, setSelectedMarina] = useState('')

  function cleanMarinaData(currData) {
    const filteredData = currData.data.filter(point => point.kind === "marina");
    const mappedData = filteredData.map(marina => {
      const availableFuel = []
      if (marina.fuel.has_diesel) {
        availableFuel.push('Diesel')
      }

      if (marina.fuel.has_propane) {
        availableFuel.push('Propane')
      }

      if (marina.fuel.has_gas) {
        availableFuel.push('Gas')
      }
      return {
        id: marina.id,
        name: marina.name,
        rating: marina.rating ? parseFloat(marina.rating).toFixed(2) : null,
        location: marina.location,
        image_thumb: marina.images.total_count > 0 ? marina.images.data[0].thumbnail_url : null,
        image_small: marina.images.total_count > 0 ? marina.images.data[0].small_url : null,
        fuel: availableFuel,
      }
    }).sort((a, b) => b.rating - a.rating )
    return mappedData
  }

  function updateMarinas({north, east, south, west}) {
    console.log('fetch ran')
    fetch(`https://api.marinas.com/v1/points/search?bounds[ne][lat]=${north}&bounds[ne][lon]=${east}&bounds[sw][lat]=${south}&bounds[sw][lon]=${west}`)
    .then(res => res.json())
    .then(data => {
      const cleanedData = cleanMarinaData(data)
      console.log(cleanedData)
      setMarinas(cleanedData)
    })

    //Seeded data call below
      // const cleanedData = cleanMarinaData(data)
      // console.log(cleanedData)
      // setMarinas(cleanedData)
  }

  return ( 
    <>
    <Nav />
    <main className='TripPage'>
      <Map updateMarinas={updateMarinas} marinas={marinas} setSelectedMarina={setSelectedMarina} />
      <section className='TripPage--right'>
      <Form />
        <section className='POI-section'>
        {marinas && marinas.map(marina => {
          return <POICard name={marina.name} image={marina.image_thumb} rating={marina.rating} fuel={marina.fuel} selected={marina.id === selectedMarina.id} />
        })}
        </section>
      </section>
    </main>
    </>
   );
}

export default TripPage