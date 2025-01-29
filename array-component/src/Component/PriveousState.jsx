import React, { useState } from "react";

const PriveousState = () => {
  const [value, setValue] = useState(0);
  function updateValue() {
    // setValue((prev) => {
    //   //   console.log(prev);
    //   //   return value + 1;

    //   let randomvalue = Math.floor(Math.random() * 10);

    //   if (prev + randomvalue > 10) {
    //     console.log(`My Both Value  , ${prev} and ${randomvalue}`);
    //   }
    //   return randomvalue;
    // });

    for (let i = 0; i < 5; i++) {
      setValue((prev) => {
        return prev + 1;
      });
    }
  }
  return (
    <div>
      <h1>PriveousState Component How to Manage Previous Value.</h1>

      <h2>Counter Value :{value}</h2>
      <button onClick={updateValue}>Click Me</button>
    </div>
  );
};

export default PriveousState;

// Specification - If Want to perivous state that time setfunction take call back function and retrune then some value.
// if i regural loop use then its not work properly.. every time used call back function in setfuction and return.

