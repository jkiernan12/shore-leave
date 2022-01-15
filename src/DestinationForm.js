import React from 'react'
import './DestinationForm.css'

function DestinationForm({selectedMarina}) {
  return ( 
    <form className='DestinationForm'>
    <div className='marina-name'>
      <p >Selected Marina:</p>
      <p>{selectedMarina && selectedMarina.name}</p>
    </div>
      <input type="date" />
      <button className='DestinationForm--button'>Submit</button>
    </form>
   );
}

export default DestinationForm;