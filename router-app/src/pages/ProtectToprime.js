/// protected react mean some people cant access or show this pages bcus he was not subscribe
/// thats y use protect route
// there parent inside component some logic to protect
// Navigate to="" jsx
// if i want to navigate inside jsx then use <Navigate to ={''} />
// if want to component inside the use useNavigate() hook.

import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectToprime() {
  
  const isLoggedIn = false;
  return <div>{isLoggedIn ? <Outlet /> : <Navigate to={"*"} />}</div>;
}

export default ProtectToprime;
