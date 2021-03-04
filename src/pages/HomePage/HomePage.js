import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import db from "../../firebase/firebase.utils";
import "./HomePage.scss";

const HomePage = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetchCities();
  }, []);

  const fetchCities = async () => {
    try {
      const data = await db.collection("cities").get();
      data.docs.forEach((doc) => setCities([...cities, doc.data()]));
    } catch (error) {
      console.error(`error fetching data: `, error.message);
    }
  };

  return (
    <div className="home">
      <h1 className="home__title">Browse for restaurants in your city.</h1>
      {cities &&
        cities.map((city) => (
          <div key={city.id}>
            <p>{city.city_name}</p>
            <p>{city.id}</p>
            <img src={city.city_photoUrl} alt="city" />
          </div>
        ))}
    </div>
  );
};

export default HomePage;
