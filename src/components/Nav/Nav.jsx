import React from 'react'
import Search from '../Search/Search'
import Filter from '../Filter/Filter'
import './Nav.scss'

function Nav() {
   return (
      <div className="navbar">
         <Search />
         <Filter />
         <Filter />
         <Filter />
         <Filter />

      </div>
   )
}

export default Nav
