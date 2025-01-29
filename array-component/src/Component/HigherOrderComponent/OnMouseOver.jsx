import React from "react";
import HOC from "./HOC";

const OnMouseOver = ({ value, increment }) => {
  return (
    <div>
      <h2>OnMouseOver Concept of H.O.C Value :{value}</h2>

      <button onMouseOver={increment}>Mouse Button</button>
    </div>
  );
};

export default HOC(OnMouseOver);
