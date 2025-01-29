import React from "react";
import { useState } from "react";

function Conunter() {
  const [value, setValue] = useState(0);

  function addValue() {
    if (value <= 15) {
      setValue((prevValue) => prevValue + 1);
      setValue((prevValue) => prevValue + 1);
      // setValue((prevValue) => prevValue + 1);
      // setValue((prevValue) => prevValue + 1);
      // setValue((prevValue) => prevValue + 1);

      // setValue(prevValue =>value + 1);
      setValue(value + 1);
      // setValue(value + 1);
      // setValue(value + 1);
      // setValue(value + 1);
      // setValue(value + 1);
    }
  }

  function removeValue() {
    setValue(value - 1);
  }

 
  return (
    <div style={{ textAlign: "centre" }}>
      <h1>Display the Incrementvalue:{value}</h1>

      <button onClick={addValue} style={{ border: "2px solid black 5px" }}>
        Click Me
      </button>

      <h1>Display the Decrementvalue:{value}</h1>

      <button onClick={removeValue} style={{ border: "2px solid black 5px" }}>
        Click ME
      </button>
    </div>
  );
}

export default Conunter;
