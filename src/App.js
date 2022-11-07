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
  function reload() {
    window.location.reload();
  }
  useEffect(() => {
    const getData = () => {
      axios.get("https://catfact.ninja/fact").then((res) => {
        setData(res.data.fact);
      });
    };
    getData();
  }, []);
  return (
    <Box>
      <Background cat="https://source.unsplash.com/random/?cat">
        <Title>
          <ButtonText>Cat Facts</ButtonText>
        </Title>
        <TextContainer>
          <StyledH1>{data}</StyledH1>
        </TextContainer>
        <div>
          <StyledButton onClick={reload}>
            <ButtonText>Get New Fact</ButtonText>
          </StyledButton>
        </div>
      </Background>
    </Box>
  );
}

export default App;
