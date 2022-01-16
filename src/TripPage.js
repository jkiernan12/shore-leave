import React, { useState, useEffect } from 'react'
import './TripPage.css'
import Nav from './Nav';
import Map from './Map';
import Form from './Form';
import POICard from './POICard';
import POIListings from './POIListings';
import DestinationForm from './DestinationForm'
import MarinaListings from './MarinaListings';
import { useParams } from 'react-router'

function TripPage({addTrip, editTrip, trips, stage, setStage}) {
  const [marinas, setMarinas] = useState('')
  const [selectedMarina, setSelectedMarina] = useState('')
  const [POIs, setPOIs] = useState('')
  const [selectedPOI, setSelectedPOI] = useState('')
  const [currTrip, setCurrTrip] = useState('')

  const { tripID } = useParams()

  useEffect(() => {
    if (tripID) {
      const matchedTrip = trips.find(trip => trip.id === tripID)
      setCurrTrip(matchedTrip)
      setPOIs(matchedTrip.destinations)
  }
  }, [tripID])

  function updateSelectedMarina(id) {
    setSelectedMarina(marinas.find(marina => marina.id === id))
  }

  function highlightSelectedPOI(id) {
    setSelectedPOI(POIs.find(poi => poi.id === id))
  }

  function updateSelectedPOI(id) {
    const currPOI = POIs.find(poi => poi.id === id)
    let updatedDestinations = currTrip.destinations
    const isDupe = currTrip.destinations.some(destination => destination.id === id)
    if (!isDupe) {
      updatedDestinations = {
        destinations: [...currTrip.destinations, currPOI]
      }
      const newTrip = {...currTrip, ...updatedDestinations}
      setCurrTrip(newTrip) 
      if (!trips[0]) {
        addTrip(newTrip)
      } else if (trips.find(trip => trip.id === currTrip.id)) {
        editTrip(newTrip, currPOI)
      } else if (!trips.find(trip => trip.id === currTrip.id)) {
        addTrip(newTrip)
      }
    } 
  }

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

  function cleanPOIData(data) {
    return data.results.map(result => {
      return {
        id: result.fsq_id,
        categories: result.categories.map(cat => cat.name),
        distance: result.distance,
        location: {
          lat: result.geocodes.main.latitude,
          lon: result.geocodes.main.longitude
        },
        name: result.name,
        address: `${result.location.address}, ${result.location.locality} ${result.location.region} ${result.location.postcode}`
      }
    }).sort((a, b) => a.distance - b.distance)
  }

  function fetchMarinas({north, east, south, west}) {
    console.log('fetch ran')
    fetch(`https://api.marinas.com/v1/points/search?bounds[ne][lat]=${north}&bounds[ne][lon]=${east}&bounds[sw][lat]=${south}&bounds[sw][lon]=${west}`)
    .then(res => res.json())
    .then(data => {
      const cleanedData = cleanMarinaData(data)
      setMarinas(cleanedData)
    })

    //Seeded data call below
      // const cleanedData = cleanMarinaData(data)
      // console.log(cleanedData)
      // setMarinas(cleanedData)
  }

  function searchPOI({locomotion, travelTime, interest}) {

    console.log('fetch ran')
    const POIMap = {
      'restaurants': 13000,
      'grocery-stores': 17069,
      'hardware-stores': 17090,
      'entertainment': 10000
    }
    const currLocationStr = `${currTrip.marina.location.lat},${currTrip.marina.location.lon}`
    fetch(`https://api.foursquare.com/v3/places/search?ll=${currLocationStr}&radius=${travelTime * 80}&categories=${POIMap[interest]}&limit=50&session_token=fsq3JtsIUeGTGKP54qKENvvcQdGsJnY0NDfooAk1Nvf%2FbLc%3D`, {
      headers: {
        Authorization: 'fsq3JtsIUeGTGKP54qKENvvcQdGsJnY0NDfooAk1Nvf/bLc='
      }
    })
    .then(res => res.json())
    .then(data => {
      const cleanedData = cleanPOIData(data)
      setPOIs(cleanedData)
    })
    }

  return ( 
    <>
    <Nav />
    <main className='TripPage'>
      <Map className='Map' 
        fetchData={fetchMarinas} 
        marinas={marinas} 
        selectedMarina={selectedMarina}
        updateSelectedMarina={updateSelectedMarina}
        POIs={POIs}
        selectedPOI={selectedPOI}
        highlightSelectedPOI={highlightSelectedPOI}
        stage={stage} />
      {stage === 'marina' && <section className='TripPage--right'>
        <DestinationForm 
        selectedMarina={selectedMarina} 
        setSelectedMarina={setSelectedMarina}
        addTrip={addTrip}
        setCurrTrip={setCurrTrip}
        setStage={setStage} />
        <MarinaListings 
          marinas={marinas}
          selectedMarina={selectedMarina}
          updateSelectedMarina={updateSelectedMarina}
          type='marina' />
      </section>
      }
      {stage === 'locations' && <section className='TripPage--right'>
        <Form searchPOI={searchPOI}/>
        <POIListings 
          POIs={POIs}
          selectedPOI={selectedPOI}
          updateSelectedPOI={updateSelectedPOI}
          type='poi' />
      </section>
      }
      {stage === 'existing' && currTrip && <section className='TripPage--right'>
      <h1>{currTrip.marina.name}</h1>
      <p>{currTrip.date}</p>
        <POIListings 
          POIs={currTrip.destinations}
          selectedPOI={selectedPOI}
          updateSelectedPOI={updateSelectedPOI}
          type='poi' />
      </section>
      } 
      
    </main>
    </>
   );
}

export default TripPage