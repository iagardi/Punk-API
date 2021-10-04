import React from 'react'

import './BeerList.scss'

const BeerList = (props) => {
   const { beersArr } = props

   const beerListJSX = beersArr.map((beer, index) => {
      return (
         < div className="beerlist__card" key={beer.name + 1}>
            <h2 className="beerlist__card--name">{beer.name}</h2>
            <h3 className="beerlist__card--tagline">{beer.tagline}</h3>
            <img className="beerlist__card--image" src={beer.image_url} alt={beer.name} />
            <p className="beerlist__card--description">{beer.description}</p>
         </div >
      )
   })


   return (
      <div className="beerlist">{beerListJSX}</div>
   )
}

export default BeerList
