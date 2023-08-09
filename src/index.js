import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { Context, MenuContext } from "./PizzaContext/Context";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export { Context };

root.render(
  <StrictMode>
    <Router>
      <MenuContext>
        <App />
      </MenuContext>
    </Router>
  </StrictMode>
);
