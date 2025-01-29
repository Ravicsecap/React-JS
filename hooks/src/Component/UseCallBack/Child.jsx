import React from "react";
import { memo } from "react";

const Child = (props) => {
  console.log("Its My Child Component", props);
  return (
    <div>
      <h2>Child Component Value:{props.value} </h2>
    </div>
  );
};

export default memo(Child);
