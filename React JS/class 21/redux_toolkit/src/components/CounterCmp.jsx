import React, { useState } from "react";
import { useSelector } from "react-redux";

const CounterCmp = () => {
  const { count } = useSelector((state) => state.counterSlice);
  console.log(count, "counter");

  return (
    <div className="card">
      <button>count is {count}</button>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>
  );
};

export default CounterCmp;
