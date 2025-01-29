import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const MainPage1 = () => {
  const info = useNavigate();
  return (
    <div>
      <h1> Main Page</h1>
      <ul>
        <li>
          <Link to="/page1">Page1</Link>
          <br />
          <Link to="/page2">Page2</Link>
        </li>
      </ul>

      <button onClick={() => info("/page1")}>Page1</button>
      <button onClick={() => info("/page2")}>page2</button>
    </div>
  );
};

export default MainPage1;
