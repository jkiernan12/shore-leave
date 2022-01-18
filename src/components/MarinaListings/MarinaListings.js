import React from 'react';
import POICard from '../POICard/POICard.js';
import PropTypes from 'prop-types'

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

MarinaListings.propTypes = {
  type: PropTypes.string,
  marinas: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  selectedMarina: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  updateSelectedMarina: PropTypes.func.isRequired,
}

export default MarinaListings;