// Dependency Imports
import React from "react";
import { GlobalStyles, Main } from "styles/GlobalStyles";
import DataBoxTab from "components/DataBoxTabs/DataBoxTab";

function App() {
  return (
    <Main>
      <GlobalStyles />
      <DataBoxTab />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
        amet obcaecati rerum dolor! Omnis repellendus fugiat reprehenderit sed
        laudantium, nihil porro inventore eligendi voluptatem cum ullam
        excepturi illo id laboriosam!
      </p>
    </Main>
  );
}

export default App;
