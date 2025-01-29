import React from "react";
import { useReducer } from "react";

const intialstate = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    default:
      return state;
  }
};

const UseReducerHook = () => {
  const [count, dispatch] = useReducer(reducer, intialstate);
  return (
    <div>
      <h1>UseReducerHook Component</h1>

      <h2> My recent Value :{count}</h2>

      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Increment</button>
    </div>
  );
};

export default UseReducerHook;

// Specification - Usereducer use for complex state managment.

