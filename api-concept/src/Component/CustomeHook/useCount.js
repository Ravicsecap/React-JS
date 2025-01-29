import { useState } from "react";

const useCount = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return [count, increment, decrement];
};

export default useCount;



// Specification - Custom hook and  H.O.C HOOK - differnce if i used same function like login authtication function create every component that time used HOC component.
//  But If I Am Used Custom HoOk For Used For Only Same Logic Every Component That Time Used This Component. 
