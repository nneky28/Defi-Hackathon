import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Donate } from "../Pages/Donate/Donate";
import Home from "../Pages/Home";
import Page2 from "../Pages/Page2";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Sample from "../Redux/Reducers/Sample";

export default function IndexRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Donate" element={<Donate />} />

        <Route path="/page" element={<Page2 />} />
        <Route path="/sample" element={<Sample />} />
      </Routes>
    </BrowserRouter>
  );
}
