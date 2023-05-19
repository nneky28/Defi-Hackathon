import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Project } from "../Pages/Project/Project";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import InvestSignUp from "../Pages/InvestorSignUp/InvestSignUp";
import Details from "../Pages/Details";

export default function IndexRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/InvestSignUp" element={<InvestSignUp />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}
