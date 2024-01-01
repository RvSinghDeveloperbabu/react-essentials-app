import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ENVIRONMENT_DATA } from "./data/testing_data.js";
import DetailsOfEnvironment from "./components/DetailsOfEnvironment";
import TabButton from "./components/TabButton.jsx";

const rendomWorkds = ["Development", "Testing", "Production"];

const getRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
};

function App() {
  const [count, setCount] = useState(0);

  const environment = rendomWorkds[getRandomNumber(rendomWorkds.length)];
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
        <ul>
          {ENVIRONMENT_DATA.map((data) => {
            // if your component props are similler to the data keys we can us this way as well.
            return <DetailsOfEnvironment {...data} />;
          })}
          {/* <DetailsOfEnvironment
            title="Testing"
            description="it is used to test the application with test cases."
          />
          <DetailsOfEnvironment
            title="Production"
            description="it is used where application is live and used by clients or real users."
          />
          <DetailsOfEnvironment
            title="Development"
            description="it is used to build the application by the developer."
          /> */}
        </ul>
      </div>
      <section id="example">
        <menu>
          <TabButton>Context</TabButton>
        </menu>
      </section>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
