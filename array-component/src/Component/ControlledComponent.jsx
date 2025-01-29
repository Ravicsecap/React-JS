import React, { useState } from "react";

const ControlledComponent = () => {
  //   const [value, setValue] = useState("Hello");
  const [value, setValue] = useState();
  return (
    <div>
      <h1>ControlledComponent Its Mean useState Hook</h1>

      <h2>My Target Value :{value}</h2>

      {/* <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      /> */}

      <input
        type="text"
        defaultValue={"Hi,"} // its important 
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default ControlledComponent;


//Specification - Controlled Component mean we cant target directly dom. like used detElementbyId or Class, in React useRef Hook.
// - input filled is must be controlled or uncontrolled component.
// e mean event object.
// two default value show input feild frisr useState hook inside value other wise input tag write defualtValue={"value-name"}