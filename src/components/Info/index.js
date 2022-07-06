import React from "react";
import { Button } from "../ButtonElements";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading1,
  Heading2,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./InfoElements";

const Info = ({
  id,
  lightBg,
  lightText,
  buttonLabel,
  description,
  topline,
  toplineIcon,
  headline1,
  headline2,
  img,
  imgStart,
  imgScale,
  alt,
  primary,
  dark,
  fontbig,
  big
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine >
                  {toplineIcon} {topline}
                </TopLine>
                <Heading1 lightText={lightText}>{headline1}</Heading1>
                <Heading2>{headline2}</Heading2>
                <Subtitle lightText={lightText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to={id}
                    smooth="true"
                    duration={500}
                    spy="true"
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    fontbig = {fontbig ? 1 : 0}
                    big={big ? 1 :0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img imgScale={imgScale} src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Info;
