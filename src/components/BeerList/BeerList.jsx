import React from 'react'
import Button from '../Button/Button'

import './BeerList.scss'

const BeerList = (props) => {
   const { beersArr } = props

   const beerListJSX = beersArr.map((beer, index) => {
      return (
         < div className="beerlist__card" key={beer.name + 1}>
            <h2 className="beerlist__card--name">{beer.name}</h2>
            <img className="beerlist__card--image" src={beer.image_url} alt={beer.name} />
            <h3 className="beerlist__card--tagline">{beer.tagline}</h3>
            {/* <p className="beerlist__card--description">{beer.description}</p> */}
            <Button buttonText="Read more" />
         </div >
      )
   })


   return (
      <div className="beerlist">{beerListJSX}</div>
   )
}

export default BeerList
