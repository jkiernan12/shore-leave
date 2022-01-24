import React, { useEffect } from 'react';
import POICard from '../POICard/POICard';
import PropTypes from 'prop-types'
import { cleanMarinaData } from '../../utilities';

function POIListings({type, POIs, selectedPOI, updateSelectedPOI, removePOI, currTrip, query}) {

  // get travel times here with fetch. map POIs and send to fetchTravelTime


  return ( 
    <section className='POI-section'>
        { POIs?.length > 0 && POIs.map(poi => {
          return (poi.travelTime <= query.travelRadius) ? (
            <POICard type={type}
              name={poi.name} 
              id={poi.id}
              key={poi.id}
              location={poi.location}
              categories={poi.categories}
              distance={poi.distance}
              address={poi.address}
              image={poi.image}
              travelTime={poi.travelTime}
              selected={poi.id === selectedPOI.id}
              updateSelectedPOI={updateSelectedPOI}
              removePOI={removePOI} 
              currTrip={currTrip}
              />
          ) : null
          })}
        </section>
   );
}

POIListings.propTypes = {
  type: PropTypes.string,
  POIs: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  selectedPOI: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  updateSelectedPOI: PropTypes.func.isRequired,
  removePOI: PropTypes.func.isRequired,
  currTrip: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired
}

export default POIListings;