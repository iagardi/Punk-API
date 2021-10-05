import React from 'react'
import './Search.scss'
import search from '../../assets/images/search.svg'

const Search = (props) => {
   const { searchTerm, handleInput } = props


   return (
      <div className="navbar__search">
         <input type="text" className="navbar__search--input" placeholder="Search..." onInput={handleInput} value={searchTerm} />
         <img src={search} alt="" className="navbar__search--button" />
      </div>
   )
}

export default Search
