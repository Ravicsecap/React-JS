// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";

// // import Router from "./Component/Router";
// // import About from "./Component/About";
// // import Navbar from "./Component/Navbar";
// import Home from "./Component/LinkRouter.jsx/Home";
// import Section from "./Component/LinkRouter.jsx/Section";
// import Setting from "./Component/LinkRouter.jsx/Setting";
// import About from "./Component/LinkRouter.jsx/About";
// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Home />

//         <Routes>
//           <Route path="/About" element={<About />} />
//           <Route path="/setting" element={<Setting />} />
//           <Route path="/section" element={<Section />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Home1 from "./Component/4O4PageNotFound/Home1";
// import About1 from "./Component/4O4PageNotFound/About1";
// import Setting from "./Component/4O4PageNotFound/Setting";
// import MainPage from "./Component/4O4PageNotFound/MainPage";
// import PageNotFound from "./Component/4O4PageNotFound/PageNotFound";
// import Employee from "./Component/4O4PageNotFound/Employee";
// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//         <MainPage />
//         <Routes>
//           <Route path="/home" element={<Home1 />} />
//           <Route path="/about" element={<About1 />} />
//           <Route path="/Setting" element={<Setting />} />
//           <Route path="/empolyee/:name/:age" element={<Employee />} />
//           <Route path="/*" element={<PageNotFound />} />
//           {/* <Route path="/*" element={<Navigate to="/home" />} /> */}
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;

import React from "react";
import MainPage1 from "./Component/4O4PageNotFound/useParams/MainPage1";
import Page1 from "./Component/4O4PageNotFound/useParams/Page1";
import Page2 from "./Component/4O4PageNotFound/useParams/Page2";
import Emp from "./Component/4O4PageNotFound/useParams/Emp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseSerachParam from "./UseSerachParam";
import Company from "./Component/NestedRoute/Company";
import Faculty from "./Component/NestedRoute/Faculty";
import Student from "./Component/NestedRoute/Student";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <MainPage1 />
        <Routes>
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/employee/:name/:age" element={<Emp />} />
          <Route path="/search" element={<UseSerachParam />} />
          <Route path="/company/" element={<Company />}>
            <Route path="faculty" element={<Faculty />} />
            <Route path="student" element={<Student />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
