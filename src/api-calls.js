import { cleanMarinaData, cleanPOIData, cleanImages, cleanTravelTime } from './utilities'

function fetchMarinas({north, east, south, west}, setter) {
  const url = `https://api.marinas.com/v1/points/search?bounds[ne][lat]=${north}
  &bounds[ne][lon]=${east}&bounds[sw][lat]=${south}&bounds[sw][lon]=${west}`

  return fetchData(cleanMarinaData,  url)
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

  const url = `https://api.foursquare.com/v3/places/search?ll=${currLocationStr}&radius=${travelTime * locomotionMap[locomotion]}&categories=${POIMap[interest]}&limit=10&session_token=${process.env.REACT_APP_FSQ_SESSION}`
  const headers = {
    headers: {
      Authorization: process.env.REACT_APP_FSQ_KEY
    }
  }
  return fetchData(cleanPOIData, url, headers)
  }

  function fetchImages(id) {
    const url = `https://api.foursquare.com/v3/places/${id}/photos?limit=1`
    const headers = {
      headers: {
        Authorization: process.env.REACT_APP_FSQ_KEY
      }
    }
    return fetchData(cleanImages, url, headers)
  }

  function fetchTravelTime(ll) {
    const joinedLL = ll.join(';')
    const url = `https://api.mapbox.com/directions-matrix/v1/mapbox/walking/${joinedLL}?access_token=${process.env.REACT_APP_MAPBOX}`
    console.log(url)
    return fetchData(cleanTravelTime, url)
  }

  function fetchData(cleaner, url, headers) {
      return fetch(url, headers)
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw 'Error'
        }
      })
      .then(data => cleaner(data))
  }

  export {fetchMarinas, searchPOI, fetchImages, fetchTravelTime}