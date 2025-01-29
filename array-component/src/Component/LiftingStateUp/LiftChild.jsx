import React from "react";

const LiftChild = (props) => {
  let name = "Ravi Sahani";
  let emp = ["ravi", "kisna", "sina"];
  return (
    <div>
      <h2>LiftChild Component</h2>
      <button onClick={() => props.func(emp)}>Click Me</button>
    </div>
  );
};

export default LiftChild;
