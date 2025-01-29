import React from "react";
import FristChild from "./FristChild";
import { useState } from "react";
import { createContext } from "react";

export const mydata = createContext();

const Main = () => {
  const [count, setCount] = useState(0);
  const [salary, setSalary] = useState(100);

  function salaryUpdation(val) {
    console.log("Updation");
    setSalary(val);
  }

  return (
    <mydata.Provider value={{ valuedata: count, getSalary: salaryUpdation }}>
      <div>
        <h2>Main Component</h2>
        <h2>Salary by SuperChild:{salary}</h2>

        <button onClick={() => setCount(count + 1)}>Click Me</button>

        <FristChild />
      </div>
    </mydata.Provider>
  );
};

export default Main;

//Specification - Usecontext hook use for parent companent to child or super super child data and also send child to super child to parent component send data.
// frist create context , then provider tag take to varivable as state value and second is function.
// super child to parent component to use function and variable.
