//  useEffectHook => mount[making component] - update[use any hook] - unmount[go to other component]
// this  React life cycle.
// if useEffect take two arrugument => function and array = useEffect( ()=,{},[])
// if i am not pass array or nothing pass that time function called when mounted and re-rendering.
// if pass empty array [] only called when component mount
// we can use many time and retrun ()=>{unmounted component mostly clearinterval /cleartimeout}

import React, { useEffect, useState } from "react";

function UseEffectHook() {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState("");

  useEffect(() => {
    //     console.log(`counter update :-${counter}`);
    //   }); [WHEN MOUNT AND RE-RENDRING AND TRIGGED THIS FUNCTION]

    //     console.log(`counter update :-${counter}`);
    //   }, [] WHEN MOUNT TRIGGED NOT RE-RENDRING TIME);

    console.log(`counter update :-${counter}`);
  }, [counter]); //WHEN THIS ARRAY ELEMENT CHANGE FUNCTION TRIGGED
  
  useEffect(() => {
    console.log(`update when key :-${input}`);
    
    
    
    
    

  }, [input]);

  return (
    <div>
      <p>{counter}</p>
      <br />

      <input
        type="text "
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />

      <br />

      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default UseEffectHook;
