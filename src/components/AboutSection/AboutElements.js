import styled from "styled-components";

export const AboutContainer = styled.div`
  color: #fff;
  background: #1d2122;
  padding: 100px 0;
`;

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: row wrap;
  z-index: 1;
  height: 760px;
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 970px) {
    flex-direction: column-reverse;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  margin: 0 auto;
`;

export const Column1 = styled.div`
  flex-basis: 50%;
  align-items: center;

  @media screen and (max-width: 970px) {
    flex-basis: 100%;
  }
`;

export const TopLine = styled.h1`
  font-size: 70px;
  color: #33dac4;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`;

export const Heading = styled.p`
  color: #fff;
  font-size: 18px;
  margin-top: 50px;
  letter-spacing: 0.5px;
  line-height: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
  @media screen and (max-width: 400px) {
    font-size: 12px;
  }
`;

export const Column2 = styled.div`
  flex-basis: 50%;
  text-align: center;

  @media screen and (max-width: 970px) {
    flex-basis: 100%;
  }
`;

export const ImageWrapper = styled.div`
  margin: 200px auto;

  @media screen and (max-width: 970px) {
    margin: 100px auto 0;
  }
`;

export const Image = styled.img`
  height: 250px;
  width: auto;
  @media screen and (max-width: 768px) {
    height: 180px;
  }

  @media screen and (max-width: 400px) {
    height: 120px;
  } ;
`;
