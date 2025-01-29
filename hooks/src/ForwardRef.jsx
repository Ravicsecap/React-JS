import React, { useRef } from "react";
import ChildFrowardRef from "./Component/ChildFrowardRef";

const ForwardRef = () => {
  let mydata = useRef();

  function updateFunction() {
    mydata.current.value = "Ravishekhar";
    mydata.current.style.backgroundColor = "blue";
  }

  return (
    <div>
      <h1>ForwardRef Compnonet </h1>

      <button onClick={() => updateFunction()}>Click Me</button>

      <ChildFrowardRef ref={mydata} />
    </div>
  );
};

export default ForwardRef;
