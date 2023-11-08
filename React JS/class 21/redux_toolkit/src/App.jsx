import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CounterCmp from "./components/CounterCmp";
import { addCounter } from "./store/slices/counterSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const updatecounter = () => {
    console.log("updatecounter");
    dispatch(addCounter("JAFFAR AMAN"));
  };

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <CounterCmp />

      <button onClick={updatecounter}>ADD COUNTER</button>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
        </p> */}
    </>
  );
}

export default App;

// https://excalidraw.com/#json=4lQBUtg9KG9zM6eS3DnMG,v79_hnH8bnQNJ_MoDfdU4w
