import styled from "styled-components";
import { VscDebugStart } from "react-icons/vsc";

export const HeroContainer = styled.div`
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 1080px;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;
export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #171923;
  opacity: 0.7;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 128px;
  font-weight: 800;
  text-align: center;
  white-space: nowrap;
  @media screen and (max-width: 1500px) {
    font-size: 90px;
  }
  @media screen and (max-width: 1080px) {
    font-size: 68px;
  }
  @media screen and (max-width: 768px) {
    font-size: 46px;
  }
  @media screen and (max-width: 480px) {
    font-size: 34px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 48px;
  font-weight: 700;
  text-align: start;
  width: 1250px;
  
  @media screen and (max-width: 1500px) {
    font-size: 24px;
  }
  @media screen and (max-width: 1080px) {
    font-size: 22px;
  }
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowStart = styled(VscDebugStart)`
  margin-left: 8px;
  font-size: 20px;
`;
