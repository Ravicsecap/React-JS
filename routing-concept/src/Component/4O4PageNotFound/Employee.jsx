import React from "react";
import {  useParams } from "react-router-dom";

const Employee = () => {
  const { name, age } = useParams();
  return (
    <div>
      <h1>
        My name is {name} and i am a {age} years old
      </h1>
    </div>
  );
};

export default Employee;
