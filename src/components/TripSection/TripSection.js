import React from 'react';
import TripCard from '../TripCard/TripCard';
import logo from '../../logo.svg'
import './TripSection.css';

function TripSection({title, trips}) {
  return ( 
    <section className='TripSection'>
      <h2 className='TripSection--header'>{title}</h2>
      <div className='Trips--container'>
        {trips && trips.length > 0 ? trips.map(trip => {
          return (
            <TripCard id={trip.id} key={trip.id} title={trip.marina.name} date={trip.date} image={trip.marina.image_thumb ? trip.marina.image_thumb : logo} />
          )
        }) : 'Hmm looks like there is nothing here'}
      </div>
    </section>
   );
}

export default TripSection;