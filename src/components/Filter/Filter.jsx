import React from 'react'
import './Filter.scss'

function Filter() {


   return (
      <div className="navbar__filter">
         <label htmlFor="filter--checkbox" className="navbar__filter--label">Filter this</label>
         <input type="checkbox" className="filter--checkbox" />
      </div>
   )
}

export default Filter
