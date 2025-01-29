import React from "react";

function PropsInFunctionComponent(props) {
  return (
    <div>
      <h1>My name is A {props.name}</h1>
      {/* {/* <h1>My surname is a {props.surname}</h1> */}
      <br />
      <h1>My name is a {props.name}</h1>
      <h2>My surname is a {props.surname}</h2>
      <h3>My salary is a {props.other.salary}</h3>
      <h3>My Address is a {props.other.add}</h3>
    </div>
  );
}

export default PropsInFunctionComponent;
