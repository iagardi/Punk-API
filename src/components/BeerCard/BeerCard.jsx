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
         <div>
            <h2 className="beerlist__card--name">{beer.name}</h2>
            <h3 className="beerlist__card--tagline">{beer.tagline}</h3>
         </div>
         <p>{beer.description}</p>
         <p>First brewed: {beer.first_brewed}</p>
         <p>Ph: {beer.ph}</p>
         <Button buttonText="Thank you" action={handleClick} />
      </div >
   )

   return (
      <div className="beerlist__card" onClick={handleInput}>
         <h2 className="beerlist__card--name">{beer.name}</h2>
         <img className="beerlist__card--image" src={beer.image_url} alt={beer.name} />
         <p className="beerlist__card--abv">ABV: {beer.abv}%</p>

         <Button buttonText="Read more" action={handleClick} />
         {showInfo ? infoJSX : null}
      </div >
   )
}

export default BeerCard
