import React, { useState, useEffect } from 'react';
import { useMap, useMapEvents } from 'react-leaflet'

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

function MapEvents({ updateMarinas }) {
  const map = useMapEvents({
    moveend: () => {
      updateMarinas(cleanMapBounds(map))
    },
  })
  return null
}

export default MapEvents