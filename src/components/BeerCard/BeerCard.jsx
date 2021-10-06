import React, { useState } from 'react'
import Button from '../Button/Button'

import './BeerCard.scss'

const BeerCard = (props) => {
   const { beer } = props
   const { showInfo, setShowInfo } = useState(false)

   const handleClick = () => {
      setShowInfo(!showInfo)
   }

   const infoJSX = (
      <div className="beerlist_info">
         <p>First brewed: {beer.first_brewed}</p>
         <p>Description: {beer.description}</p>
         <p>ABV: {beer.abv}</p>
         <Button buttonText="Cool thanks" />
      </div>
   )


   return (
      <div className="beerlist__card">
         <h2 className="beerlist__card--name">{beer.name}</h2>
         <img className="beerlist__card--image" src={beer.image_url} alt={beer.name} />
         <h3 className="beerlist__card--tagline">{beer.tagline}</h3>
         {showInfo ? infoJSX : null}
         <Button buttonText="Read more" onClick={handleClick} />
      </div >
   )
}

export default BeerCard
