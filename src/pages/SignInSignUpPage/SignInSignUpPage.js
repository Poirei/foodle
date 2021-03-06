import React from "react";
import { SignIn, SignUp } from "../../components/forms";
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
