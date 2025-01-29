//  Hooks***********//
// Hooks :- when any action then something triggerd
// reactHooks :- rules
// one :- top the level hooks cant use the any loop,condtion and array
// two:- we cant not use javascript function
// mostly  useState :- variable change at re-rendring time but value retained
// useRfr :- when we want to referce state but if re-rendring then not change state
// useEffect :- when page rendring frist hook render useEffect
// example;-

import React, { useEffect, useRef, useState } from "react";

function Hooks() {
  const [counter, setCounter] = useState(0);
  const refercounter = useRef(0);
  let counterNormal = 0;

  useEffect(() => {
    console.log(`usestate , ${counter}`);
    console.log(`userfer, ${refercounter.current}`);
    console.log(`normal javascript , ${counterNormal}`);

    return () => {
      console.log("unmounted component");
    };
  }, [checkAllCounter]);

  function checkAllCounter() {
    setCounter(counter + 1);
    refercounter.current = refercounter.current + 1;
    counterNormal = counterNormal + 1;
  }

  return (
    <div>
      <p>{counter}</p>
      <button onClick={checkAllCounter}>Button</button>
    </div>
  );
}

export default Hooks;
