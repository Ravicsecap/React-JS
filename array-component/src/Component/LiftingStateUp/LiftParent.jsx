import React from "react";
import LiftChild from "./LiftChild";

const LiftParent = () => {
  function childToParent(e) {
    // console.log(e);
    alert(`hello , ${e}`);
  }
  return (
    <div>
      <h1>LiftParent Component</h1>

      <LiftChild func={childToParent} />
    </div>
  );
};

export default LiftParent;


// Specifictation - LiftToStateUp mean child to Parent data send.
// Prarent Component - create function one parameter.
// by props send child component as function 
// Child Component create normal data and create button and Arrow function inside data name.
// ex = <button onclick={()=>props.func(empname)}>CLICK</button>