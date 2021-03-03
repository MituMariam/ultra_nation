import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Country from './component/Country';
import Cart from './component/Cart';
import {image} from './fakeData.json'

function App() {
  //load data
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
  .then(response => response.json())
  .then(data => {setCountries(data)
    console.log(data);
  })
  .catch(error => console.log(error))
  }, [])
  //add to cart
  const [cart, setCart] = useState([]);
  const handleAddCountry =(country)=> {
    const newCart = [...cart,country]
    setCart(newCart);
    // console.log('add', country)};
  }
  const [img, setFlower] = useState([]);
  useEffect(() => {
    setCountries(image)
    console.log(image);
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <h2>{countries.length}</h2>
        <h2>Cart:{cart.length}</h2>
        <Cart cart={cart}></Cart>
        <div style={{display:'flex',flexFlow:'row wrap',justifyContent:'space-between'}}>
          {
            countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country>)
          }
    
        </div>
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
