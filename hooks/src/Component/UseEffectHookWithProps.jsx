import React, { useEffect } from "react";

function UseEffectHookWithProps(props) {
  useEffect(() => {
    console.log(`UseEffect Hook In React With Props`, props);
  });
  return (
    <div>
      <h1> UseEffectHookWithProps</h1>

      <h2>My Count Value : {props.data}</h2>
    </div>
  );
}

export default UseEffectHookWithProps;
