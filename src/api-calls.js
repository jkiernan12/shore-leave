import { cleanMarinaData, cleanPOIData } from './utilities'

function fetchMarinas({north, east, south, west}, setter) {
  console.log('fetch ran')
  fetch(`https://api.marinas.com/v1/points/search?bounds[ne][lat]=${north}&bounds[ne][lon]=${east}&bounds[sw][lat]=${south}&bounds[sw][lon]=${west}`)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    const cleanedData = cleanMarinaData(data)
    setter(cleanedData)
  })

  //Seeded data call below
    // const cleanedData = cleanMarinaData(data)
    // console.log(cleanedData)
    // setMarinas(cleanedData)
}

function searchPOI({locomotion, travelTime, interest}, trip, setter) {

  console.log('fetch ran')
  const POIMap = {
    'restaurants': 13000,
    'grocery-stores': 17069,
    'hardware-stores': 17090,
    'entertainment': 10000
  }
  const currLocationStr = `${trip.marina.location.lat},${trip.marina.location.lon}`
  fetch(`https://api.foursquare.com/v3/places/search?ll=${currLocationStr}&radius=${travelTime * 80}&categories=${POIMap[interest]}&limit=50&session_token=fsq3JtsIUeGTGKP54qKENvvcQdGsJnY0NDfooAk1Nvf%2FbLc%3D`, {
    headers: {
      Authorization: 'fsq3JtsIUeGTGKP54qKENvvcQdGsJnY0NDfooAk1Nvf/bLc='
    }
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    const cleanedData = cleanPOIData(data)
    setter(cleanedData)
  })
  }

  export {fetchMarinas, searchPOI}