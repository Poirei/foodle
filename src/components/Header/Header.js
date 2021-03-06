import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { HealthyIcon, LunchBoxIcon, PizzaIcon } from "../../assets";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <Link to="/" className="logo">
          <HealthyIcon className="logo__icon" />
          <div className="logo__text">
            F
            <span className="logo__text--icon">
              <LunchBoxIcon />
            </span>
            <span className="logo__text--icon">
              <PizzaIcon />
            </span>
            dle
          </div>
        </Link>
      </div>
      <div className="header__right">
        <Link to="/signin">
          <Button color="primary">Sign In</Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
