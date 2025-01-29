// import React, { useState } from "react";

// function Child1(props) {
//   const [childOneValue, setChildOneValue] = useState(0);

//   function updateChildone() {
//     setChildOneValue(childOneValue + 1);
//     props.parentCounter(childOneValue + 1);
//   }

//   return (
//     <div>
//       <h1>Display the Child One Value {childOneValue}</h1>
//       <br />
//       <button onClick={updateChildone}>Click</button>
//     </div>
//   );
// }

// export default Child1;

import React, { useCallback } from "react";
import Child2 from "./Child2";
import { useState } from "react";
import { useEffect } from "react";

const Child1 = () => {
  const [value, setValue] = useState(0);
  const [count, setCount] = useState(2);

  console.log("Child 1 Component");
  const van = useCallback (
    function upDation() {
      console.log("child 2");
    },
    [count]
  );
  return (
    <div>
      <h1> Child 1 Component </h1>
      <h2>Child 1 value:{value}</h2>
      <button onClick={() => setValue(value + 1)}>Click Me</button>
      <br /> <br />
      <button onClick={() => setCount(count * 2)}>Click Me</button>
      <Child2 count={count} function={van} />
    </div>
  );
};

export default Child1;
