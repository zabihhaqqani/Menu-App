import "./styles.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Menu } from "./Pages/Menu";
import { Home } from "./Pages/Home";
import { Cart } from "./Pages/Cart";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./PizzaContext/Context";

export default function App() {
  const history = useNavigate();
  const { cartLength, navigateHandler } = useContext(Context);

  const getActive = ({ isActive }) => ({
    color: isActive ? "red" : "black",
    fontWeight: isActive ? "bold" : ""
  });

  return (
    <div style={{ textAlign: "left" }} className="App">
      <NavLink style={getActive} to="/">
        Home
      </NavLink>
      ||
      <NavLink style={getActive} to="/menu">
        Menu
      </NavLink>
      ||
      <NavLink style={getActive} to="/cart">
        Cart({cartLength})
      </NavLink>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
