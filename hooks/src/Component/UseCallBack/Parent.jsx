import React from "react";
import Child from "./Child";
import { useState } from "react";
import { useCallback } from "react";

const Parent = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(2);

  const newData = useCallback(() => {
    console.log("Its is my Parent Component");
  }, [value]);
  return (
    <div>
      <h1>Parent Component </h1>

      <h3>My Parent Count :{count}</h3>
      <button onClick={() => setCount(count + 1)}>ClickMe</button>
      <Child value={value} newData={newData} />
      <button onClick={() => setValue(value * 2)}>Child Me</button>
    </div>
  );
};

export default Parent;

//Specification - UseCallcack And UseMemo Both are hook use for Appliction Optimazation.
 // - memo is Component its check only inside our compenent any change state that time allow rendering but otherwise stop the rendering , 
  // but little bit issue if any function creation cant understand bcus rect concept {REFECE EQUBLITNT}
  // Its mean if compenent render that time function also creat or recreation. 
  // That why we Are using USRCALLBACK hook , Its Take One Arrow Function And One Dependices When be Creation The function.
  
