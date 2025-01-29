import "./App.css";
import React from "react";
// import FromUseRef from "./component/FromUseRef";
// import ListReact from "./component/ListReact";
// import ListbyProps from "./component/ListbyProps";
// import Datatype from "./component/Datatype";
// import Mount from "./component/Mount";
// import Conunter from "./component/Conunter";

// import CompandProps from "./component/CompandProps";
// import PassProps from "./component/PassProps";
// import State from "./component/State";
// import { useState } from "react";
import Child1 from "./component/Child1";

// import ClaasComponent from "./component/ClaasComponent";
// import JSX from "./component/JSX";

function App() {
  // const [parentValue, setParentValue] = useState(0);

  // function updateParent(parentValue) {
  //   setParentValue(parentValue);
  // }

  // let shoroom_open = true;
  return (
    <div>
      {/* <Conunter /> */}

      {/* <Mount /> */}
      {/* <Newcomp n /> */}
      {/* <Datatype /> */}
      {/* <CompandProps name="Ravi" suranme="sahani" add="ramji gupta chwal" />
      <PassProps name="ashish" email="rihansahani1996@gmail.com" /> */}
      {/* <State /> */}

      {/* <h1> Display the Parent Value {parentValue}</h1>
      

      {/* {shoroom_open && <p>Yes , Shor is open </p>} */}

      {/* <ListReact />
      <ListbyProps /> */}

      {/* <FromUseRef /> */}

      {/* <ClassComponent /> */}

      {/* <JSX /> */}

      <Child1 />
    </div>
  );
}

// const Newcomp = (p) =>
//   React.createElement(`'div',{},hello my name is ${p.name}`);
export default App;
