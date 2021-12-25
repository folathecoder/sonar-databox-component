import { useState } from "react";
import {
  DataBoxWrap,
  DataBoxShow,
  DataBoxTitle,
  DataBoxContent,
  DataBoxHidden,
  DataBoxButton,
} from "components/DataBox/DataBoxStyles";

const DataBox = ({ data, children }) => {
  //TODO: Destructure the data object
  const { dataTitle, dataQuantity, dataUnit } = data;

  //TODO: Monitor the state of the DataBox Toggle
  const [toggleDataBox, setToggleDataBox] = useState(false);

  //TODO: Event => Function that changes the toggleDataBox state when button is clicked only if children component is passed
  const handleToggle = () => {
    if (children) {
      setToggleDataBox(!toggleDataBox);
    }
  };

  return (
    <DataBoxWrap toggleDataBox={toggleDataBox}>
      <DataBoxShow onClick={handleToggle} toggleDataBox={toggleDataBox}>
        <DataBoxTitle>
          <h3>{dataTitle}</h3>
        </DataBoxTitle>
        <DataBoxContent>
          <h4>
            {dataQuantity}
            <span>{dataUnit}</span>
          </h4>
        </DataBoxContent>
      </DataBoxShow>
      {children && (
        <DataBoxHidden toggleDataBox={toggleDataBox}>{children}</DataBoxHidden>
      )}
      {children && (
        <DataBoxButton onClick={handleToggle} toggleDataBox={toggleDataBox}>
          <i className="fas fa-plus"></i>
        </DataBoxButton>
      )}
    </DataBoxWrap>
  );
};

export default DataBox;
