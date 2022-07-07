import React, { Image } from "react";
import {
  FaBars,
  FaInstagramSquare,
  FaFacebookSquare,
  FaYoutube,
} from "react-icons/fa";
import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavMenu,
  NavLinks,
  SocialMenu,
  SocialItem,
  SocialLinks,
} from "./NavbarElements";

import Logo from "../../images/logo.png";

const Navbar = ({ redirectTo, isOpen, toggleIsOpen }) => {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo to="/">
            <img src={Logo} width={100} height={100} />
          </NavLogo>
          <MobileIcon onClick={toggleIsOpen}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about-us"
                smooth={true}
                duration={500}
                spy={true}
                exact={1}
                offset={-80}
              >
                About us
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="experiences"
                smooth={true}
                duration={500}
                spy={true}
                exact={1}
                offset={-80}
              >
                Experiences
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="gallery"
                smooth={true}
                duration={500}
                spy={true}
                exact={1}
                offset={-80}
              >
                Gallery
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="talk-to-us"
                smooth={true}
                duration={500}
                spy={true}
                exact={1}
                offset={-80}
              >
                Talk to us
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="attributors"
                smooth={true}
                duration={500}
                spy={true}
                exact={1}
                offset={-80}
              >
                Attributors
              </NavLinks>
            </NavItem>
          </NavMenu>
          <SocialMenu>
            <SocialItem>
              <SocialLinks
                onClick={() => redirectTo("https://www.instagram.com")}
              >
                <FaInstagramSquare />
              </SocialLinks>
            </SocialItem>
            <SocialItem>
              <SocialLinks
                onClick={() => redirectTo("https://www.facebook.com")}
              >
                <FaFacebookSquare />
              </SocialLinks>
            </SocialItem>
            <SocialItem>
              <SocialLinks
                onClick={() => redirectTo("https://www.youtube.com")}
              >
                <FaYoutube size={28} />
              </SocialLinks>
            </SocialItem>
          </SocialMenu>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
