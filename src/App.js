import React from "react";
import StyledApp from "./StyledApp";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";
import GameContainer from "./components/GameContainer";

function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <Header />
      <GameContainer />
    </StyledApp>
  );
}

export default App;
