import React from 'react'
import Search from '../Search/Search'
import FilterList from '../FilterList/FilterList'
import './Nav.scss'

function Nav() {
   return (
      <div className="navbar">
         <Search />
         <FilterList />


      </div>
   )
}

export default Nav
