import axios from "axios";
import { useEffect, useState } from "react";
import {
  Background,
  Box,
  ButtonText,
  FlexRow,
  SourceButton,
  SourceText,
  StyledButton,
  StyledH1,
  TextContainer,
  Title,
} from "./styles";

function App() {
  const [data, setData] = useState();
  const [count, setCount] = useState(0);
  const [catImg, setCatImg] = useState();
  const [catSource, setCatSource] = useState();
  const [author, setAuthor] = useState();
  const [authorSource, setAuthorSource] = useState();
  const Stuff = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    const API_KEY = `${process.env.REACT_APP_UNSPLASH_API_KEY}`;
    const getData = () => {
      axios.get("https://catfact.ninja/fact").then((res) => {
        setData(res.data.fact);
      });
      axios
        .get(
          `https://api.unsplash.com/photos/random?query=cat&client_id=${API_KEY}`
        )
        .then((res) => {
          setCatImg(res.data.urls.full);
          setCatSource(res.data.links.html);
          setAuthor(res.data.user.name);
          setAuthorSource(res.data.user.links.html);
        });
    };
    getData();
  }, [count]);
  return (
    <Box>
      <Background cat={catImg}>
        <Title>
          <ButtonText>Cat Facts</ButtonText>
        </Title>
        <TextContainer>
          <StyledH1>{data}</StyledH1>
        </TextContainer>
        <div>
          <FlexRow>
            <SourceButton>
              <SourceText
                href={authorSource}
                target="_blank"
                rel="noreferrer noopener"
              >
                Image by <b>{author}</b> on Unsplash
              </SourceText>
            </SourceButton>
            <SourceButton>
              <SourceText
                href={catSource}
                target="_blank"
                rel="noreferrer noopener"
              >
                Source
              </SourceText>
            </SourceButton>
          </FlexRow>
          <StyledButton onClick={Stuff}>
            <ButtonText>Get New Fact</ButtonText>
          </StyledButton>
        </div>
      </Background>
    </Box>
  );
}

export default App;
