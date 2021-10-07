import React, { useState, useEffect } from 'react'
import './App.scss';
import logo from "./assets/images/brewdog_logo.png"
import BeerList from './components/BeerList/BeerList';
import Nav from './components/Nav/Nav';


const App = () => {
  // Search box
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")

  const handleInput = event => {
    const input = event.target.value.toLowerCase()
    setSearchTerm(input)
  }

  // Filters
  const [filterAbv, setFilterAbv] = useState(false)
  // const [filterClassic, setFilterClassic] = useState(false)
  const [filterPh, setFilterPh] = useState(false)

  const filterList = []
  let filterTerm = ""
  console.log(filterList)
  console.log(`filterTerm is ${filterTerm}`)

  const apiAddress = "https://api.punkapi.com/v2/beers?per_page=80"

  const handleTick = event => {
    const currentTick = event.target.id
    console.log(event.target.id)
    switch (currentTick) {
      case "abv":
        if (!filterAbv) {
          setFilterAbv(!filterAbv)
          console.log(`abv is ${filterAbv}`)
          filterList[0] = "abv_gt=6"
        } else if (filterAbv) {
          setFilterAbv(!filterAbv)
          console.log(`abv is ${filterAbv}`)
          // const remove =
        }
        break;
      case "4ph":
        setFilterPh(!filterPh)
        break
    }
  }

  if (filterList.length === 0) { filterTerm = "" }
  else if (filterList.length === 1) { filterTerm = `&${filterList[0]}` }
  else if (filterList.length === 2) {
    filterTerm = `&${filterList.join("&")}`
  }

  useEffect(() => {
    fetch(`${apiAddress}${filterTerm}`)
      .then((response) => response.json())
      .then((data) => {
        setBeers(data.filter(beer => { return beer.image_url !== "https://images.punkapi.com/v2/keg.png" }))
      })
  }, [filterAbv])



  const filteredBeers = beers.filter(beer => {
    return beer.name.toLowerCase().includes(searchTerm)
  })



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