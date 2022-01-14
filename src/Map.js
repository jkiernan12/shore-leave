import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, MapConsumer } from 'react-leaflet'
import './Map.css'
import 'leaflet'

function Map() {

  const myCoord = {
    center: [41, -70],
    zoom: 5
  }

  const position = [51.505, -0.09]
  const [currCoord, setCurrCoord] = useState(myCoord)

  return (
    <MapContainer className="Map--container" center={currCoord.center} zoom={currCoord.zoom} scrollWheelZoom={false}>
      <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
      <MapConsumer>
        {(map) => {
          map.setView(currCoord.center, currCoord.zoom)
          return null
        }}
      </MapConsumer>
    </MapContainer>
  )
}

export default Map