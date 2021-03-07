import React from "react";
import "./RestaurantCard.scss";
import LocationOnRoundedIcon from "@material-ui/icons/LocationOnRounded";

const RestaurantCard = ({ restaurantName, restaurantImage, address }) => {
  return (
    <div className="restaurant-card">
      <div className="restaurant-card__header">{restaurantName}</div>
      <img
        src={restaurantImage}
        alt={restaurantName}
        className="restaurant-card__image"
      />
      <div className="restaurant-card__footer">
        <LocationOnRoundedIcon />
        <p className="address">{address}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
