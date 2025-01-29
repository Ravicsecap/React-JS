import React from "react";

function Child2(props) {
  return (
    <div>
      Child Diplay ParentCountTOchild2:{props.parentCountTOchild2}
      <button onClick={props.changedata}>Upload App js Data</button>
    </div>
  );
}

export default Child2;
