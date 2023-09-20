import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import AppRouting from "./Routing/AppRouting";
import NestedRouting from "./Routing/NestedRouting";

const App = () => {
  return (
    <>
      <Navbar />
      {/* <AppRouting /> */}
      <NestedRouting />
      <h1>FOOTER</h1>
    </>
  );
};

export default App;
