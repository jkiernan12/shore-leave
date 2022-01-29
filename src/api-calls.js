import { cleanMarinaData, cleanPOIData, cleanImages, cleanTravelTime } from './utilities'

function fetchMarinas({north, east, south, west}, setter) {
  const url = `https://api.marinas.com/v1/points/search?bounds[ne][lat]=${north}
  &bounds[ne][lon]=${east}&bounds[sw][lat]=${south}&bounds[sw][lon]=${west}`

  return fetchData(cleanMarinaData,  url)
}

function searchPOI({locomotion, travelRadius, interest}, trip, setter) {
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

  const url = `https://api.foursquare.com/v3/places/search?ll=${currLocationStr}&radius=${travelRadius * locomotionMap[locomotion]}&categories=${POIMap[interest]}&limit=10&session_token=${process.env.REACT_APP_FSQ_SESSION}`
  const headers = {
    headers: {
      Authorization: process.env.REACT_APP_FSQ_KEY
    }
  }
  return fetchData(cleanPOIData, url, headers)
  .then(data =>  { 
    const promises = data.map(poi => {
    return fetchImages(poi.id)
    .then(imageUrl => {
      poi.image = imageUrl
      return poi
    }).catch(err => {
      console.log(err)
      return poi
    })
    })
    return Promise.all(promises)
  })
  .then(data => {
    const promises = data.map(poi => {
      return fetchTravelTime([trip.marina.location.lon + ',' + trip.marina.location.lat, poi.location.lon + ',' + poi.location.lat])
      .then(travelTime => {
        poi.travelTime = travelTime
        return poi
      }).catch(err => {
        console.log(err)
        return poi
      })
      })
      return Promise.all(promises)
  })
  .catch(err => console.log(err))
  //   const travelTimes = fetchTravelTime([trip.marina.location.lon + ',' + trip.marina.location.lat, poi.location.lon + ',' + poi.location.lat])
  //   .then(time => poi.travelTime = time)
  //   return Promise.all(images, travelTimes)
  //   }))
  //   .then(data => data)
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