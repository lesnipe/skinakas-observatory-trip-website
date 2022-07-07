import React from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import { MdLocationOn, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  CreditsContainer,
  CreditsDeveloper,
  CreditsSkinakas,
  CreditsAllWrapper,
  CreditsItemWrapper,
  BackToTopContainer,
  BackToTopArrow,
} from "./FooterElements";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <BackToTopContainer>
                <BackToTopArrow
                  to="about-us"
                  smooth={true}
                  duration={1000}
                  spy={true}
                  exact={"true"}
                  offset={-80}
                >
                  <MdOutlineKeyboardArrowUp />
                  <p>(back to top ↑)</p>
                </BackToTopArrow>
              </BackToTopContainer>
              <FooterLinkItems>
                <FooterLinkTitle to="/">
                  <RiContactsLine color="#FF7700" style={{ marginRight: 10 }} />
                  Contact
                </FooterLinkTitle>
                <FooterLink to="/">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle to="/">
                  <MdLocationOn color="#FF7700" style={{ marginRight: 10 }} />
                  Pickup point
                </FooterLinkTitle>
                <FooterLink to="/">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle to="/">
                  <FaRegQuestionCircle
                    color="#FF7700"
                    style={{ marginRight: 10 }}
                  />
                  FAQ
                </FooterLinkTitle>
                <FooterLink to="/">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
        </FooterWrap>
      </FooterContainer>
      <CreditsContainer>
        <CreditsAllWrapper>
          <CreditsItemWrapper>
            <CreditsSkinakas>
              Skinakas © {year} - All rights reserved.
            </CreditsSkinakas>
          </CreditsItemWrapper>
          <CreditsItemWrapper>
            <CreditsDeveloper>
              Passionately designed & developed by Myron Sfyrakis.
            </CreditsDeveloper>
          </CreditsItemWrapper>
        </CreditsAllWrapper>
      </CreditsContainer>
    </>
  );
};

export default Footer;
