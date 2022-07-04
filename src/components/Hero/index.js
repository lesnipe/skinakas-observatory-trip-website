import React, { useState } from "react";
import {
  HeroBg,
  HeroContainer,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowStart,
} from "./HeroElements";
import { Button } from "../ButtonElement";
import Video from "../../videos/video.mp4";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const toggleHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="about-us">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Learn more about us</HeroH1>
        <HeroP>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </HeroP>
        <HeroBtnWrapper>
        <Button to="/" primary={0} big={1} dark={0} fontbig={1} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
          Get started {hover && <ArrowStart />}
        </Button>
      </HeroBtnWrapper>
      </HeroContent>
      
    </HeroContainer>
  );
};

export default HeroSection;
