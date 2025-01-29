// import React, { Component } from "react";

// class Rob extends Component {
//   render() {
//     return (
//       <div>
//         <h3 style={{ backgroundColor: "aqua" }}>
//           My Name Is {this.props.name}
//         </h3>
//       </div>
//     );
//   }
// }
// export default Rob;

import React from "react";
import { useState } from "react";

// function Rob() {
//   const [value, setValue] = useState(null);
//   const [print, setPrint] = useState(false);

//   function upDateValur(e) {
//     setValue(e.target.value);
//     setPrint(false);
//   }
//   return (
//     <div>
//       {print ? <h1>{value}</h1> : null}
//       <input type="text" onChange={upDateValur} />
//       <button onClick={() => setPrint(true)}>Click Me</button>
//     </div>
//   );
// }

// function Rob() {
//   const [result, setResult] = useState(true);

//   return (
//     <div>
//       {result ? <h1>Hello , I am On</h1> : null}

//       <button onClick={() => setResult(!true)} style={{ margin: "20px  20px" }}>
//         show
//       </button>
//       {/* <button onClick={() => setResult(!result)}>Toggle</button> */}
//     </div>
//   );
// }

// function Rob() {
//   const [value, setValue] = useState("");
//   const [option, setOpation] = useState("");
//   const [check, setCheck] = useState(true);
//   function submitFrom(e) {
//     e.preventDefault();
//     console.log(value, option, check);
//   }
//   return (
//     <div>
//       <form onSubmit={submitFrom}>
//         <input
//           type="text"
//           placeholder="Enter your name"
//           onChange={(e) => setValue(e.target.value)}
//         />

//         <select
//           name="Car"
//           id=""
//           style={{ margin: "10px" }}
//           onChange={(e) => setOpation(e.target.value)}
//         >
//           <option value="suzuki">suzuki</option>
//           <option value="MG">MG</option>
//           <option value="VW">VW</option>
//         </select>

//         <label htmlFor="">Male</label>
//         <input type="checkbox" onChange={(e) => setCheck(e.target.checked)} />
//         <br />
//         <button onClick={submitFrom}>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Rob;

// function Rob() {
//   const [vaildVoter, setVaildVoter] = useState(18);
//   return (
//     <div>
//       {vaildVoter > 18 ? (
//         <h1>you are vaild for voter</h1>
//       ) : vaildVoter === 18 ? (
//         <h1>your current age 18 then you are vaild for voter i.d</h1>
//       ) : (
//         <h1>You are vaild for voter also</h1>
//       )}
//     </div>
//   );
// }

// export default Rob;

// function Rob(props) {
//   return (
//     <>
//       <h1>hello My id is {props.name}</h1>
//       <button onClick={() => props.name()}>Click Me</button>
//     </>
//   );
// }

// export default Rob;

function Rob() {
  const [usernamevalue, setUsernamevalue] = useState("");
  const [passwordvalue, setpasswordvalue] = useState("");
  const [usererr, setuseerr] = useState(false);
  const [passworderr, setpassworderr] = useState(false);
  function loginPage(e) {
    if (usernamevalue.length < 3 || passwordvalue.length < 5) {
      alert("Please filled form correct Instruction");
    } else {
      console.log(usernamevalue);
      console.log(passwordvalue);
      alert("thanks");
    }
    e.preventDefault();
  }

  function usernameFeature(e) {
    let element = e.target.value;
    // setUsernamevalue(element.length);
    if (element.length <= 3) {
      setuseerr(true);
    } else {
      setuseerr(false);
    }
    setUsernamevalue(element);
  }

  function passwordFeature(e) {
    let element = e.target.value;
    // setpasswordvalue(element.length);
    if (element.length <= 5) {
      setpassworderr(true);
    } else {
      setpassworderr(false);
    }
    setpasswordvalue(element);
  }

  return (
    <div>
      <h1>Facebook Login:</h1>
      <form onSubmit={loginPage}>
        <input
          type="text"
          placeholder="Enter your user name"
          onChange={usernameFeature}
        ></input>
        {usererr ? <span>invaild</span> : <span>✅</span>}
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter your password"
          onChange={passwordFeature}
        ></input>
        {passworderr ? <span>invaild</span> : <span>✅</span>}
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Rob;
