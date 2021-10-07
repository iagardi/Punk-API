import React from 'react'
import Search from '../Search/Search'
import FilterList from '../FilterList/FilterList'
import './Nav.scss'

const Nav = (props) => {
   const { searchTerm, handleInput, handleTick } = props


   return (
      <div className="navbar">
         <Search searchTerm={searchTerm} handleInput={handleInput} />
         <FilterList handleTick={handleTick} />
      </div>
   )
}

export default Nav
