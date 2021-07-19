import React from "react";
import coding from "../../images/static.svg";
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
        <TopLine>About Me</TopLine>
        <AboutWrapper>
          <Column1>
            <TextWrapper>
              <Heading>
                Hello, my name is Pedro Muro-Ramirez! I'm an aspiring Front-End
                Developer with experience in technical support and a
                demonstrated history of working in customer service. I received
                my B.S in Criminal Justice from the University of Nebraska at
                Omaha. I found my passion for learning about web development
                during my time working for a WordPress hosting company called
                Flywheel. My hunger for knowledge and determination to turn
                information into action made me one of the top technical support
                specialists for their chat team. I'm currently looking to level
                up my career by becoming a Front-End Developer. I currently have
                knowledge in HTML, CSS, Javascript, React, and Bootstrap. If you
                are looking for a motivated individual who learns quickly, has
                attention to detail, and can learn Spanish from, then let's get
                to work.
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
