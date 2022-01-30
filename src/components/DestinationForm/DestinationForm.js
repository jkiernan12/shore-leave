import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './DestinationForm.css'
import PropTypes from 'prop-types'

function DestinationForm({selectedMarina, setSelectedMarina, addTrip, checkTrip}) {
  const [date, setDate] = useState('')
  let navigate = useNavigate()

  function createTrip(e) {
    e.preventDefault()
    if (date && selectedMarina) {
      const currTrip = {
        id: date.replace(/-/g, '') + '_' + selectedMarina.id,
        date,
        marina: selectedMarina,
        destinations: [],
        query: {
          locomotion: 'walk', travelRadius: '5', interest: 'restaurants'
        }
      }
      if (checkTrip(currTrip.id)) {
        addTrip(currTrip)
      } 
      setSelectedMarina('')
      navigate(`/edit/${currTrip.id}`)
    }
  }

  return ( 
    <form className='DestinationForm'>
    <div className='marina-name'>
      <p >Selected Marina:</p>
      <p>{selectedMarina && selectedMarina.name}</p>
    </div>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
      <button onClick={createTrip} className='DestinationForm--button'>Save</button>
    </form>
   );
}

DestinationForm.propTypes = {
  selectedMarina: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  setSelectedMarina: PropTypes.func.isRequired,
  addTrip: PropTypes.func.isRequired,
  checkTrip: PropTypes.func.isRequired
}

export default DestinationForm;