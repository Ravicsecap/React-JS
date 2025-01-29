import React from "react";
import HOC from "./HOC";

const ClickComponent = ({ value, increment }) => {
  return (
    <div>
      <h1>ClickComponent Concept of H.O.C :{value}</h1>

      <button onClick={increment}>Count Button</button>
    </div>
  );
};

export default HOC(ClickComponent);
