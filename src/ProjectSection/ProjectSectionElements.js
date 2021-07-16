import styled from "styled-components";

export const ProjectContainer = styled.div`
  color: #fff;
  background: #1d2122;
  /* @media screen and (max-width: 768px) {
    padding: 100px 0;
  } */
`;

export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: row wrap;
  z-index: 1;
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;
  justify-content: center;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  height: 80px;
  text-align: center;
  margin-bottom: 35px;
`;

export const ProjectTitle = styled.h1`
  color: #fff;
  font-size: 70px;
  color: #33dac4;
`;

export const ImageContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-flow: row wrap;
  text-align: center;
`;

export const ImageWrapper = styled.div`
  flex-basis: 50%;
  margin: 0 0 40px 0;

  @media screen and (max-width: 968px) {
    flex-basis: 100%;
  }
`;

export const Image = styled.img`
  height: 240px;
  width: auto;
  border-radius: 25px;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    height: 200px;
  }

  @media screen and (max-width: 400px) {
    height: 170px;
  } ;
`;

export const ProjectName = styled.h2`
  font-size: 30px;
  font-weight: bold;
  margin: 15px 0 10px 0;
`;

export const ProjectDescription = styled.p`
  margin-top: 15px;
  font-size: 18px;

  
`;
