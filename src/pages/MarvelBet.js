import React from "react";
import "../styles/about.css"
import BreadCrumbs from "./Content/BreadCrumbs";
import MainContent from "./Content/MainContent";




const MarvelBet = () => {
  return (
    <section className="section-iccwin my-5">
      <div className="container ">
          <BreadCrumbs />
          <MainContent />
      </div>
    </section>
  );
};

export default MarvelBet;
