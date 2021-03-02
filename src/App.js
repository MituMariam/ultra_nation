import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
  .then(response => response.json())
  .then(data => {setCountries(data)
    console.log(data);
  })
  .catch(error => console.log(error))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <h2>{countries.length}</h2>
        <ul>
          {
            countries.map(country => <li>{country.name}</li>)
          }
        </ul>
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
      </header>
    </div>
  );
}

export default App;
