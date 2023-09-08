import React from "react";

const Button = (props) => {
  const { title, customClass, clickTrigger } = props;

  return (
    <button
      className={`border bg-cyan-400 mx-3 
  border-gray-950	
   px-3 py-1 w-24
   transition-all	
   hover:bg-cyan-700
     hover:rounded-lg ${customClass} `}
      onClick={clickTrigger}
    >
      {" "}
      {title || "Button"}{" "}
    </button>
  );
};

export default Button;
