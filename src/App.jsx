import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {ENVIRONMENT_DATA} from  "./data/testing_data.js"

const rendomWorkds = ["Development", "Testing", "Production"];

const getRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
};

function DetialsOfEnvironment(props) {
  return (
    <li>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </li>
  );
}

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
          {ENVIRONMENT_DATA.map((data)=>{
            return (<DetialsOfEnvironment
            title={data.title}
            description={data.description}
          />)
          })}
          {/* <DetialsOfEnvironment
            title="Testing"
            description="it is used to test the application with test cases."
          />
          <DetialsOfEnvironment
            title="Production"
            description="it is used where application is live and used by clients or real users."
          />
          <DetialsOfEnvironment
            title="Development"
            description="it is used to build the application by the developer."
          /> */}
        </ul>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
