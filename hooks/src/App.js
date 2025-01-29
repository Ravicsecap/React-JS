import "./App.css";

// import Hook from "./Component/Hook";

// import UseEffectHook from "./Component/UseEffectHook";

// import UseEffectHookWithProps from "./Component/UseEffectHookWithProps";

// import { useState } from "react";
// function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <div className="App">
//       {/* <Hook /> */}

//       {/* <UseEffectHook /> */}

//       <UseEffectHookWithProps data={count} />
//       <button onClick={() => setCount(count + 1)}>Click Me</button>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import { useState } from "react";
// import ConditionalUseEffect from "./ConditionalUseEffect";

// function App() {
//   const [age, setAge] = useState(22);
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <h1>App.js</h1>

//       <ConditionalUseEffect age={age} count={count} />
//       <button onClick={() => setAge(age + 1)}>Age</button>
//       <button onClick={() => setCount(count + 1)}>Count</button>
//     </div>
//   );
// }

// export default App;

// import React, { PureComponent } from "react";
// import PureComonent from "./Component/PureComonent";

// export class App extends PureComponent {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//   }
//   render() {
//     console.log(`Component Rendering`);

//     return (
//       <div>
//         <h1>Pure Component </h1>

//         <PureComonent data={this.state.count} />

//         <button onClick={() => this.setState({ count: 1 })}>Click Me</button>
//       </div>
//     );
//   }
// }

// export default App;

// import React from "react";
// import UseMemoHook from "./Component/UseMemoHook";
// function App() {
//   return (
//     <div>
//       <UseMemoHook />
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import Parent from "./Component/UseCallBack/Parent";

// function App() {
//   return (
//     <div>
//       <h1>App Component</h1>
//       <Parent />
//     </div>
//   );
// }

// export default App;

import React from "react";
// import Main from "./Component/UseContext/Main";

// import UseRef from "./Component/UseRef";

import ForwardRef from "./ForwardRef";

function App() {
  return (
    <div>
      <h1>App Js File</h1>

      {/* <Main /> */}

      {/* <UseRef /> */}

      <ForwardRef />
    </div>
  );
}

export default App;
