import React, { useState } from 'react'
import Button from '../Button/Button'

import './BeerCard.scss'

const BeerCard = (props) => {
   const { beer } = props
   const [showInfo, setShowInfo] = useState(false)

   const handleClick = () => {
      setShowInfo(!showInfo)
   }

   const handleInput = event => {
      console.log(event)
   }

   const infoJSX = (
      <div className="beerlist__info">
         <h3 className="beerlist__card--tagline">{beer.tagline}</h3>
         <p>First brewed: {beer.first_brewed}</p>
         <p>Description: {beer.description}</p>

         <Button buttonText="Cool thanks" action={handleClick} />
      </div >
   )

   return (
      <div className="beerlist__card" onClick={handleInput}>
         <h2 className="beerlist__card--name">{beer.name}</h2>
         <img className="beerlist__card--image" src={beer.image_url} alt={beer.name} />
         <p>ABV: {beer.abv}%</p>
         <p>Ph: {beer.ph}</p>
         <p> First brewed: {beer.first_brewed} </p>
         {showInfo ? infoJSX : null}
         <Button buttonText="Read more" action={handleClick} />
      </div >
   )
}

export default BeerCard
