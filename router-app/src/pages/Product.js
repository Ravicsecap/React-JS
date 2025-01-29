/// nested router///////

// <route> inside route </route/> we cant use /with path-name only path name as string. bcus / is actualy path.
// <Outlets/> where rendring inside ur parent jsx body

import React from "react";
import { Outlet } from "react-router-dom";

function Product() {
  return (
    <div>
      <button>Product Opation</button>
      <Outlet />
    </div>
  );
}

export default Product;
