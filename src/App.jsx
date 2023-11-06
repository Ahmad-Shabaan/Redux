// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { addPlayer } from "./redux/features/playerSlice";
// import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import NavSection from "./components/NavSection";
import { Route, Routes } from "react-router";
import { Products } from "./components/Products";
import { Cart } from "./components/Cart";
import { Home } from "./components/Home";
import { Result } from "./components/Result";
function App() {
  // const dispatch = useDispatch();
  // const player = useSelector((state) => state.player);
  // console.log(player);
  return (
    <>
      <NavSection />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/result" element={<Result />} />

      </Routes>

      {/* <h1>Hello world</h1>
      <button
        onClick={() => dispatch(addPlayer({ id: 2, title: "song 2" }))}
      ></button>

      {player.map((ele) => {
        return <h3 key={ele.id}>{ele.title}</h3>;
      })} */}
    </>
  );
}

export default App;
