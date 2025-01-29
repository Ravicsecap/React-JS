import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/pricing">
              <button>Pricing</button>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <button>About</button>
            </Link>
          </li>
          <li>
            <Link to="*">
              <button>Notfound</button>
            </Link>
          </li>
          <li>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
