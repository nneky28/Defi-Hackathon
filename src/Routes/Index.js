import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Page2 from "../Pages/Page2";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Sample from "../Redux/Reducers/Sample";
import InvestSignUp from "../Pages/InvestorSignUp/InvestSignUp";
import { CreateProject } from "../Pages/CreateProject/CreateProject";
import DonateModal from "../Pages/Donate/DonateModal";
import { DonateThanks } from "../Pages/Donate/DonateThanks";

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
        <Route path="/page" element={<Page2 />} />
        <Route path="/sample" element={<Sample />} />
      </Routes>
    </BrowserRouter>
  );
}
