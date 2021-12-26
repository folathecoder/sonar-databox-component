// Dependency Imports
import React from "react";
import { GlobalStyles, Main } from "styles/GlobalStyles";

// Component Imports
import DataBoxContainer from "components/DataBoxContainer/DataBoxContainer";
import DataBox from "components/DataBox/DataBox";
import SupplyData from "components/Data/Supply/SupplyData";
import LiquidityData from "components/Data/Liquidity/LiquidityData";

// Data Imports
import supply from "data/supplyData";
import liquidity from "data/liquidityData";
import { volume, holders } from "data/sampleData";

function App() {
  return (
    <Main>
      <GlobalStyles />
      <DataBoxContainer>
        <DataBox data={supply}>
          <SupplyData data={supply} />
        </DataBox>
        <DataBox data={liquidity}>
          <LiquidityData data={liquidity} />
        </DataBox>
        <DataBox data={holders} />
        <DataBox data={volume} />
      </DataBoxContainer>
    </Main>
  );
}

export default App;
