import { cleanMarinaData, cleanPOIData } from './utilities'

function fetchMarinas({north, east, south, west}, setter) {
  const url = `https://api.marinas.com/v1/points/search?bounds[ne][lat]=${north}
  &bounds[ne][lon]=${east}&bounds[sw][lat]=${south}&bounds[sw][lon]=${west}`

  fetchData(cleanMarinaData, setter, url)
}

function searchPOI({locomotion, travelTime, interest}, trip, setter) {
  const POIMap = {
    'restaurants': 13000,
    'grocery-stores': 17069,
    'hardware-stores': 17090,
    'entertainment': 10000
  }

  const locomotionMap = {
    'walk': 80,
    'bike': 400,
    'other': 133
  }
  const currLocationStr = `${trip.marina.location.lat},${trip.marina.location.lon}`

  const url = `https://api.foursquare.com/v3/places/search?ll=${currLocationStr}&radius=${travelTime * locomotionMap[locomotion]}&categories=${POIMap[interest]}&limit=50&session_token=${process.env.REACT_APP_FSQ_SESSION}`
  const headers = {
    headers: {
      Authorization: process.env.REACT_APP_FSQ_KEY
    }
  }
  fetchData(cleanPOIData, setter, url, headers)
  }

  function fetchData(cleaner, setter, url, headers) {
    if (headers) {
      fetch(url, headers)
      .then(res => res.json())
      .then(data => setter(cleaner(data)))
    } else {
      fetch(url)
      .then(res => res.json())
      .then(data => setter(cleaner(data)))
    }
  }

  export {fetchMarinas, searchPOI}