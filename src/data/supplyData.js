import circulating from "assets/images/databoxes/supplyData/circulating.png";
import burn from "assets/images/databoxes/supplyData/burn.png";
import dev from "assets/images/databoxes/supplyData/dev.png";

const supply = {
  dataTitle: "total supply",
  dataItems: [
    {
      id: 1,
      dataHeading: "mood",
      dataQuantity: "800",
      dataUnit: "B",
    },
    {
      id: 2,
      dataHeading: "growth",
      dataQuantity: "800",
      dataUnit: "B",
    },
  ],
  dataEntries: [
    {
      id: 1,
      supplyTitle: "circulating supply",
      supplyQuantity: "609.1",
      supplyUnit: "B",
      supplyPercentage: "82.1",
      supplyImage: {
        imageSrc: circulating,
        imageAlt: "",
      },
    },

    {
      id: 2,
      supplyTitle: "maximum supply",
      supplyQuantity: "609",
      supplyPercentage: "82.1",
      supplyImage: {
        imageSrc: circulating,
        imageAlt: "",
      },
    },
    {
      id: 3,
      supplyTitle: "burn wallets",
      supplyQuantity: "609.1",
      supplyUnit: "B",
      supplyPercentage: "82.1",
      supplyImage: {
        imageSrc: burn,
        imageAlt: "",
      },
    },
    {
      id: 4,
      supplyTitle: "dev wallets",
      supplyQuantity: "609.1",
      supplyUnit: "B",
      supplyPercentage: "82.1",
      supplyImage: {
        imageSrc: dev,
        imageAlt: "",
      },
    },
  ],
};

export default supply;
