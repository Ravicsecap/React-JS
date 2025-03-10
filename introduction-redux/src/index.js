import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import stor from "./redux/slice/store";
// import store from "./redux/slice/stor";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={stor}>
      <App />
    </Provider>
  </React.StrictMode>
);
