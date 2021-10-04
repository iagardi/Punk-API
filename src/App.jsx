import React from 'react'
import './App.scss';
import logo from "./assets/images/brewdog_logo.png"
import Nav from './components/Nav/Nav';
import beers from './data/beers'

const App = () => {


  return <>
    <div className="app">
      <header className="header"><img src={logo} alt="logo" className="header__logo" /></header>
      <div className="body">
        <Nav />
      </div>
    </div>
  </>
};

export default App;