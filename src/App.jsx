// Dependency Imports
import React from "react";
import { GlobalStyles, Main } from "styles/GlobalStyles";

// Component Imports
import DataBoxContainer from "components/DataBoxContainer/DataBoxContainer";
import DataBox from "components/DataBox/DataBox";
import SupplyData from "components/Data/Supply/SupplyData";

// Data Imports
import supply from "data/supplyData";

function App() {
  return (
    <Main>
      <GlobalStyles />
      <DataBoxContainer>
        <DataBox data={supply}>
          <SupplyData data={supply} />
        </DataBox>
      </DataBoxContainer>
    </Main>
  );
}

export default App;
