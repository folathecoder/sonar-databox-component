import {
  DataTableBody,
  DataTableBodyItem,
  PriceChange,
} from "components/Data/Liquidity/Children/LiquidityEntryStyles";
import { CURRENCY_SYMBOL } from "helpers/constants";

const LiquidityEntry = ({ data }) => {
  //TODO: Destructure the data props
  const { amount, value, time } = data;

  return (
    <DataTableBody>
      <DataTableBodyItem>
        <i className="fab fa-bitcoin"></i>
      </DataTableBodyItem>
      <DataTableBodyItem>
        <PriceChange>
          {amount.wbtc} <span>WBTC</span> <br />
        </PriceChange>
        {amount.dai} <span>DAI</span>
      </DataTableBodyItem>
      <DataTableBodyItem>
        <span>{CURRENCY_SYMBOL}</span>
        {value}
      </DataTableBodyItem>
      <DataTableBodyItem>
        {time.value}
        <span>{time.unit}</span>
      </DataTableBodyItem>
    </DataTableBody>
  );
};

export default LiquidityEntry;
