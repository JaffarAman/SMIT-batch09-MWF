import { useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navbar } from "./components";
import { useDispatch } from "react-redux";
import { addCounter } from "./store/slices/counterSlice";

function App() {
  let [count, setCount] = useState([]);
  let [dummyState, setDummyState] = useState({});

  const dispatch = useDispatch();
  const changeCountValue = () => {
    dispatch(addCounter());
  };

  console.log("app");
  return (
    <>
      <h1>PARENT COMPONENT</h1>
      <Navbar />

      <button onClick={changeCountValue}>add count</button>
    </>
  );
}

export default App;
