import React from "react";


function Mycard() {
  return (
    <div>
      <p>My name is a {props.name} </p>
      <pre> Email:- {props.email}</pre>
      <img src={props.image} alt={props.image - name} />
    </div>
  );
}

export default Mycard;

///    COMPONENT AND PROPS
/// There are two types of componenet companent as function of j.s ,, 1) functional component ,2) Class component
/// component name first letter CAPS and create user-defined component
/// props take input ...props like spred operator
// example :- component (functional component)
