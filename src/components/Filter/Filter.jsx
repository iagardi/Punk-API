import React from 'react'
import './Filter.scss'

const Filter = (props) => {
   const { filterText, handleTick, term } = props

   return (
      <div className="navbar__filter" >
         <label htmlFor={filterText} className="navbar__filter--label">{filterText}</label>
         <input type="checkbox" id={term} className="filter--checkbox" value={filterText} onClick={handleTick} />
      </div >
   )
}

export default Filter

