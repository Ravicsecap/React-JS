import "./App.css";
// import { useState } from "react";

// import Constructor from "./Component/Constructor";

// import Rendering from "./Component/Rendering";

// function App() {
//   const [name, setName] = useState("Ashsish");
//   return (
//     <div className="App">
//       {/* <Constructor /> */}

//       <Rendering data={name} />
//       <button onClick={() => setName("Suraj")}>Click Me</button>
//     </div>
//   );
// }

// export default App;

// import ComponentDidMount from "./Component/ComponentDidMount";

// import ComponentDidUpdate from "./Component/ComponentDidUpdate";

// import ShouldComponent from "./Component/ShouldComponent";

// import GetSnapShotBefore from "./Component/GetSnapShotBefore";

import React from "react";

import ComponentWillUnmount from "./Component/ComponentWillMount/ComponentWillUnMount";

function App() {
  // const [name, setName] = useState("Ravi");

  return (
    <div>
      {/* <ComponentDidMount /> */}

      {/* <ComponentDidUpdate /> */}

      {/* <ShouldComponent /> */}

      {/* <GetSnapShotBefore data={name} /> */}

      {/* <GetSnapShotBefore /> */}
      {/* <button onClick={() => setName("Ashish")}>Click Me</button> */}

      <ComponentWillUnmount />
    </div>
  );
}

export default App;

// Specification - parent component class or functional its ok but child component mendotary class component.
// - child component inside componentWillUnmount method write.
// - ComponentWillUnmount component one time call then will be unmounted otherwise its remove at DOM Branch if update props or states.
