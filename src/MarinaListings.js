import React from 'react';
import POICard from './POICard';

function MarinaListings({type, marinas, selectedMarina, updateSelectedMarina}) {
  return ( 
    <section className='POI-section'>
        { marinas && marinas.map(marina => {
          return (
            <POICard type={type}
            name={marina.name} 
              image={marina.image_thumb} 
              rating={marina.rating} 
              fuel={marina.fuel} 
              key={marina.id}
              id={marina.id}
              selected={marina.id === selectedMarina.id}
              updateSelectedMarina={updateSelectedMarina} />
          )})}
        </section>
   );
}

export default MarinaListings;