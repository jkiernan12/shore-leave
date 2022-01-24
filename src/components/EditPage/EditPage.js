import React, { useState, useEffect } from 'react'
import '../TripPage/TripPage.css'
import Nav from '../Nav/Nav';
import Map from '../Map/Map';
import Form from '../Form/Form';
import POIListings from '../POIListings/POIListings';
import { useParams } from 'react-router'
import PropTypes from 'prop-types'


function EditPage({trips, POIs, setPOIs, selectedPOI, currTrip, setCurrTrip, highlightSelectedPOI, updateSelectedPOI, removePOI, query, setQuery}) {

  const [errorMessage, setErrorMessage] = useState('')

  const { tripID } = useParams()

  useEffect(() => {
    if (tripID) {
      const matchedTrip = trips.find(trip => trip.id === tripID)
      setCurrTrip(matchedTrip)
      setPOIs(matchedTrip.destinations)
  }
  }, [tripID])

  return ( 
<>
      <Nav />
    <main className='TripPage'>
      <Map className='Map' 
        POIs={POIs}
        selectedPOI={selectedPOI}
        highlightSelectedPOI={highlightSelectedPOI} />
      <section className='TripPage--right'>
        <Form setter={setPOIs}
          currTrip={currTrip}
          setErrorMessage={setErrorMessage}
          query={query}
          setQuery={setQuery}
        />
        {errorMessage && <p>{errorMessage}</p>}
        {POIs && POIs.length === 0 && <p>Hmm, no matches. Try expanding your search.</p>}
        <POIListings 
          POIs={POIs}
          selectedPOI={selectedPOI}
          updateSelectedPOI={updateSelectedPOI}
          type='poi'
          removePOI={removePOI}
          currTrip={currTrip}
          query={query} />
      </section>
      </main>
      </>
      
   );
}

EditPage.propTypes = {
  trips: PropTypes.array.isRequired,
  POIs: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  setPOIs: PropTypes.func.isRequired,
  selectedPOI: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  currTrip: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  setCurrTrip: PropTypes.func.isRequired,
  highlightSelectedPOI: PropTypes.func.isRequired,
  updateSelectedPOI: PropTypes.func.isRequired,
  removePOI: PropTypes.func.isRequired
}

export default EditPage