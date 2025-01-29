import React, { useState } from "react";

function Datatype() {
  //   const [value, setValue] = useState(1);

  const [value, setValue] = useState({
    a: 1,
  });
  //   console.log("logged");

  function renderFunc() {
    // setValue(value + 1);
    console.log(Math.random() * 10 + 1);

    // setValue(3);

    setValue({
      a: 1,
    });
  }

  return (
    <div>
      <h1>render value:{value.a}</h1>
      <button onClick={renderFunc}>Click</button>
    </div>
  );
}

export default Datatype;
