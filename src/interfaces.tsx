interface ITrip {
  id: string
  date: string
  marina: IMarina
  destinations: IDestination[] 
  query: IQuery
}

interface IMarina {
  id: string
  name: string
  rating: string
  location: ILocation
  image_thumb: string | null
  image_small: string | null
  fuel: string[]
}

interface IQuery {
  locomotion: string
  travelRadius: string
  interest: string
}

interface IDestination {
  id: string
  categories: string[]
  distance: number
  location: ILocation
  name: string
  address: string
  travelTime: number
}

interface ILocation {
  lat: number
  lon: number
}

export type { IDestination, ILocation, IMarina, IQuery, ITrip }