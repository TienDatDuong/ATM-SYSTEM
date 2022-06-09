import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./layouts/Admin";
import store from "./store/index";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
