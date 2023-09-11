import { useEffect, useState } from "react";

// import "./App.css";

function App() {
  let [count, setCount] = useState(0);
  let [refresh, setRefresh] = useState(false);

  // useEffect(() => {}, []);

  // useEffect(() => {
  //   console.log("Component did mount");
  // }, []);

  // useEffect(() => {
  //   console.log("component did update");
  // }, [count]);

  useEffect(() => {
    console.log("component did mount");
  }, []);

  // useEffect(() => {
  //   console.log("component did update after update count");
  // }, [count]);

  // useEffect(() => {
  //   console.log("component did update after refresh");
  // }, [refresh]);

  // useEffect(() => {
  //   console.log("updating");
  // }, [count, refresh]);

  return (
    <>
      <h1>HELLO WORLD</h1>
      <button onClick={() => setCount(++count)}> {count} </button>
      <button onClick={() => setRefresh(!refresh)}> setRefresh </button>
    </>
  );
}

export default App;
