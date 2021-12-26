// import React, { useContext } from "react";
// import { ThemeContext } from "components/DataBox/DataBox";
// import { useTransition, animated } from "react-spring";
import {
  DataContainer,
  DataHeader,
  DataTable,
  DataTableHeader,
  DataTableHeaderItem,
} from "components/Data/Liquidity/LiquidityDataStyles";
import LiquidityEntry from "components/Data/Liquidity/Children/LiquidityEntry";
import { CURRENCY_SYMBOL } from "helpers/constants";

const LiquidityData = ({ data }) => {
  //TODO: Destructure the liquidity data
  const { dataEntries } = data;


  //TODO: The toggle state of the databox
  // const toggleDataBox = useContext(ThemeContext);

  // const transition = useTransition(
  //   items,
  //   {
  //     keys: (item) => item.key,
  //   },
  //   {
  //     from: { opacity: 0, marginTop: "-24px" },
  //     enter: { opacity: 1, marginTop: "0px" },
  //     // leave: { opacity: 0, marginTop: "-24px" },
  //     // config: { duration: 500 },
  //   }
  // );

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

          {/* {transition.map(({ item, key, props }) => {
            return (
              <animated.div key={key} style={props}>
                <LiquidityEntry data={item} />
              </animated.div>
            );
          })} */}
        </tbody>
      </DataTable>
    </DataContainer>
  );
};

export default LiquidityData;

//  {
//    transition.map(({ dataEntry, key, props }) => (
//      <animated.div key={key} style={props}>
//        <h1 dataEntry={dataEntry}>dede</h1>
//        {/* <LiquidityEntry dataEntry={dataEntry} /> */}
//      </animated.div>
//    ));
//  }
