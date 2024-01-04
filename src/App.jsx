import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CONTENT } from "./data/testing_data.js";

import TabButton from "./components/TabButton.jsx";
import DetailsOfEnvironments from "./components/DetailsOfEnvironments.jsx";

const rendomWorkds = ["Development", "Testing", "Production"];

const getRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
};

function App() {
  const [count, setCount] = useState(0);
  const [tabContent, setTabContent] = useState();

  function handleSelect(element) {
    setTabContent(CONTENT[element]);
    console.log(`${tabContent} - selected!`);
  }

  const environment = rendomWorkds[getRandomNumber(rendomWorkds.length)];

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
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React!!!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <p>The Application is running in {environment} Environment.</p>
        <DetailsOfEnvironments />
      </div>
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
            isSelected={
              tabContent && tabContent.title.toLowerCase() === "props"
            }
            onSelect={() => handleSelect("props")}
          >
            Porps
          </TabButton>
          <TabButton
            isSelected={
              tabContent && tabContent.title.toLowerCase() === "states"
            }
            onSelect={() => handleSelect("states")}
          >
            States
          </TabButton>
        </menu>
        {tabContentData}
      </section>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
