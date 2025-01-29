import React from "react";
import { useLocation } from "react-router-dom";

const Page2 = () => {
  const location1 = useLocation();
  console.log(location1);
  return <div>Page2</div>;
};

export default Page2;
