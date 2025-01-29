import React from "react";
import { useParams } from "react-router-dom";

function Profitepara() {
  const profileparams = useParams();

  return (
    <div>
      <h1>Profile is here using Prams {`${profileparams.profilei}`}</h1>
    </div>
  );
}

export default Profitepara;
