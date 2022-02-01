import React, { useEffect } from 'react';
import { useMapEvents, useMap } from 'react-leaflet'
import { fetchMarinas } from '../../api-calls'

function cleanMapBounds(map) {
  const northEast = map.getBounds()._northEast;
  const southWest = map.getBounds()._southWest;
  return {
    north: northEast.lat, 
    east: northEast.lng,
    south: southWest.lat, 
    west: southWest.lng
  }
}

function MapEvents({setter, setErrorMessage}) {
  useEffect(() => {

    fetchMarinas(cleanMapBounds(map), setter)
    .then(data => setter(data))
    .catch(err => {
      setErrorMessage('There was an issue connecting with the database. Please try again later')
    }
    )
  }, [])

  const map = useMapEvents({
    moveend: () => {
      fetchMarinas(cleanMapBounds(map), setter)
      .then(data => setter(data))
      .catch(err => {
        setErrorMessage('There was an issue connecting with the database. Please try again later')
      }
      )
    },
  })
  return null
}

export default MapEvents