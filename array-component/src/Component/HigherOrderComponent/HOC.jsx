import React from "react";
import { useState } from "react";

const HOC = (Component1) => {
  const Component2 = () => {
    const [value, setValue] = useState(0);
    function upDateValue() {
      setValue(value + 1);
    }
    return <Component1 value={value} increment={upDateValue} />;
  };

  return Component2;
};

export default HOC;


// Specification - Higher order Component is a take a component as parameter and return also as a component.
   // its use for avoid DryPrinciple (avoid ur repeting code).
   // mainly work if want to same work as three component that time use H.O.C Component.
