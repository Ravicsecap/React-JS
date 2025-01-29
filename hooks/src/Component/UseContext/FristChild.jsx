import React from "react";
import SuperChild from "./SuperChild";
import { useContext } from "react";
import { mydata } from "./Main";

const FristChild = () => {
  const { valuedata } = useContext(mydata);
  return (
    <div>
      <h2> FristChild Component:{valuedata}</h2>

      <SuperChild />
    </div>
  );
};

export default FristChild;
