import React from "react";
import { Link } from "react-router-dom";

import "./HomePage.css"; // Import the CSS file for styling
import articles from "./config/articles";
import Cards from "./components/Cards";
import HeroSection from "./components/HeroSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Cards />
    </>
  );
};

export default HomePage;
