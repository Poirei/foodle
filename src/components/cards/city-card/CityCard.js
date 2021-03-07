import React from "react";
import "./CityCard.scss";

const CityCard = ({ cityId, cityName, cityPhoto }) => {
  return (
    <div
      className={`city-card city-card--${cityId}`}
      style={{ backgroundImage: `url(${cityPhoto})` }}
    >
      <div className="city-card__title">{cityName}</div>
    </div>
  );
};

export default CityCard;
