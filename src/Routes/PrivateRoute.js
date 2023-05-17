import React from "react";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import AuthRoute from "./AuthRoute";

export default function PrivateRoute() {
  return (
    <AuthRoute exact path="/">
      <Home />
      <SignIn />
      <SignUp />
    </AuthRoute>
  );
}
