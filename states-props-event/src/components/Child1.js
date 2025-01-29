import { useState } from "react";
import React from "react";

/// HOW TO SIBLING BETWEEN PARENT DATA TRANSFER BY PROPS EXAMPLE
/// RULE ONE FRIST CHILD TO PARENT BUILD RLTN THEN PARENT TO ONTHER CHILD RLTN BUILD

function Child1(props) {
  const [countChild, setCountChild] = useState(0);

  function updateChildCount() {
    setCountChild(countChild + 1);
    props.updateParentvalue(countChild + 1);
  }

  return (
    <div>
      <p>Child Display countChild1:{countChild}</p>
      <button onClick={updateChildCount}>UPDAITION</button>
    </div>
  );
}

export default Child1;
