import React, { useMemo } from "react";
import { useState } from "react";

function UseMemoHook() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(2);

  const memofeature = useMemo(
    function countFeature() {
      console.log("Only called Count State ");

      return count * 2;
    },
    [count]
  );
  return (
    <div>
      <h1> UseMemoHook Concept</h1>
      <h2>My Count:{count}</h2>
      {/* <h3>My countFeature Method : {countFeature()}</h3> */}
      <h3>My countFeature Method : {memofeature}</h3>
      <button onClick={() => setCount(1)}>Count Button</button>
      <h2>My Value:{value}</h2>
      <button onClick={() => setValue(value + 1)}>Count Button</button>
    </div>
  );
}

export default UseMemoHook;
