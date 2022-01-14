import logo from './logo.svg';
import './App.css';

function App() {
  
  // fetch('https://api.foursquare.com/v3/places/search?ll=41.8781%2C-87.6298&radius=1000&categories=13065', {
  //   headers: {
  //     'Authorization': 'fsq3JtsIUeGTGKP54qKENvvcQdGsJnY0NDfooAk1Nvf/bLc='
  //   }
  // })
  // .then(res => res.json())
  // .then(data => console.log(data))


    fetch('https://api.marinas.com/v1/points/95cz')
  //   headers: {
  //     'Authorization': 'fsq3JtsIUeGTGKP54qKENvvcQdGsJnY0NDfooAk1Nvf/bLc='
  //   }
  // })
  .then(res => res.json())
  .then(data => console.log(data))


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
