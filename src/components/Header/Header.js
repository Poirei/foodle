import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HealthyIcon, LunchBoxIcon, PizzaIcon } from "../../assets";
import { AuthContext } from "../../context/UserContext";
import { auth } from "../../firebase/firebase.utils";
import "./Header.scss";

const Header = () => {
  const { currentUser } = useContext(AuthContext);

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
        {currentUser ? (
          <Button color="primary" onClick={() => auth.signOut()}>
            Sign Out
          </Button>
        ) : (
          <Link to="/signin">
            <Button color="primary">Sign In</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
