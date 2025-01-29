import React from "react";
import { useSearchParams } from "react-router-dom";
const UseSerachParam = () => {
  const [search, setSearch] = useSearchParams();

  const myData = search.get("name");
  const myAge = search.get("age");
  return (
    <div>
      <h1>
        My name is a {myData} and my age is a {myAge}
        <br />
        <button onClick={() => setSearch({ name: "ravi sahani", age: 28 })}>
          Set Qurey Param
        </button>
      </h1>
    </div>
  );
};

export default UseSerachParam;


//Specification - useSearchParam hook is router hook same as useState hook. and then get('varibale name').
// its used for qureyParam get 
// seacond use for button click used for  
