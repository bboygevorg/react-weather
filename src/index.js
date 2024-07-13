import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/normalize.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { SearchRadioProvider } from "./context/SearchContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <SearchRadioProvider>
      <App />
    </SearchRadioProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
