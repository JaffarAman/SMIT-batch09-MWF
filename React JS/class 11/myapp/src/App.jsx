import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cards from "./components/Cards";

function App() {
  let [count, setCount] = useState(0);
  let [toggle, setToggle] = useState(true);

  // useEffect(() => {
  //   console.log("component mount");
  // }, []);

  // useEffect(() => {
  //   console.log("component updates");
  // }, [count]);

  // useEffect(() => {
  //   console.log("component any update");
  // });

  // useEffect(() => {
  //   return () => {
  //     console.log("component unmount");
  //   };
  // }, []);
  // let data = undefined;
  const [data, setData] = useState([]);

  const callProductApi = () => {
    console.log("callProductApi");

    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    callProductApi();
  }, []);

  return (
    <>
      <h1>HELLO WORLD {count} </h1>
      {/* <button onClick={() => setCount(++count)}> COUNT</button> */}

      {/* <button onClick={() => setToggle(!toggle)}>
        {" "}
        TOggle: {toggle ? "true" : "false"}
      </button> */}
      {/* <button onClick={() => setToggle(!toggle)}>
        {toggle ? "Hide Card" : "SHOW CARD"}
      </button>
      {toggle ? <Cards /> : null} */}

      {data.map((products, index) => {
        console.log(products);
        return (
          <div key={products.id}>
            <img src={products.image} width={"250"} height={"250"} alt="" />
            <p>{products.title}</p>
            <p>price: {products.price} </p>
          </div>
        );
      })}
    </>
  );
}

export default App;
