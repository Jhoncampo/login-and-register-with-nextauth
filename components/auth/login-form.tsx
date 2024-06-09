import React from "react";
import CardWrapper from "./card-wrappers";

const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonHrfe="/auth/register"
      showSocial
      backButtonLabel="Don't have an account?"
    >
      Login Form!
    </CardWrapper>
  );
};

export default LoginForm;
