import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkRouter)`
  color: #ff7700;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    transition: 0.1s ease-in-out;
    color: #fff;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #ff7700;
  }
  @media screen and (max-width: 768px) {
    display: block;
    color: #fff;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  font-size: 1.2rem;

  @media screen and (max-width: 910px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 830px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 30px;
`;

export const NavLinks = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  white-space: nowrap;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: 0.1s ease-in;

  &.active {
    padding-top: 0.9rem;
    transform: scale(1.05);
    color: #ff7700;
    font-weight: 900;
    transition: 0.3s ease-in-out;
    padding-bottom: 2.2rem;
    border-bottom: 4px solid #ff7700;
  }

  &:hover {
    color: #ff7700;
    transition: 0.1s ease-in-out;
  }
`;

export const SocialMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 24px;
  justify-content: center;
  padding-left: 2rem;

  @media screen and (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    transition: 0.3s ease-in-out;
    justify-content: center;
    padding-left: 2rem;
  }
`;

export const SocialItem = styled.li`
  height: 20px;
  color: #ff7700;
  &:hover {
    color: #fff;
    transform: scale(1.1);
    transition: 0.3s ease-in-out;
  }
`;

export const SocialLinks = styled.a`
  color: inherit;
  background-color: transparent;
  display: flex;
  align-items: center;
  text-decoration: none !important;
  font-size: 24px;
  padding: 0 0.3rem;
  height: 100%;
  cursor: pointer;

  &.hover,
  .focus,
  .active {
    text-decoration: none;
    color: inherit;
  }
`;
