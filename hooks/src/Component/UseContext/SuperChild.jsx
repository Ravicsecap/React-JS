import React from "react";
import { useContext } from "react";
import { mydata } from "./Main";

const SuperChild = () => {
  const { valuedata, getSalary } = useContext(mydata);
  const salary = 5000;

  return (
    <div>
      <h2>SuperChild Component:{valuedata}</h2>
      <button onClick={() => getSalary(salary)}>Salary</button>
    </div>
  );
};

export default SuperChild;
