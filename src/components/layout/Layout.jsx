import React from "react";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import FixedNav from "../header/FixedNav";
import Chatbot from "../header/Chatbot";
const Layout = () => {
  return (
    <div>
      
      <Header /> <FixedNav />
      <Chatbot />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
