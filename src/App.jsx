import React from "react";
import { GlobalStyles, Main } from "styles/GlobalStyles";
import DataBoxContainer from "components/DataBoxContainer/DataBoxContainer";
import DataBox from "components/DataBox/DataBox";

function App() {
  return (
    <Main>
      <GlobalStyles />
      <DataBoxContainer>
        <DataBox>m</DataBox>
        <DataBox></DataBox>
        <DataBox></DataBox>
      </DataBoxContainer>
    </Main>
  );
}

export default App;
