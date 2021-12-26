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
        <thead>
          <DataTableHeader>
            <DataTableHeaderItem></DataTableHeaderItem>
            <DataTableHeaderItem>amount</DataTableHeaderItem>
            <DataTableHeaderItem>value ({CURRENCY_SYMBOL})</DataTableHeaderItem>
            <DataTableHeaderItem>time</DataTableHeaderItem>
          </DataTableHeader>
        </thead>
        <tbody>
          {dataEntries.map((dataEntry) => {
            return <LiquidityEntry key={dataEntry.id} data={dataEntry} />;
          })}
        </tbody>
      </DataTable>
    </DataContainer>
  );
};

export default LiquidityData;
