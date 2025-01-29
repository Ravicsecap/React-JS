import React, { forwardRef } from "react";

const ChildFrowardRef = (props, prop) => {
  return (
    <div>
      <input type="text" ref={prop} />
      <h1>ChildFrowardRef Component</h1>
    </div>
  );
};

export default forwardRef(ChildFrowardRef);
