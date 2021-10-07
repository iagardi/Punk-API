import React from 'react'
import Filter from '../Filter/Filter'

const FilterList = (props) => {
   const { handleTick } = props



   return (
      <form className="navbar__filters" >
         <Filter filterText="High ABV (over 6%)" term="abv" handleTick={handleTick} />
         <Filter filterText="Classic range" term="classic" handleTick={handleTick} />
         <Filter filterText="Acidic (ph over 4)" term="4ph" handleTick={handleTick} />
      </form >
   )
}

export default FilterList
