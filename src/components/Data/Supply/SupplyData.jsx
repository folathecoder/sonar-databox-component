import {
  DataContainer,
  DataListWrap,
  DataListImageWrap,
  DataListImage,
  DataListContent,
  DataContentTitle,
  DataContentInfo,
  DataContentInfoItem,
  DataContentLine,
} from "components/Data/Supply/SupplyDataStyles";

const SupplyData = ({ data }) => {
  //TODO: Destructure the data object
  const { dataEntries } = data;

  return (
    <DataContainer>
      {dataEntries.map((dataEntry) => {
        return (
          <DataListWrap key={dataEntry.id}>
            <DataListImageWrap>
              <DataListImage>
                <img
                  src={dataEntry.supplyImage.imageSrc}
                  alt={dataEntry.supplyImage.imageAlt}
                />
              </DataListImage>
            </DataListImageWrap>
            <DataListContent>
              <DataContentTitle>
                <h3>{dataEntry.supplyTitle}</h3>
              </DataContentTitle>
              <DataContentInfo>
                <DataContentInfoItem>
                  <h4>
                    {dataEntry.supplyQuantity}
                    <span>{dataEntry.supplyUnit}</span>
                  </h4>
                </DataContentInfoItem>
                <DataContentLine>
                  <hr />
                </DataContentLine>
                <DataContentInfoItem>
                  <h4>
                    {dataEntry.supplyPercentage}
                    <span>%</span>
                  </h4>
                </DataContentInfoItem>
              </DataContentInfo>
            </DataListContent>
          </DataListWrap>
        );
      })}
    </DataContainer>
  );
};

export default SupplyData;
