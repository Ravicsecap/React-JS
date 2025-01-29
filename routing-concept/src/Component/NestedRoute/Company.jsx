import React from "react";
import { Link, Outlet } from "react-router-dom";

const Company = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/student">Student</Link>
        </li>
        <li>
          <Link to="/faculty">Faculty</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Company;

// specification - nested route use for nestesed component last line use and import Outlet Component.
// route set like path='/pathname /' > next route path='pathname' as string.
