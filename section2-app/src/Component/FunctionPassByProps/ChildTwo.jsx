import React from "react";

function ChildTwo(props) {
  return (
    <div>
      <h1>ChildTwo</h1>
      {/* <button onClick={props.getdata}>click2 </button> */}
      <button onClick={() => props.getdata()}>click2 </button>
    </div>
  );
}

export default ChildTwo;
