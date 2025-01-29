import React from "react";

function ChildOne(props) {
  return (
    <div>
      <h1>ChildOne</h1>
      <button onClick={() => props.getdata()}>clcik 1</button>
    </div>
  );
}

export default ChildOne;

// if i want to same content want that time use normal props.method-name , 2) ()=> props.methodName()
