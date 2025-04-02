import React from "react";
import Navbar from "./Navbar";
import Secondsection from "./Secondsection";
import { Third } from "./Third";
import WhyChooseUs from "./Fourth";
import { FifthComponent } from "./FifthComponent";
import PaymentOption from "./Sixth";
import Footer from "./Footer";
import StickyFooter from "./StickyFooter";
import FAQ from "./FAQ";

const Home = () => {
  return (
    <>
      <Navbar />
      <Secondsection />
      <Third />
      <WhyChooseUs />
      <FifthComponent />
      <PaymentOption />
      <FAQ />
      <Footer />
      <StickyFooter/>
    </>
  );
};

export default Home;
