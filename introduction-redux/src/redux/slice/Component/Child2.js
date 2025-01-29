import React from "react";
import { useSelector } from "react-redux";

function Child2() {
  // :messageslice   // also then one name bcus export default messageSlice reducer
  const message = useSelector((state) => state.messageReducer.message);
  return <div>the data from chlid one:{message}</div>;
}

export default Child2;
