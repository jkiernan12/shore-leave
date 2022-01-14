import React from 'react';
import TripCard from './TripCard';
import logo from './logo.svg'
import './TripSection.css';

function TripSection({title, tripType}) {
  return ( 
    <section className='TripSection'>
      <h2 className='TripSection--header'>{title}</h2>
      <div className='Trips--container'>
        <TripCard id="trip" title="Name here" date="January 1, 2021" image={logo} />
        <TripCard id="trip" title="Name here" date="January 1, 2021" image={logo} />
        <TripCard id="trip" title="Name here" date="January 1, 2021" image={logo} />

      </div>
    </section>
   );
}

export default TripSection;