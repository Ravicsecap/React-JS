import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";
import Notfound from "./pages/Notfound";
import Navigation from "./pages/Navigation";
import Profitepara from "./pages/Profitepara";
import Projectpara from "./pages/Projectpara";
import FreeProduct from "./pages/FreeProduct";
import PrimumProduct from "./pages/PrimumProduct";
import Product from "./pages/Product";
import ProtectToprime from "./pages/ProtectToprime";
import Preprime from "./pages/Preprime";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Routes>
        <Route path="*" element={<Notfound />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/user/:profilei" element={<Profitepara />} />
        <Route path="/user/:profilei/:pojectname" element={<Projectpara />} />

        <Route path="/product" element={<Product />}>
          <Route path="freeproduct" element={<FreeProduct />} />

          <Route path="primumproduct" element={<PrimumProduct />} />
        </Route>

        <Route path="/protect" element={<ProtectToprime />}>
          <Route path="prime" element={<Preprime />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
