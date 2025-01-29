import React from "react";
import PassProps from "./PassProps";

function CompandProps({ name, suranme, ...props }) {
  return (
    <div>
      <h1>
        hello my name is {name} {suranme}
        <br />
        My Add:-{props.add}
        My email is {props.email}
      </h1>
    </div>
  );
}

export default CompandProps;
