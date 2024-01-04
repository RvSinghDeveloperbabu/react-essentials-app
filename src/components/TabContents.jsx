import TabButton from "./TabButton.jsx";
import { CONTENT } from "../data/testing_data.js";
import Section from "../components/Section.jsx";
import { useState } from "react";
import Tabs from "./Tabs.jsx";

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
    <Section id="example" title="TabButton Section">
      <Tabs
        buttonsContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={
                tabContent && tabContent.title.toLowerCase() === "components"
              }
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={
                tabContent && tabContent.title.toLowerCase() === "jsx"
              }
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={
                tabContent && tabContent.title.toLowerCase() === "props"
              }
              onClick={() => handleSelect("props")}
            >
              Porps
            </TabButton>
            <TabButton
              isSelected={
                tabContent && tabContent.title.toLowerCase() === "states"
              }
              onClick={() => handleSelect("states")}
            >
              States
            </TabButton>
          </>
        }
      >
        {tabContentData}
      </Tabs>
    </Section>
  );
}
