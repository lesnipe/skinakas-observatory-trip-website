import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const FooterContainer = styled.footer`
  background-color: #000;
  border-top: 1px solid #ff7700;
`;

export const FooterWrap = styled.div`
  padding: 40px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;
export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding-top: 32px;
    flex-direction: column;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 400px;
  box-sizing: border-box;

  @media screen and (max-width: 1400px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 26px;
  margin-bottom: 20px;
  color: #fff;
  text-decoration: none;
  justify-content: center;
`;

export const FooterLink = styled.p`
  color: #fff;
  text-decoration: none;
  margin-bottom: 1rem;
  font-size: 16px;
  max-width: 400px;
  cursor: pointer;

  &:hover {
    color: #ff7700;
    transition: 0.3s ease-out;
  }
`;

export const CreditsContainer = styled.footer`
  margin-top: -2rem;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #000;
`;

export const CreditsAllWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const CreditsItemWrapper = styled.div`
  background-color: #000;
  display: flex;
  width: 600px;
  align-items: center;
  padding: 0 0 2rem 0;
  justify-content: center;
`;

export const CreditsSkinakas = styled.p`
  color: #ff7700;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;

  @media screen and (max-width: 568px) {
    font-size: 12px;
  }
`;

export const CreditsDeveloper = styled.p`
  color: #ff7700;
  font-size: 14px;
  font-weight: 600;

  @media screen and (max-width: 568px) {
    font-size: 12px;
  }
`;

export const BackToTopContainer = styled.div`
  margin: 2rem;
  margin-right: 5rem;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease-in-out;

  p {
    font-size: 12px;
    font-weight: 600;
    margin-top: -30px;
    text-align: center;
    white-space: nowrap;
    color: #000;
  }

  &:hover {
    p {
      color: #fff;
    }
    transition: 0.3s ease-in-out;
    transform: scale(1.2);
  }
  @media screen and (max-width: 768px) {
    margin: 0;
    margin-top: -3rem;
    margin-left: 8rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: start;
  }
`;

export const BackToTopArrow = styled(LinkScroll)`
  color: #ff7700;
  font-size: 84px;

  cursor: pointer;
  &:hover {
    color: #fff;
  }
`;
