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
  const [unsplash, setUnsplash] = useState({
    catImg: "",
    catSource: "",
    author: "",
    authorSource: "",
    error: "",
  });
  const Stuff = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    const API_KEY = `${process.env.REACT_APP_UNSPLASH_API_KEY}`;
    const getData = () => {
      axios
        .get("https://catfact.ninja/fact")
        .then((res) => {
          setData(res.data.fact);
        })
        .catch(() => {
          setData("ERROR");
        });
      axios
        .get(
          `https://api.unsplash.com/photos/random?query=cat&auto=format&client_id=${API_KEY}`
        )
        .then((res) => {
          setUnsplash((prevUnsplash) => {
            return {
              ...prevUnsplash,
              catImg: res.data.urls.full,
              catSource: res.data.links.html,
              author: res.data.user.name,
              authorSource: res.data.user.links.html,
              error: "",
            };
          });
        })
        .catch((err) => {
          setUnsplash((prevUnsplash) => {
            return {
              ...prevUnsplash,
              catImg:
                "https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1229&q=80",
              catSource: "https://unsplash.com/photos/NodtnCsLdTE",
              author: "Mikhail Vasilyev",
              authorSource: "https://unsplash.com/@miklevasilyev",
              error: "Can't get random image",
            };
          });
        });
    };
    getData();
  }, [count]);
  return (
    <Box>
      <Background cat={unsplash.catImg}>
        <Title>
          <ButtonText>Cat Facts</ButtonText>
          <h4>{unsplash.error}</h4>
        </Title>
        <TextContainer>
          <StyledH1>{data}</StyledH1>
        </TextContainer>
        <div>
          <FlexRow>
            <SourceButton>
              <SourceText
                href={unsplash.authorSource}
                target="_blank"
                rel="noreferrer noopener"
              >
                Image by <b>{unsplash.author}</b> on Unsplash
              </SourceText>
            </SourceButton>
            <SourceButton>
              <SourceText
                href={unsplash.catSource}
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
