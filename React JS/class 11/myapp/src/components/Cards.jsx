import React, { useEffect } from "react";

const Cards = () => {
  useEffect(() => {
    console.log("card component create");

    return () => {
      console.log("component unmount");
      // timerStop
      // cancelAPICANCEL
    };
  }, []);

  return (
    <div>
      <h1>CARDS</h1>
    </div>
  );
};

export default Cards;
