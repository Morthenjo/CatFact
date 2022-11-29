import styled, { createGlobalStyle } from "styled-components";
import Paw from "./img/paw.webp";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  html {
    background-image: url(${Paw});
    background-position: center;
    box-sizing: border-box;
  }
  * {
    box-sizing: border-box;
  }
`;

export const Box = styled.div`
  width: 100vw;
  height: 100vh;
  margin: auto;
  display: flex;
  padding: 0;
  overflow: hidden;
  flex-direction: column;
  background-size: cover;
  transition: all 0.4s;
`;

export const Background = styled.div`
  background: url(${(props) => props.cat}) center center no-repeat;
  width: 100%;
  height: 100%;
  background-size: cover;
  border: 2px solid teal;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media (min-width: 789px) {
    /* border-radius: 0 0 1rem 1rem; */
    /* background-size: fill; */
  }
`;

export const StyledH1 = styled.h1`
  color: whitesmoke;
  padding: 10% 10% 5% 10%;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Title = styled.div`
  padding: 0;
  margin: 0;
  text-align: center;
  width: 100%;
  border-bottom: 2px solid teal;
  background-color: rgba(128, 128, 128, 0.4);
  font-size: 1.5rem;
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0;
  }
`;

export const TextContainer = styled.div`
  width: 40%;
  margin: 0 auto;
  display: flex;
  flex-direction: column-reverse;
  text-align: center;
  @media (max-width: 1440px) {
    width: 80%;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
    padding: 0%;
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  background-color: rgba(255, 165, 0, 0.4);
  border: 0;
  border-top: 2px solid teal;
  margin: 0 auto;
  padding: 1rem;
  cursor: pointer;
  @media (max-width: 768px) {
    margin: 0;
    padding: 1rem;
    width: 100%;
  }
`;

export const SourceButton = styled.div`
  width: 20rem;
  /* background-color: rgba(255, 165, 0, 0.4); */
  /* border: 3px solid blue; */
  margin: 0;
  text-align: center;
  display: flex;
  @media (max-width: 550px) {
  }
`;

export const ButtonText = styled.h1`
  color: white;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
`;

export const SourceText = styled.a`
  margin: auto;
  color: white;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  cursor: pointer;
`;

export const Empty = styled.div`
  height: 50%;
  @media (min-width: 769px) {
    display: none;
  }
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Blur = styled.div`
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: -1;
`;
