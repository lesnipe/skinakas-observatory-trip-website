import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarWrapper,
  SidebarLink,
} from "./SidebarElements";
import { SocialMenu, SocialItem, SocialLinks } from "../Navbar/NavbarElements";
import { FaInstagramSquare, FaFacebookSquare, FaYoutube } from "react-icons/fa";

const Sidebar = ({ redirectTo, isOpen, toggleIsOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggleIsOpen}>
      <Icon onClick={toggleIsOpen}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about-us" onClick={toggleIsOpen}>
            About us
          </SidebarLink>
          <SidebarLink to="experiences" onClick={toggleIsOpen}>
            Experiences
          </SidebarLink>
          <SidebarLink to="gallery" onClick={toggleIsOpen}>
            Gallery
          </SidebarLink>
          <SidebarLink to="talk-to-us" onClick={toggleIsOpen}>
            Talk to us
          </SidebarLink>
          <SidebarLink to="attributors" onClick={toggleIsOpen}>
            Attributors
          </SidebarLink>
          <SocialMenu isOpen={isOpen}>
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
                <FaYoutube size={20} />
              </SocialLinks>
            </SocialItem>
          </SocialMenu>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
