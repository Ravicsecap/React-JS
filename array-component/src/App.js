import "./App.css";
// import ArrayList from "./Component/ArrayList";

// import ArrayListBootstrap from "./Component/ArrayListBootstrap";

// import NestedArray from "./Component/NestedArray";

// import ArrayParent from "./Component/ArrayListProps/ArrayParent";

// import LiftParent from "./Component/LiftingStateUp/LiftParent";

// import ControlledComponent from "./Component/ControlledComponent";

// import UncontrolledComponent from "./Component/UncontrolledComponent";

// import UseReducerHook from "./Component/UseReducerHook";

// import ClickComponent from "./Component/HigherOrderComponent/ClickComponent";
// import OnMouseOver from "./Component/HigherOrderComponent/OnMouseOver";

// import PriveousState from "./Component/PriveousState";
// function App() {
// return (
// <div>
// {
/* <ArrayList /> */
// }

// {
//   /* <ArrayListBootstrap /> */
// }

// {
//   /* <NestedArray /> */
// }

// {
//   /* <ArrayParent /> */
// }

// {
//   /* <LiftParent /> */
// }

// {
//   /* <ControlledComponent /> */
// }

// {
//   /* <UncontrolledComponent /> */
// }

// {
//   /* <UseReducerHook /> */
// }

// {
//   /* <ClickComponent /> */
// }
// {
//   /* <OnMouseOver /> */
// }

// {
//   /* <PriveousState /> */
// }
// </div>
// );
// }

// export default App;

// import React from "react";
// import { useState } from "react";
// import PreviousPropsGet from "./Component/PreviousPropsGet";

// function App() {
//   const [value, setValue] = useState(0);
//   function updateValue() {
//     let randomvalue = Math.floor(Math.random() * 10);
//     setValue(randomvalue);

//   }
//   return (
//     <div>
//       <PreviousPropsGet value={value} func={updateValue} />
//       <button onClick={updateValue}>Click me</button>
//     </div>
//   );
// }

// export default App;

import React from "react";
// import StateWithObject from "./Component/StateWithObject";

import CodeSpliting from "./Component/CodeSplitingLazySuspens/CodeSpliting";
const App = () => {
  return (
    <div>
      <h1>App js File</h1>

      {/* <StateWithObject /> */}

      <CodeSpliting />
    </div>
  );
};

export default App;
