//     useNavigate   ////

// its use for navigation kuch condition pass kar the dynimcally send kr the ha ish ish component milna chaiye
//  ager user ka input user id Ravi hai to profti componet means pages open nhi to not found.

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");

  const navigate = useNavigate();

  function handlerSubmit(event) {
    event.preventDefault();

    if (name === "Ashish") {
      navigate("/user/:profilei");
    } else {
      navigate("*");
    }
  }

  return (
    <div>
      Login
      <from>
        <label htmlFor="userInput">UserI.d</label>

        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />

        <button onClick={handlerSubmit}>Submit</button>
      </from>
    </div>
  );
}

export default Login;
