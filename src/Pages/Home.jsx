import { NavLink } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>Welcome to neoG Food Ordering App</h1>
      <h2>
        {" "}
        <NavLink to="/menu">
          {" "}
          <button>Menu</button>
        </NavLink>
      </h2>
    </div>
  );
}
