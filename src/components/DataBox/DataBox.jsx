import React, { useState, useEffect } from "react";
import {
  DataBoxWrap,
  DataBoxShow,
  DataBoxTitle,
  DataBoxContent,
  DataBoxSubHeading,
  DataBoxContentWrap,
  DataBoxHidden,
} from "components/DataBox/DataBoxStyles";
import DataBoxButton from "components/DataBox/Children/DataBoxButton";

//TODO: Initiate a ThemeContext to share statewith children
export const ThemeContext = React.createContext();

const DataBox = ({ data, children }) => {
  //TODO: Destructure the data object
  const { dataTitle, dataItems, dataEntries } = data;

  //TODO: Monitor the state of the DataBox Toggle
  const [toggleDataBox, setToggleDataBox] = useState(false);

  const [hiddenBox, setHiddenBox] = useState(false);

  //TODO: Event => Function that changes the toggleDataBox state when button is clicked only if children component is passed
  const handleToggle = () => {
    if (children) {
      setToggleDataBox(!toggleDataBox);
    }
  };

  // console.log(dataEntries.length);
  // if (dataEntries.length < 1) {
  //   setToggleDataBox(false);
  // }

  useEffect(() => {
    if (dataEntries.length < 1) {
      setHiddenBox(false);
    } else {
      setHiddenBox(true);
    }
  });

  return (
    <ThemeContext.Provider value={toggleDataBox}>
      <DataBoxWrap toggleDataBox={toggleDataBox} hiddenBox={hiddenBox}>
        <DataBoxShow
          onClick={handleToggle}
          toggleDataBox={toggleDataBox}
          hiddenBox={hiddenBox}
        >
          <DataBoxTitle>
            <h3>{dataTitle}</h3>
          </DataBoxTitle>
          <DataBoxContentWrap>
            {dataItems.map((dataItem, index) => {
              return (
                <DataBoxContent key={dataItem.id} index={index}>
                  <DataBoxSubHeading>
                    <p>{dataItem.dataHeading}</p>
                  </DataBoxSubHeading>
                  <h4>
                    {dataItem.dataQuantity}
                    <span>{dataItem.dataUnit}</span>
                  </h4>
                </DataBoxContent>
              );
            })}
          </DataBoxContentWrap>
        </DataBoxShow>
        {children && hiddenBox && (
          <DataBoxHidden toggleDataBox={toggleDataBox}>
            {children}
          </DataBoxHidden>
        )}
        {children && hiddenBox && (
          <DataBoxButton event={handleToggle} toggleDataBox={toggleDataBox} />
        )}
      </DataBoxWrap>
    </ThemeContext.Provider>
  );
};

export default DataBox;
