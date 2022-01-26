function cleanMarinaData(currData) {
  const filteredData = currData.data.filter(point => point.kind === "marina");
  const mappedData = filteredData.map(marina => {
    const availableFuel = []
    if (marina.fuel.has_diesel) {
      availableFuel.push('Diesel')
    }

    if (marina.fuel.has_propane) {
      availableFuel.push('Propane')
    }

    if (marina.fuel.has_gas) {
      availableFuel.push('Gas')
    }
    return {
      id: marina.id,
      name: marina.name,
      rating: marina.rating ? parseFloat(marina.rating).toFixed(2) : null,
      location: marina.location,
      image_thumb: marina.images.total_count > 0 ? marina.images.data[0].thumbnail_url : null,
      image_small: marina.images.total_count > 0 ? marina.images.data[0].small_url : null,
      fuel: availableFuel,
    }
  }).sort((a, b) => b.rating - a.rating )
  return mappedData
}

function cleanPOIData(data) {
  return data.results.map(result => {
    return {
      id: result.fsq_id,
      categories: result.categories.map(cat => cat.name),
      distance: result.distance,
      location: {
        lat: result.geocodes.main.latitude,
        lon: result.geocodes.main.longitude
      },
      name: result.name,
      address: `${result.location.address}, ${result.location.locality} ${result.location.region} ${result.location.postcode}`
    }
  }).sort((a, b) => a.distance - b.distance)
}

function cleanTravelTime(data) {
   if (data) {
     console.log('cleantime ran', data)
     return Math.round(data.durations[0][1] / 60)
   } else {
    throw 'Error in cleanTravelTime'
   }
}

function cleanImages(data) {
  if (data[0]) {
    console.log('cleanImages', data)
    return data[0].prefix + '200x200' + data[0].suffix
  } else {
    throw 'Error'
  }
}

export { cleanMarinaData, cleanPOIData, cleanImages, cleanTravelTime }