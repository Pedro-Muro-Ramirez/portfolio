import styled from "styled-components";

export const AboutContainer = styled.div`
  color: #fff;
  background: #1d2122;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  height: 760px;
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
  margin: 0 auto;
`;

export const ImageWrapper = styled.div`
  margin: 70px auto 0;
`;

export const Column1 = styled.div`
  flex-basis: 100%;
  align-items: center;
`;

export const TopLine = styled.h1`
  margin-top: 30px;
  font-size: 70px;
  color: #33dac4;
`;

export const Heading = styled.p`
  color: #fff;
  font-size: 25px;
  margin-top: 50px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 400px) {
    font-size: 18px;
  }
`;

export const Column2 = styled.div`
  flex-basis: 100%;
`;

export const Image = styled.img`
  height: 200px;

  width: 100%;
`;
