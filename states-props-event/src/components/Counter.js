import React, { useState } from "react";

// function Counter() {
//   //   let count = 0;
//   const [c, set] = useState(0);

//   function upDate() {
//     // count++;
//     set(c + 1);
//     console.log(c);
//   }
//   return (
//     <div>
//       <p>Counter check for increment test : {c}</p>

//       <button onClick={upDate}>Click Me</button>
//     </div>
//   );
// }
// export default Counter;

// new example of useState

function Fruits() {
  const [fruit, setFruits] = useState("Apple");
  const [inputText, setInputtext] = useState("");

  const updateFruits = () => {
    setFruits(inputText);

  };

  //   const updateFruits = (fruit) => {
  //     setFruits(fruit);
  //   };

  const updateInput = (event) => {
    const currentInputValue = event.target.value;
    setInputtext(currentInputValue);
  };

  return (
    <>
      <p>value of fruits:{fruit}</p>
      <input type="text" onChange={updateInput} />

      {/* <button onClick={() => setFruits("Bananana")}>Bananana</button> */}
      {/* <button onClick={() => setFruits("Mango")}>Mango</button> */}
      {/* <button onClick={() => updateFruits("Papaya")}>Papaya</button> */}
      <button onClick={() => updateFruits()}>submit</button>
    </>
  );
}

export default Fruits;
