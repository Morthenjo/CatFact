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
  width: 90%;
  height: 90vh;
  margin: 2rem auto;
  display: flex;
  padding: 0;
  overflow: hidden;
  flex-direction: column;
  background-size: cover;
  @media (max-width: 768px) {
    margin: 1rem auto;
  }
  @media (max-width: 425px) {
    width: 100%;
    margin: 0;
    height: 100vh;
  }
`;

export const Background = styled.div`
  background: url(${(props) => props.cat}) center center no-repeat;
  width: 100%;
  height: 100%;
  background-size: cover;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media (min-width: 789px) {
    border-radius: 0 0 1rem 1rem;
    background-size: fill;
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
  background-color: red;
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
  background-color: orange;
  border: 0;
  margin: 0 auto;
  padding: 1rem;
  @media (max-width: 768px) {
    margin: 0;
    padding: 1rem;
    width: 100%;
    border-top: 3px solid blue;
  }
`;

export const SourceButton = styled.div`
  width: 5rem;
  background-color: orange;
  border: 3px solid blue;
  border-bottom: 0;
  margin: 0;
  text-align: center;
  @media (max-width: 768px) {
  }
`;

export const ButtonText = styled.h1`
  color: white;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  cursor: pointer;
`;

export const SourceText = styled.a`
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
