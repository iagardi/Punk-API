import React, { useState, useEffect } from 'react'
import './App.scss';
import logo from "./assets/images/brewdog_logo.png"
import BeerList from './components/BeerList/BeerList';
import Nav from './components/Nav/Nav';


const App = () => {
  const [count, setCount] = useState(0)
  const [beers, setBeers] = useState([]);

  const getBeers = () => {
    fetch("https://api.punkapi.com/v2/beers?per_page=80")
      .then((response) => response.json())
      .then((data) => {
        setBeers(data)
        console.log(data)
      })
  }

  useEffect(() => {
    getBeers()
  }, [count])



  return <>
    <div className="app">
      <header className="header"><img src={logo} alt="logo" className="header__logo" /></header>
      <div className="body">
        <Nav />
        <BeerList beersArr={beers} />
      </div>
    </div>
  </>
};

export default App;