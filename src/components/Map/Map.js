import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, GeoJSON} from 'react-leaflet'
import './Map.css'
import MapEvents from './MapEvents'
import Button from '../Button/Button'
import logo from '../../logo.svg'
import L from 'leaflet';
import { useLocation } from 'react-router'

function Map({ marinas, setMarinas, updateSelectedMarina, POIs, highlightSelectedPOI, setErrorMessage, className, selectedMarina, currTrip }) {

  const [geoJSON, setGeoJSON] = useState('')
  const [markers, setMarkers] = useState([])
  
  const myCoord = {
    center: [41, -71],
    zoom: 8
  }
  const [currCoord, setCurrCoord] = useState(myCoord)

  useEffect(() => {
    if (currTrip?.marina) {
      const newCoord = {
        center: [currTrip.marina.location.lat, currTrip.marina.location.lon],
        zoom: 14
      }
      setCurrCoord(newCoord)
    }
  }, [currTrip])

  useEffect(() => {
    if (currTrip && currTrip.query.isochrone.type) {
      setGeoJSON(currTrip.query.isochrone)
    } else {
      setGeoJSON('')
    }
  }, [currTrip])

  useEffect(() => {
    const workingPoints = POIs ? POIs : marinas
    const highlightFunction = POIs ? highlightSelectedPOI : updateSelectedMarina

    if (typeof workingPoints === 'object') {
      const newMarkers = workingPoints.map(({location, id}) => {
        return (
          <Marker 
          key={id} 
          position={[location.lat, location.lon]} 
          // icon={selectedMarina.id === id ? myIcon : undefined }
          eventHandlers={{
            click: (e) => {
              highlightFunction(id)
            },
          }}
      />
        )
      })
      setMarkers(newMarkers)
    }
  }, [POIs, marinas]);
  
  let currentPage = useLocation()


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
})

  return (
    <MapContainer 
      key={currCoord.center[0]}
      className="Map--container" 
      center={currCoord.center} 
      zoom={currCoord.zoom} 
      scrollWheelZoom={false}>
      {geoJSON && <GeoJSON key={Date.now()} data={geoJSON} />}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers}
      {currentPage.pathname.includes('new') && <MapEvents setter={setMarinas}
      setErrorMessage={setErrorMessage}
      currTrip={currTrip} />}
    </MapContainer>
  )
}

export default Map