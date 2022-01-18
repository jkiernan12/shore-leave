import { cleanMarinaData, cleanPOIData } from './utilities'

function fetchMarinas({north, east, south, west}, setter) {
  const url = `https://api.marinas.com/v1/points/search?bounds[ne][lat]=${north}
  &bounds[ne][lon]=${east}&bounds[sw][lat]=${south}&bounds[sw][lon]=${west}`

  return fetchData(cleanMarinaData, setter, url)
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
  return fetchData(cleanPOIData, setter, url, headers)
  }

  function fetchData(cleaner, setter, url, headers) {
      return fetch(url, headers)
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw 'darn'
        }
      })
      .then(data => cleaner(data))
  }

  export {fetchMarinas, searchPOI}