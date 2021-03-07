import React, { useContext, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { CityCard } from "../../components/cards";
import db from "../../firebase/firebase.utils";
import "./HomePage.scss";
import { CityContext } from "../../context/CityContext";

const HomePage = () => {
  const { state, dispatch } = useContext(CityContext);

  useEffect(() => {
    fetchCities();
  }, []);

  const fetchCities = async () => {
    try {
      const data = await db.collection("cities").get();
      let cities = [];
      data.docs.forEach((doc) => cities.push(doc.data()));
      dispatch({
        type: "GET_CITIES",
        payload: cities,
      });
    } catch (error) {
      console.error(`error fetching data: `, error.message);
    }
  };

  return (
    <div className="home">
      <h1 className="home__title">Browse for restaurants in your city.</h1>
      <Grid container spacing={4} justify="center" alignContent="center">
        {state.cities &&
          state.cities.map((city) => (
            <Grid key={city.id} item xs={12} sm={6} md={4}>
              <Link
                to={{
                  pathname: `/${city.city_name}/restaurants`,
                  state: city.city_name,
                }}
              >
                <CityCard
                  cityId={city.id}
                  cityName={city.city_name}
                  cityPhoto={city.city_photoUrl}
                />
              </Link>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default HomePage;
