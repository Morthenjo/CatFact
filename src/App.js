import axios from "axios";
import { useEffect, useState } from "react";
import {
  Background,
  Box,
  ButtonText,
  StyledButton,
  StyledH1,
  TextContainer,
  Title,
} from "./styles";

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    const getData = () => {
      axios.get("https://catfact.ninja/fact").then((res) => {
        setData(res.data.fact);
      });
    };
    getData();
  }, []);
  const Reload = () => {
    window.location.reload();
  };
  return (
    <Box>
      <Background>
        <Title>
          <ButtonText>Cat Facts</ButtonText>
        </Title>
        <TextContainer>
          <StyledH1>{data}</StyledH1>
        </TextContainer>
        <StyledButton onClick={Reload}>
          <ButtonText>Get New Fact</ButtonText>
        </StyledButton>
      </Background>
    </Box>
  );
}

export default App;
