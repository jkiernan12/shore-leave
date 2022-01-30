import React from 'react';
import TripCard from '../TripCard/TripCard';
import logo from '../../logo.svg'
import './TripSection.css';

function TripSection({title, tripType, trips, setStage}) {
  return ( 
    <section className='TripSection'>
      <h2 className='TripSection--header'>{title}</h2>
      <div className='Trips--container'>
        {trips?.length > 0 ? trips.map(trip => {
          return (
            <TripCard id={trip.id} title={trip.marina.name} date={trip.date} image={logo} setStage={setStage} />
          )
        }) : 'Hmm looks like there is nothing here'}
      </div>
    </section>
   );
}

export default TripSection;