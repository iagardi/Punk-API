import React from "react";
import BeerCard from "../BeerCard/BeerCard";

import "./BeerList.scss";

const BeerList = props => {
  const { beersArr } = props;

  const beerListJSX = beersArr.map((beer, index) => {
    return <BeerCard beer={beer} key={beer.name + index} />;
  });

  return <div className="beerlist">{beerListJSX}</div>;
};

export default BeerList;
