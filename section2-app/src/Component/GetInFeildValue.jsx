import React from "react";
import { useState } from "react";

function GetInFeildValue() {
  // const [printValue, setprintValue] = useState("");
  // const [input, setInput] = useState("Apple");
  const [input, setInput] = useState(null);
  const [printValue, setprintValue] = useState(false);

  function getInput(e) {
    setInput(e.target.value);
    setprintValue(false);
  }

  function submitValue() {
    setprintValue(true);
  }
  //   function updateValue(e) {
  //     const updatevalue = e.target.value;
  //     setprintValue(updatevalue);
  //   }

  return (
    <div>
      {printValue ? <h1>Every key change Value {input}</h1> : null}
      <input type="text" onChange={getInput} />
      <button onClick={submitValue}>click</button>
    </div>
  );
}

export default GetInFeildValue;
