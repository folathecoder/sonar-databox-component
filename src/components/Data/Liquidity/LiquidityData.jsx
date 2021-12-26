import React from "react";
import {
  DataContainer,
  DataHeader,
  DataTable,
  DataTableHeader,
  DataTableHeaderItem,
} from "components/Data/Liquidity/LiquidityDataStyles";
import LiquidityEntry from "./Children/LiquidityEntry";
import { CURRENCY_SYMBOL } from "helpers/constants";

const LiquidityData = ({ data }) => {
  //TODO: Destructure the liquidity data
  const { dataEntries } = data;

  return (
    <DataContainer>
      <DataHeader>
        <h4>Recent transactions</h4>
      </DataHeader>
      <DataTable>
        <DataTableHeader>
          <DataTableHeaderItem></DataTableHeaderItem>
          <DataTableHeaderItem>amount</DataTableHeaderItem>
          <DataTableHeaderItem>value ({CURRENCY_SYMBOL})</DataTableHeaderItem>
          <DataTableHeaderItem>time</DataTableHeaderItem>
        </DataTableHeader>

        {dataEntries.map((dataEntry) => {
          return <LiquidityEntry key={dataEntry.id} data={dataEntry} />;
        })}
{/* 
        <LiquidityEntry />
        <LiquidityEntry />
        <LiquidityEntry />
        <LiquidityEntry />
        <LiquidityEntry />
        <LiquidityEntry />
        <LiquidityEntry />
        <LiquidityEntry />
        <LiquidityEntry /> */}
      </DataTable>
    </DataContainer>
  );
};

export default LiquidityData;
