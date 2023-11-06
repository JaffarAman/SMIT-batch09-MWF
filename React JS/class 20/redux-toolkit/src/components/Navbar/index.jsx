import React, { memo } from "react";
import { useSelector } from "react-redux";

const Navbar = ({ dummyState }) => {
  console.log("Navbar console", dummyState);
  const { count } = useSelector((state) => state.counterSlice);

  return (
    <div>
      <h1>NAVBAR</h1>
      count: {count}
    </div>
  );
};

// export default memo(Navbar);
export default Navbar;
