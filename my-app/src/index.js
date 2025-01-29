import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Infromcard from "./Components/Infromcard";
import Mycard from "./Components/Mycard";

const root = ReactDOM.createRoot(document.getElementById("root"));


// root.render(
//   <div className>
//     {/* <Welcome name="Your Some Details =>" /> */}

//     {/* <Mycard image='https://via.placeholder.com/200' image-name='image-size'/> */}

//     {/* <Mycard name="Ravishekahar Sahani" email="upsccse1996@gmail.com" /> */}
//     {/* <Mycard name="Rihan Sahani" email="rihansahani1996@gnail.com" /> */}

//     <Infromcard
//       name="ravi"
//       surname="sahani"
//       address="Khar danda , rajiv nagar , s.v. patil road , scruz-west , mumbai-400054"
//       image='https://via.placeholder.com/200'
//     />
//     <Infromcard
//       name="rajiv"
//       surname="sahani"
//       address="Vihar Hotel , rajiv nagar , s.v. patil road , scruz-west , mumbai-400054"
//       image='https://via.placeholder.com/200'

//     />
//   </div>
// );

// root.render(myVar);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
