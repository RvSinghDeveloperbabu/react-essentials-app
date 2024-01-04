import TabButton from "./TabButton.jsx";
import { CONTENT } from "../data/testing_data.js";
import { useState } from "react";

export default function TabContents() {
  const [tabContent, setTabContent] = useState();

  function handleSelect(element) {
    setTabContent(CONTENT[element]);
    console.log(`${tabContent} - selected!`);
  }
  let tabContentData = <p>Please select the Content Topic.</p>;
  if (tabContent) {
    tabContentData = (
      <div id="tab-content">
        <h2>{tabContent.title}</h2>
        <p>{tabContent.description}</p>
      </div>
    );
  }

  return (
    <section id="example">
      <menu>
        <TabButton
          isSelected={
            tabContent && tabContent.title.toLowerCase() === "components"
          }
          onSelect={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={tabContent && tabContent.title.toLowerCase() === "jsx"}
          onSelect={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={tabContent && tabContent.title.toLowerCase() === "props"}
          onSelect={() => handleSelect("props")}
        >
          Porps
        </TabButton>
        <TabButton
          isSelected={tabContent && tabContent.title.toLowerCase() === "states"}
          onSelect={() => handleSelect("states")}
        >
          States
        </TabButton>
      </menu>
      {tabContentData}
    </section>
  );
}
