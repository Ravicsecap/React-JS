import React from "react";
import { memo } from "react";

function Child2(props) {
  console.log("Child 2 Component");

  return (
    <div>
      <h1>Child 2 Component</h1>
      <h2>Child 2 value:{props.count}</h2>
    </div>
  );
}

export default memo(Child2);
