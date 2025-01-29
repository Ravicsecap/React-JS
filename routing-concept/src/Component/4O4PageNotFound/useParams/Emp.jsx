import React from "react";
import { useParams } from "react-router-dom";

const Emp = () => {
  const { name, age } = useParams();
  return (
    <div>
      <h1>
        {name} is a Emp and my age is a {age} years old
      </h1>
    </div>
  );
};

export default Emp;
