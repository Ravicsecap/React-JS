import React from "react";
import useCount from "./useCount";

const CustomHook = () => {
  const [count, increment, decrement] = useCount(0);
  return (
    <div>
      <h2> My count value :{count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default CustomHook;
