import React, { useState, useEffect } from 'react'
import './App.scss';
import logo from "./assets/images/brewdog_logo.png"
import BeerList from './components/BeerList/BeerList';
import Nav from './components/Nav/Nav';


const App = () => {
  const [count, setCount] = useState(0)
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")

  const handleInput = event => {
    const input = event.target.value.toLowerCase()
    setSearchTerm(input)
  }

  const getBeers = () => {
    fetch("https://api.punkapi.com/v2/beers?per_page=80")
      .then((response) => response.json())
      .then((data) => {
        setBeers(data.filter(beer => { return beer.image_url !== "https://images.punkapi.com/v2/keg.png" }))
      })
  }

  const filteredBeers = beers.filter(beer => {
    return beer.name.toLowerCase().includes(searchTerm)
  })

  useEffect(() => {
    getBeers()
  }, [count])

  return <>
    <div className="app">
      <header className="header"><img src={logo} alt="logo" className="header__logo" /></header>
      <div className="body">
        <Nav handleInput={handleInput} />
        <BeerList beersArr={filteredBeers} />
      </div>
    </div>
  </>
};

export default App;