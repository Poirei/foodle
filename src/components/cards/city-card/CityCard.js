import React from "react";
import "./CityCard.scss";

const CityCard = ({ cityName, cityPhoto }) => {
  return (
    <div className="city-card" style={{ backgroundImage: `url(${cityPhoto})` }}>
      <div className="city-card__title">{cityName}</div>
    </div>
  );
};

export default CityCard;
