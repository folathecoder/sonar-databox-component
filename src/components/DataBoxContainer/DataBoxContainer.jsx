import {
  DataContainer,
  DataWrap,
} from "components/DataBoxContainer/DataBoxContainerStyles";

const DataBoxContainer = ({ children }) => {
  return (
    <DataContainer>
      <DataWrap>{children}</DataWrap>
    </DataContainer>
  );
};

export default DataBoxContainer;
