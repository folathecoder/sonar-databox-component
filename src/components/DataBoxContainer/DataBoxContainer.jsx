import {
  DataContainer,
  DataDiv,
  DataWrap,
} from "components/DataBoxContainer/DataBoxContainerStyles";

const DataBoxContainer = ({ children }) => {
  return (
    <DataDiv>
      <DataContainer>
        <DataWrap>{children}</DataWrap>
      </DataContainer>
    </DataDiv>
  );
};

export default DataBoxContainer;
