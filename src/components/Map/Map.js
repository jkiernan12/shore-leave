import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import './Map.css'
import MapEvents from './MapEvents'
import Button from '../Button/Button'
import logo from '../../logo.svg'
import L from 'leaflet';
import { useLocation } from 'react-router'


function Map({ marinas, setMarinas, updateSelectedMarina, POIs, highlightSelectedPOI, setErrorMessage }) {
  let currentPage = useLocation()

  const myCoord = {
    center: [41, -71],
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
      {marinas && currentPage.pathname.includes('new') && marinas.map(({location, id}) => {
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
      {(currentPage.pathname.includes('view') || currentPage.pathname.includes('edit')) && POIs && POIs.map(({location, id}) => {
        return (
          <Marker 
          key={id} 
          position={[location.lat, location.lon]} 
          // icon={selectedMarina.id === id ? myIcon : undefined }
          eventHandlers={{
            click: (e) => {
              highlightSelectedPOI(id)
            },
          }}
      />
        )
      })
      }
      {currentPage.pathname.includes('new') && <MapEvents setter={setMarinas}
      setErrorMessage={setErrorMessage} />}
    </MapContainer>
  )
}

export default Map