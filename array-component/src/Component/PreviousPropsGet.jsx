import React, { useRef, useEffect } from "react";

const PreviousPropsGet = (props) => {
  let prevValue = useRef();
  useEffect(() => {
    prevValue.current = props.value;
  });

  let previousValues = prevValue.current;
  return (
    <div>
      <h1>PreviousPropsGet Value by useRef and useEffect Hook</h1>

      <h2>Current Value by previous props:{props.value}</h2>
      <h2>Previous Value by previous props:{previousValues}</h2>
    </div>
  );
};

export default PreviousPropsGet;

// Specification - perviousValue Get want to used useeffect useRef . props.item store inside useref current object .
// then display.
