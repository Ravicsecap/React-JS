import React from "react";
import { useRef } from "react";

const UseRef = () => {
  let mydata = useRef();
  function upDate() {
    console.log(mydata.current.value);
    mydata.current.focus();
  }
  console.log("rendering");

  return (
    <div>
      <h2>UseRef Hooks </h2>
      <input type="text" ref={mydata} />
      <button onClick={() => upDate()}>Click Me</button>
    </div>
  );
};

export default UseRef;
