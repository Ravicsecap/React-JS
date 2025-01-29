import React from "react";
import CompandProps from "./CompandProps";
function PassProps({ name, ...props }) {
  return (
    <div>
      <h1>My name is {name}</h1>

      <p>My email is {props.email}</p>
    </div>
  );
}

export default PassProps;
