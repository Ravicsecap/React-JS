import React from "react";
import { useParams } from "react-router-dom";

function Projectpara() {
  const projectparams = useParams();
  return (
    <div>
      <h1>Project is here using Params {projectparams.pojectname}</h1>
    </div>
  );
}

export default Projectpara;
