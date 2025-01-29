import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Page1 = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <li>
        <Link to="/employee/ravisahani/28" state={{ name: "dlip" }}>
          Ravi
        </Link>
      </li>
      <li>
        <Link to="/employee/ashishsahani/26">Ashish</Link>
      </li>
    </div>
  );
};

export default Page1;
