// useRef is a hook use for refence value but cant need re-rendering.
// attribute ref={} as expression.
// binding with label use ref.
// deffent on ur case you want to all from fill that time useref or evrykey event useState
// eventhandler [onfrom , onclick , onchange]

import React, { useRef } from "react";

function UserFrom() {
  const nameInputref = useRef(null);
  const fruitinputRef = useRef(null);

  function handleSunmitInput(event) {
    event.preventDefault(); // its use for submit button not re-loading
    // console.log("submit");
    const name = nameInputref.current.value;
    const fruitname = fruitinputRef.current.value;

    // alert(name + fruitname);
  }

    function handleingfruitinput(event) {
      console.log(event.target.value);}

  return (
    <>
      <form onSubmit={handleSunmitInput} style={{ padding: "20px", marginBlock: "50px" }}>
        <label htmlFor="name">Name</label>

        <input type="text" ref={nameInputref} />
        <br />

        {/* // example to how click submit button then input value achived.  /// */}

        <select ref={fruitinputRef} onChange={handleingfruitinput}>
          <option value="mango">mango</option>
          <option value="apple">apple</option>
          <option value="watermelon">watermelon</option>
          <option value="pinpple">mangopinpple</option>
        </select>

        <br />
        <button onClick={handleSunmitInput}>Submit</button>
      </form>
    </>
  );
}

export default UserFrom;
