import React, { useState } from "react";

function State() {
  const [fruit, setfruit] = useState("Apple");

  const [writeFruit, setWriteFruit] = useState("");

  function updatefruit() {
    setfruit(writeFruit);
  }

  function writefruitname(e) {
    setWriteFruit(e.target.value);
  }
  return (
    <>
      <h1>Display intital value {fruit}</h1>

      <input type="text" onChange={writefruitname} />

      <br />

      <button onClick={updatefruit}>Click Me</button>
    </>
  );
}

export default State;
