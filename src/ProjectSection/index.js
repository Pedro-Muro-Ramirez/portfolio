import React from "react";
import { DiCss3, DiHtml5, DiJsBadge, DiBootstrap } from "react-icons/di";
import esports from "../images/esports1.png";
import clock from "../images/clock.png";
import agency from "../images/agency.png";
import photosnap from "../images/photosnap.png";

import {
  ProjectContainer,
  ProjectWrapper,
  TitleWrapper,
  ProjectTitle,
  ImageContainer,
  ImageWrapper,
  Image,
  ProjectName,
  ProjectDescription,
} from "./ProjectSectionElements";
import { ExternalLink } from "react-external-link";

const ProjectSection = () => (
  <ProjectContainer id="projects">
    <TitleWrapper>
      <ProjectTitle>Projects</ProjectTitle>
    </TitleWrapper>
    <ProjectWrapper>
      <ImageContainer>
        <ImageWrapper>
          <ExternalLink href="https://pedro-muro-ramirez.github.io/Video-Game-Site/">
            <Image src={esports} alt="esports-image" />
          </ExternalLink>
          <ProjectName>Esports Website</ProjectName>
          <DiHtml5 size="25px" />
          <DiCss3 size="25px" />
          <DiJsBadge size="25px" />
          <DiBootstrap size="25px" />
          <ProjectDescription>
            Simple fake Esports coaching business website with testimonials.
          </ProjectDescription>
        </ImageWrapper>
        <ImageWrapper>
          <ExternalLink href="https://pedro-muro-ramirez.github.io/clock-app/">
            <Image src={clock} alt="clock-image" />
          </ExternalLink>
          <ProjectName>Clock App</ProjectName>
          <DiHtml5 size="25px" />
          <DiCss3 size="25px" />
          <DiJsBadge size="25px" />
          <ProjectDescription>
            Small site that tells time based on location, generates a random
            quote, and shows calendar information.
          </ProjectDescription>
        </ImageWrapper>
        <ImageWrapper>
          <ExternalLink href="https://pedro-muro-ramirez.github.io/sunnyside-agency-site/">
            <Image src={agency} alt="agency-image" />
          </ExternalLink>
          <ProjectName>Agency Website</ProjectName>
          <DiHtml5 size="25px" />
          <DiCss3 size="25px" />
          <DiJsBadge size="25px" />
          <ProjectDescription>
            A simple agency landing page website using Flexbox.
          </ProjectDescription>
        </ImageWrapper>
        <ImageWrapper>
          <ExternalLink href="https://pedro-muro-ramirez.github.io/photosnap-multi-page-website/">
            <Image src={photosnap} alt="photosnap-image" />
          </ExternalLink>
          <ProjectName>Photosnap Website</ProjectName>
          <DiHtml5 size="25px" />
          <DiCss3 size="25px" />
          <DiJsBadge size="25px" />
          <ProjectDescription>
            Multipage website with a mobile first design.
          </ProjectDescription>
        </ImageWrapper>
      </ImageContainer>
    </ProjectWrapper>
  </ProjectContainer>
);

export default ProjectSection;
