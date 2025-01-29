import React from "react";
import { Link } from "react-router-dom";

const Home1 = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <ul>
        <li>
          <Link to="/employee/Ravi_Sahani/28">Ravi Sahani</Link>
        </li>
        <li>
          <Link to="/employee/Ashish_Sahani/28">Ashsish Sahani</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home1;
