import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './DestinationForm.css'

function DestinationForm({selectedMarina, setSelectedMarina, addTrip, setStage, setCurrTrip}) {
  const [date, setDate] = useState('')
  let navigate = useNavigate()

  function createTrip(e) {
    e.preventDefault()
    if (date && selectedMarina) {
      const currTrip = {
        id: date.replace(/-/g, '') + '_' + selectedMarina.id,
        date,
        marina: selectedMarina,
        destinations: []
      }
      setCurrTrip(currTrip)
      setSelectedMarina('')
      setStage('locations')
      navigate(`/trips/${currTrip.id}`)
    }
  }

  return ( 
    <form className='DestinationForm'>
    <div className='marina-name'>
      <p >Selected Marina:</p>
      <p>{selectedMarina && selectedMarina.name}</p>
    </div>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
      <button onClick={createTrip} className='DestinationForm--button'>Submit</button>
    </form>
   );
}

export default DestinationForm;