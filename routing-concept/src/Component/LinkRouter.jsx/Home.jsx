import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Home Pages</h2>
      <ul>
        <li>
          <Link to="/section">Section</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/setting">Setting</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
