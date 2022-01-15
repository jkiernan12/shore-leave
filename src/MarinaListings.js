import React from 'react';
import POICard from './POICard';

function MarinaListings({marinas, selectedMarina, updateSelectedMarina}) {
  console.log(marinas)
  return ( 
    <section className='POI-section'>
        { marinas && marinas.map(marina => {
          return (
            <POICard name={marina.name} 
              image={marina.image_thumb} 
              rating={marina.rating} 
              fuel={marina.fuel} 
              id={marina.id}
              selected={marina.id === selectedMarina.id}
              updateSelectedMarina={updateSelectedMarina} />
          )})}
        </section>
   );
}

export default MarinaListings;