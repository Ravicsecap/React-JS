import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <h1>MainPage</h1>

      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/setting">Setting</Link>
        </li>
        <li style={{ listStyle: "none" }}>
          <Link to="/*"></Link>
        </li>
      </ul>
    </div>
  );
};

export default MainPage;
