import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import './Map.css'
import MapEvents from './MapEvents'
import Button from './Button'
import logo from './logo.svg'
import L from 'leaflet';


function Map({ fetchData, marinas, updateSelectedMarina, selectedMarina, stage }) {
  const myCoord = {
    center: [41, -70],
    zoom: 8
  }

  const myIcon = new L.Icon({
    iconUrl: logo,
    iconRetinaUrl: logo,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

  const [currCoord, setCurrCoord] = useState(myCoord)
  return (
    <MapContainer 
      className="Map--container" 
      center={currCoord.center} 
      zoom={currCoord.zoom} 
      scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {marinas && stage === 'marina' && marinas.map(({location, name, id}) => {
        return (
          <Marker 
          key={id} 
          position={[location.lat, location.lon]} 
          // icon={selectedMarina.id === id ? myIcon : undefined }
          eventHandlers={{
            click: (e) => {
              updateSelectedMarina(id)
            },
          }} />
        )
      })
      }
      {stage === 'marina' && <MapEvents fetchData={fetchData} />}
    </MapContainer>
  )
}

export default Map