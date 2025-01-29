import React from "react";
import { useState } from "react";

function ShowHideToggleButton() {
  const [input, setInput] = useState(true);

  return (
    <div>
      <h1>ShowHideToggleButton</h1>
      {input ? <h2>Hello , I am Here.....</h2> : null}

      <br />

      <button onClick={() => setInput(!input)}>Toggle</button>
      <br />
      <button style={{ marginBlock: "20px" }} onClick={() => setInput(false)}>
        Hide
      </button>
      <button style={{ margin: "20px" }} onClick={() => setInput(true)}>
        Show
      </button>
    </div>
  );
}

export default ShowHideToggleButton;
