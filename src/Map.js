import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import './Map.css'
import MapEvents from './MapEvents'
import Button from './Button'

function Map({ updateMarinas, marinas, setSelectedMarina }) {
  const myCoord = {
    center: [41, -70],
    zoom: 8
  }

  function updateSelectedMarina(id) {
    console.log(id)
    setSelectedMarina(marinas.find(marina => marina.id === id))
    // if (e.target.nodeName === 'BUTTON') {
    //   console.log(e)
    //   setSelectedMarina()
    // }
  }

  const [currCoord, setCurrCoord] = useState(myCoord)
  console.log(marinas)
  return (
    <MapContainer className="Map--container" center={currCoord.center} zoom={currCoord.zoom} scrollWheelZoom={false}>
      <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {console.log(marinas)}
      {marinas && marinas.map(({location, name, id}) => {
        console.log(name)
        return (
          <Marker key={id} position={[location.lat, location.lon]} eventHandlers={{
            click: () => {
              updateSelectedMarina(id)
            },
          }} />
        )

      })
      
      }
      <MapEvents updateMarinas={updateMarinas} />
    </MapContainer>
  )
}

export default Map