import { Button } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

// const ChildrenExample = ({ children }) => {
//   console.log("children", children);
//   return (
//     <div>
//       {/* <h1>HELLO WORLD</h1>
//       <h1>CHILDREN </h1>
//       <Button variant="contained">CHILD 1</Button> */}

//       {children}
//     </div>
//   );
// };

const ChildrenExample = ({ children }) => {
  console.log("children", children);
  return (
    <div>
      <h1>CHILD EXAMPLE</h1>
      <Outlet />
    </div>
  );
};

export default ChildrenExample;
