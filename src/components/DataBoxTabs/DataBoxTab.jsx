import React, { useState } from "react";
import {
  DataBoxTabContainer,
  DataTabContainer,
  DataTabItem,
  DataPanelContainer,
  DataPanelItem,
} from "components/DataBoxTabs/DataBoxTabStyles";
import DataPanel from "components/DataBoxPanels/DataPanel";
import HoldingsPanel from "components/DataBoxPanels/HoldingsPanel";
import IntelligencePanel from "components/DataBoxPanels/IntelligencePanel";
import { databoxTabs } from "data/databoxTab";


const DataBoxTab = () => {
  const [toggleTab, setToggleTab] = useState(0);

  const handleToggleTab = (index) => {
    setToggleTab(index);
  };

  return (
    <DataBoxTabContainer>
      <DataTabContainer>
        {databoxTabs.map((databoxTab, index) => {
          return (
            <DataTabItem
              key={databoxTab.id}
              onClick={() => handleToggleTab(index)}
              index={index}
              toggleTab={toggleTab}
            >
              {databoxTab.tabTitle}
            </DataTabItem>
          );
        })}
      </DataTabContainer>
      <DataPanelContainer>
        <DataPanelItem toggleTab={toggleTab} index={0}>
          <DataPanel />
        </DataPanelItem>
        <DataPanelItem toggleTab={toggleTab} index={1}>
          <IntelligencePanel />
        </DataPanelItem>
        <DataPanelItem toggleTab={toggleTab} index={2}>
          <HoldingsPanel />
        </DataPanelItem>
      </DataPanelContainer>
    </DataBoxTabContainer>
  );
};

export default DataBoxTab;
