import { Grid, Paper, TextField } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import React from "react";
import SignIn from "../../components/forms/sign-in/SignIn";
import SignUp from "../../components/forms/sign-up/SignUp";
import "./SignInSignUpPage.scss";

const SignInSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignUpPage;
