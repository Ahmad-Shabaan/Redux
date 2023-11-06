import "./App.css";
import NavSection from "./components/NavSection";
import { Route, Routes } from "react-router";
import { Home, Products, Cart, Result } from "./components";
function App() {
  return (
    <>
      <NavSection />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
