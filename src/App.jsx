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

  const addFilter = () => {
    switch (filterAbv) {
      case (true && apiAddress.includes("abv_gt=6&")):
        setApiAddress(apiAddress + "abv_gt=6&")
        console.log(`filterabv true line ${filterAbv}: ${apiAddress}`)
        break
      case false:
        setApiAddress(apiAddress.replace("abv_gt=6&", ""))
        console.log(`filterabv false line ${filterAbv}: ${apiAddress}`)
        break
      default:
    }

    switch (filterClassic) {
      case true:
        setApiAddress(apiAddress + "brewed_before=01-2010&")
        console.log(`filterClassic true line ${filterClassic}: ${apiAddress}`)
        break
      case false:
        setApiAddress(apiAddress.replace("brewed_before=01-2010&", ""))
        console.log(`filterClassic false line ${filterClassic}: ${apiAddress}`)
        break
      default:
    }
  }

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
    addFilter()
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