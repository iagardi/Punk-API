import React from 'react'

import './CardList.scss'

const CardList = (props) => {
   const { name, image_url, tagline, beersArr } = props

   const beerCardListJSX = beersArr.map((beer, index) => {
      return (<>
         <h2 className="beer-card__name">{name}</h2>
         <h3 className="beer-card__tagline">{tagline}</h3>
         <img src={image_url}> </img>
      </>)
   })
   return (
      <>
         <div className="beer-card__list">
            {beerCardListJSX}
         </div>
      </>
   )

}
export default CardList

