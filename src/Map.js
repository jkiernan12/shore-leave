import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, MapConsumer, useMapEvents } from 'react-leaflet'
import './Map.css'
import MapEvents from './MapEvents'

function Map({ updateMarinas }) {
  const myCoord = {
    center: [41, -70],
    zoom: 5
  }

  const [currCoord, setCurrCoord] = useState(myCoord)

  return (
    <MapContainer className="Map--container" center={currCoord.center} zoom={currCoord.zoom} scrollWheelZoom={false}>
      <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapEvents updateMarinas={updateMarinas} />
    </MapContainer>
  )
}

export default Map