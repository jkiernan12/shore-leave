import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router';
import MainPage from './MainPage';
import TripPage from './TripPage'

function App() {
  
  // fetch('https://api.foursquare.com/v3/places/search?ll=41.8781%2C-87.6298&radius=1000&categories=13065', {
  //   headers: {
  //     'Authorization': 'fsq3JtsIUeGTGKP54qKENvvcQdGsJnY0NDfooAk1Nvf/bLc='
  //   }
  // })
  // .then(res => res.json())
  // .then(data => console.log(data))


    // fetch('https://api.marinas.com/v1/points/95cz')
  //   headers: {
  //     'Authorization': 'fsq3JtsIUeGTGKP54qKENvvcQdGsJnY0NDfooAk1Nvf/bLc='
  //   }
  // })
  // .then(res => res.json())
  // .then(data => console.log(data))


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/trip' element={<TripPage />}/>
      </Routes>
    </div>
  );
}

export default App;
