import React, { useEffect, useState } from "react";

function UseEffectHook() {
  useEffect(() => {
    console.log(`UseEffect Hook In React`);
  });

  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>UseEffect Hook Method </h1>

      <h2>Right Now My Count Value : {count}</h2>
      {/* <button onClick={() => setCount(1)}>Click Me</button> */}
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

export default UseEffectHook;

//Specification - UseEffect Hook Use For Check For React Life Cycle Method.
  // - UseEffect Hook Its Take only Arrow Fuction 
  // - UseEffect Hook When Call Then New Component Mount , Then State or Props Updating and Component Will Unmount. 
