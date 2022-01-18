import React, { useState, useEffect } from 'react'
import './TripPage.css'
import Nav from '../Nav/Nav';
import Map from '../Map/Map';
import POIListings from '../POIListings/POIListings';
import { useParams } from 'react-router'
import NewPage from '../NewPage/NewPage';
import EditPage from '../EditPage/EditPage';
import ViewPage from '../ViewPage/ViewPage';

function TripPage({addTrip, editTrip, trips, setTrips, stage, setStage, checkTrip}) {

  return ( 
    <>
      {stage === 'marina' && <NewPage 
      addTrip={addTrip} 
      stage={stage} 
      setStage={setStage} 
      checkTrip={checkTrip} />
      }
      {stage === 'locations' &&  <EditPage 
          stage={stage}
          trips={trips}
          checkTrip={checkTrip}
          addTrip={addTrip}
          editTrip={editTrip}
          setTrips={setTrips}
      />
      }
      {stage === 'existing' && <ViewPage 
          stage={stage}
          stage={stage}
          trips={trips}
          checkTrip={checkTrip}
          addTrip={addTrip}
          editTrip={editTrip}
          setTrips={setTrips}
      />
      } 
      </>
   );
}

export default TripPage