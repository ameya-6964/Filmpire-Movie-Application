import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import App from "./components/App";
import ToggleColorModeProvider from "./utils/ToggleColorMode";
import store from "./app/store";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ToggleColorModeProvider>
      <Router>
        <App />
      </Router>
    </ToggleColorModeProvider>
  </Provider>
);
