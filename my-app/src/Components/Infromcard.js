import React from "react";
import Mycard from "./Mycard";

function Infromcard({ name, surname, ...props }) {
  return (
    <div className="infromcardstyle">
      <h1>Hello , Sir fill ur infrom</h1>
      <p>
        <b>My name is a {name}</b>
      </p>
      <p>
        <b>My surname is a {surname}</b>
      </p>
      <p>
        <b>
          My Address :- <mark>{props.address}</mark>{" "}
        </b>
      </p>
      <img
        style={{ border: "3px solid black" }}
        src={props.image}
        alt={props.image - name}
      />
    </div>
  );
}

export default Infromcard;

// De-structure props and create component as example
