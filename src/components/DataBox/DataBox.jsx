import { useState } from "react";
import {
  DataBoxWrap,
  DataBoxShow,
  DataBoxTitle,
  DataBoxContent,
  DataBoxHidden,
  DataBoxButton,
} from "components/DataBox/DataBoxStyles";

const DataBox = ({ children }) => {
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
      <DataBoxShow onClick={handleToggle}>
        <DataBoxTitle>
          <h3>Market Cap</h3>
        </DataBoxTitle>
        <DataBoxContent>
          <h4>12</h4>
          <span>m</span>
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
