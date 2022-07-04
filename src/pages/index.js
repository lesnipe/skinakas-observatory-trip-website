import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";


const Home = ({ redirectTo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar
        redirectTo={redirectTo}
        isOpen={isOpen}
        toggleIsOpen={toggleIsOpen}
      />
      <Navbar
        redirectTo={redirectTo}
        isOpen={isOpen}
        toggleIsOpen={toggleIsOpen}
      />
      <Hero />
    </>
  );
};

export default Home;
