// import logo from './logo.svg';

import Counter from "./components/Counter";
// import Fruits from "./components/Counter";
// import Notes from "./components/Notes";
// import SingleNotes from "./components/SingleNotes";

// import { useState } from "react";
// import Child1 from "./components/Child1";
// import Child2 from "./components/Child2";

// import UserFrom from "./forms and hooks/UserFrom";

// import Hooks from "./components/Hooks";
// import UseEffectHook from "./forms and hooks/UseEffectHook";
function App() {
  // const [countInParent, setCountInParent] = useState(0);
  // function updateParentcount(countInParent) {
  //   setCountInParent(countInParent);
  // }

  // function uploadAppjsData() {
  //   console.log("Parentchange the data by  child 2 ");

  return (
    <div>
      <h1>
        <Counter />
      </h1>
      <h1>
        <Fruits />
      </h1>
      <Notes />
      <SingleNotes />

      {/* <p>Display parent counter:{countInParent}</p>
      <Child1 updateParentvalue={updateParentcount} />
      <Child2
        parentCountTOchild2={countInParent}
        changedata={uploadAppjsData}
      /> */}

      {/* 3.0 :- UaerFrom and Reactlifecycle and Hooks */}

      {/* <UserFrom /> */}

      {/* <UseEffectHook /> */}
      {/* <Hooks />s */}
    </div>
  );
}
export default App;
