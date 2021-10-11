import React, { useState, useEffect } from 'react'
import './App.scss';
import logo from "./assets/images/brewdog_logo.png"
import BeerList from './components/BeerList/BeerList';
import Nav from './components/Nav/Nav';


const App = () => {
  // Search box
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")
  const [apiAddress, setApiAddress] = useState("https://api.punkapi.com/v2/beers?per_page=80&")

  const handleInput = event => {
    const input = event.target.value.toLowerCase()
    setSearchTerm(input)
  }

  // Filters "abv_gt=6" "brewed_before=01-2010"
  const [filterAbv, setFilterAbv] = useState(false)
  const [filterClassic, setFilterClassic] = useState(false)
  const [filterPh, setFilterPh] = useState(false)

  console.log(`filterAbv at start is ${filterAbv}`)


  const handleTick = event => {
    const currentTick = event.target.id
    console.log(`you clicked "${event.target.id}"`)

    // setRefresh(refresh + 1)
    switch (currentTick) {
      case "abv":
        setFilterAbv(!filterAbv)
        break
      case "classic":
        setFilterClassic(!filterClassic)
        break
      case "4ph":
        setFilterPh(!filterPh)
        break
      default:
    }
  }

  useEffect(() => {
    fetch(`${apiAddress}`)
      .then((response) => response.json())
      .then((data) => {
        setBeers(data.filter(beer => { return beer.image_url !== "https://images.punkapi.com/v2/keg.png" }))
      })
  }, [apiAddress])

  const filteredBeers = beers.filter(beer => {
    return beer.name.toLowerCase().includes(searchTerm)
  })

  console.log(`filteredBeers length is ${filteredBeers.length}`)


  return <>
    <div className="app">
      <header className="header"><img src={logo} alt="logo" className="header__logo" /></header>
      <div className="body">
        <Nav handleInput={handleInput} handleTick={handleTick} />
        <BeerList beersArr={filteredBeers} />
      </div>
    </div>
  </>

}
export default App;