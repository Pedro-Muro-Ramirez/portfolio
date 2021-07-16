import React from "react";
import coding from "../../images/coding.svg";
import {
  AboutContainer,
  AboutWrapper,
  TextWrapper,
  Column1,
  Column2,
  TopLine,
  Heading,
  Image,
  ImageWrapper,
} from "./AboutElements";

const AboutSection = () => {
  return (
    <>
      <AboutContainer>
        <AboutWrapper>
          <Column1>
            <TextWrapper>
              <TopLine>About Me</TopLine>
              <Heading>
                He had three simple rules by which he lived. The first was to
                never eat blue food. There was nothing in nature that was edible
                that was blue. People often asked about blueberries, but
                everyone knows those are actually purple. He understood it was
                one of the stranger rules to live by, but it had served him well
                thus far in the 50+ years of his life.
              </Heading>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImageWrapper>
              <Image src={coding} alt="coding-pic" />
            </ImageWrapper>
          </Column2>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default AboutSection;
