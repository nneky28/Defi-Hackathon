import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import InvestSignUp from "../Pages/InvestorSignUp/InvestSignUp";
import { CreateProject } from "../Pages/CreateProject/CreateProject";
import DonateModal from "../Pages/Donate/DonateModal";
import { DonateThanks } from "../Pages/Donate/DonateThanks";
import Details from "../Pages/Details";

export default function IndexRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/InvestSignUp" element={<InvestSignUp />} />
        <Route path="/CreateProject" element={<CreateProject />} />
        <Route path="/DonateModal" element={<DonateModal />} />
        <Route path="/DonateThanks" element={<DonateThanks />} />
        <Route path="/details" element={<Details />} />
        {/* <Route path="/sample" element={<Sample />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
