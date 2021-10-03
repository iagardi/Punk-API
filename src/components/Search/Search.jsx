import React, { useState } from 'react'
import './Search.scss'
import search from '../../assets/images/search.svg'

function Search(props) {


   return (
      <div className="navbar__search">
         <input type="text" className="navbar__search--input" placeholder="Search..." />
         <img src={search} alt="" className="navbar__search--button" />
      </div>
   )
}

export default Search
