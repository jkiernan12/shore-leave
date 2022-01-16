import React from 'react';
import POICard from './POICard';

function POIListings({type, POIs, selectedPOI, updateSelectedPOI}) {

  return ( 
    <section className='POI-section'>
        { POIs.length > 0 && POIs.map(poi => {
          return (
            <POICard type={type}
              name={poi.name} 
              id={poi.id}
              key={poi.id}
              categories={poi.categories}
              distance={poi.distance}
              address={poi.address}
              selected={poi.id === selectedPOI.id}
              updateSelectedPOI={updateSelectedPOI} />
          )})}
        </section>
   );
}

export default POIListings;