import React, { useEffect } from "react";

function ConditionalUseEffect(props) {
  //   const [age, setAge] = useState(22);
  //   const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("UseEffect Hook Only Called Age Component", props.age);
  }, [props.age]);
  useEffect(() => {
    console.log("UseEffect Hook Only Called Count Component", props.count);
  }, [props.count]);

  return (
    <div>
      <h1> ConditionalUseEffect Use For Specific Component</h1>

      <h2>My Age Is A :{props.age}</h2>
      <h2>My Count Value :{props.count}</h2>
      {/* <button onClick={() => setAge(age + 1)}>Age</button>
      <button onClick={() => setCount(count + 1)}>Count</button> */}
    </div>
  );
}

export default ConditionalUseEffect;

// Specification - UseEffectHook Used For Conditional When , I am Want to This Component Update or Render That time UseEffect Method Called
// That's Time Use ArrayDependieces [age] , [count].
// - Similary For Props when be called props.state-name.
