import React from "react";
import DataBoxContainer from "components/DataBoxContainer/DataBoxContainer";
import DataBox from "components/DataBox/DataBox";
import SupplyData from "components/Data/Supply/SupplyData";
import LiquidityData from "components/Data/Liquidity/LiquidityData";

// Data Imports
import supply from "data/supplyData";
import liquidity from "data/liquidityData";
import { volume, holders } from "data/sampleData";

const HoldingsPanel = () => {
  return (
    <DataBoxContainer>
      <DataBox data={holders} />
      <DataBox data={volume} />
      <DataBox data={holders} />
      <DataBox data={volume} />
      <DataBox data={holders} />
      <DataBox data={volume} />
    </DataBoxContainer>
  );
};

export default HoldingsPanel;
