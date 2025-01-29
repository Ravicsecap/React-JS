import React, { useState } from "react";

function Mount() {
  const [value, setValue] = useState(1);

  //   let Multiplyvalue = value * 5;
  const [Multiplyvalue, setMultiplyvalue] = useState(1);

  function multiMethod() {
    setValue(value + 1);
    setMultiplyvalue(value * 5);
    // console.log(Math.round * 10);
  }

  return (
    <div>
      <h1>Value:{value}</h1>
      <button onClick={multiMethod}>CLICK ME</button>
      <h1>Multifly VALUE :{Multiplyvalue}</h1>
    </div>
  );
}

export default Mount;
