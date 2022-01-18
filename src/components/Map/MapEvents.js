import React, { useEffect } from 'react';
import { useMapEvents } from 'react-leaflet'
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

function MapEvents({setter}) {
  useEffect(() => {
    fetchMarinas(cleanMapBounds(map), setter)
  }, [])

  const map = useMapEvents({
    moveend: () => {
      fetchMarinas(cleanMapBounds(map), setter)
    },
  })
  return null
}

export default MapEvents