import React from "react";
import DataBoxContainer from "components/DataBoxContainer/DataBoxContainer";
import DataBox from "components/DataBox/DataBox";
import SupplyData from "components/Data/Supply/SupplyData";
import LiquidityData from "components/Data/Liquidity/LiquidityData";

// Data Imports
import supply from "data/supplyData";
import liquidity from "data/liquidityData";
import { volume, holders } from "data/sampleData";

const DataPanel = () => {
  return (
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
  );
};

export default DataPanel;
