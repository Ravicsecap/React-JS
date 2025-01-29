import React from "react";
import { useState } from "react";

function BasicFromValidation() {
  const [username, setUsername] = useState("");
  const [err, setErr] = useState(false);

  const [password, setPassword] = useState("");
  
  function upDationHandler(e) {
    if (username.length < 3 || password.length < 5) {
      alert("Something worng");
    } else {
      console.log(userName);
      console.log(password);
      alert("Thank you");
      const [passErr, setPassErr] = useState(false);
    }
    e.preventDefault();
  }

  function userName(e) {
    // console.log(e.target.value.length)
    let name = e.target.value;
    if (name.length < 3) {
      setErr(true);
    } else {
      setErr(false);
    }
    setUsername(name);
  }

  function passHandler(e) {
    let pass = e.target.value;

    if (pass.length < 5) {
      setPassErr(true);
    } else {
      setPassErr(false);
    }
    setPassword(pass);
  }

  return (
    <div>
      <h1>BasicFromValidation</h1>

      <p>
        <b>Basic Login Validation Form</b>
      </p>

      <form onSubmit={upDationHandler}>
        <input
          type="text"
          placeholder="Enter your username"
          onChange={userName}
        />
        {err ? <span>Minimum Required 3 Letters</span> : <span></span>}
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter your password"
          onChange={passHandler}
        />
        {passErr ? (
          <span>Minimum inclued cap letter ,Symbol length greater than 5</span>
        ) : (
          <span></span>
        )}
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BasicFromValidation;
