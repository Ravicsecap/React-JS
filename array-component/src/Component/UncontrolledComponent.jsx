import React, { useRef, useState } from "react";

const UncontrolledComponent = () => {
  //   let mydata = useRef(null);
  const [value, setValue] = useState();

  function noRender(e) {
    e.preventDefault();
      console.log(mydata.current.value);
      let val = document.getElementById("myid").value;
      console.log(val);
  }

  console.log("rander");
  return (
    <div>
      <h1>UncontrolledComponent By useRef , getID OR getClass</h1>

      <h3>My value is :{value}</h3>

      <from>
        <input type="text" id="myid" />
        <br /> <br />
        <input type="text" ref={mydata} />
        <br /> <br />
        <input
          type="text"
          defaultValue={"hello"}
          onChange={(e) => setValue(e.target.value)}
        />
        <br /> <br />
        <button onClick={noRender}>Click</button>
      </from>
    </div>
  );
};

export default UncontrolledComponent;

// Specification - Inside One Component Use state or ref that time They are Uncontrolled Component.
