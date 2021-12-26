import React, { useState } from "react";
import {
  DataBoxWrap,
  DataBoxShow,
  DataBoxTitle,
  DataBoxContent,
  DataBoxHidden,
} from "components/DataBox/DataBoxStyles";
import DataBoxButton from "components/DataBox/Children/DataBoxButton";

//TODO: Initiate a ThemeContext to share statewith children
export const ThemeContext = React.createContext();

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
    <ThemeContext.Provider value={toggleDataBox}>
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
          <DataBoxHidden toggleDataBox={toggleDataBox}>
            {children}
          </DataBoxHidden>
        )}
        {children && (
          <DataBoxButton event={handleToggle} toggleDataBox={toggleDataBox} />
        )}
      </DataBoxWrap>
    </ThemeContext.Provider>
  );
};

export default DataBox;
