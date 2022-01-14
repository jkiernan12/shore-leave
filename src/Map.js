import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import './Map.css'
import MapEvents from './MapEvents'

function Map({ updateMarinas, marinas }) {
  const myCoord = {
    center: [41, -70],
    zoom: 8
  }

  const [currCoord, setCurrCoord] = useState(myCoord)

  return (
    <MapContainer className="Map--container" center={currCoord.center} zoom={currCoord.zoom} scrollWheelZoom={false}>
      <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {marinas[0] && marinas[0].map(({location, name, images}) => {
        return (
          <Marker position={[location.lat, location.lon]}>
            <Popup>
            <img src={images.data[0]?.thumbnail_url} />
              <p>{name}</p>
            </Popup>
          </Marker>
        )

      })
      
      }
      <MapEvents updateMarinas={updateMarinas} />
    </MapContainer>
  )
}

export default Map