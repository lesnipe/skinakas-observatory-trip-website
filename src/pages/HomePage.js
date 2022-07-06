import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import InfoSection from "../components/Info";
import { infoObject1, infoObject2, infoObject3, infoObject4 } from "../components/Info/Data";
import Footer from "../components/Footer";


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
      <InfoSection {...infoObject1} />
      <InfoSection {...infoObject2} />
      <InfoSection {...infoObject3} />
      <InfoSection {...infoObject4} />
      <Footer />
    </>
  );
};

export default Home;
