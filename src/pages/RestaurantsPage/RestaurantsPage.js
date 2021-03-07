/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import RestaurantCard from "../../components/cards/restaurant-card/RestaurantCard";
import "./RestaurantsPage.scss";
import { CityContext } from "../../context/CityContext";

const RestaurantsPage = (props) => {
  const { state, dispatch } = useContext(CityContext);
  const { city_name } = props.match.params;

  return (
    <div className="restaurants">
      <h1 className="title">
        Here are the restaurants available in {city_name}...
      </h1>
      <Grid container spacing={1} alignContent="center">
        {state.cities &&
          state.cities
            .filter((city) => city.city_name === city_name)[0]
            .restaurants.map((restaurant, _idx) => (
              <Grid key={_idx} item xs={12} sm={6} md={3}>
                <RestaurantCard
                  restaurantName={restaurant.restaurant_name}
                  restaurantImage={restaurant.restaurant_imageUrl}
                  address={restaurant.address}
                />
              </Grid>
            ))}
      </Grid>
    </div>
  );
};

export default RestaurantsPage;
