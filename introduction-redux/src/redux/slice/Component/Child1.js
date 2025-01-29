import React from "react";

import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setMessage } from "../slices/messageslice";

function Child1() {
  const inputref = useRef(null);
  const dispatch = useDispatch();

  function handlerSubmit(event) {
    event.preventDefault();

    const inputvalue = inputref.current.value;
    dispatch(setMessage(inputvalue));
  }

  return (
    <div>
      <form>
        <input type="text" ref={inputref} />
        <button onClick={handlerSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Child1;
