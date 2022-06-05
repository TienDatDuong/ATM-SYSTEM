import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./views/Menu";
import Withdrawal from "./views/Withdrawal";
import BalanceInquiry from "./views/BalanceInquiry";
import User from "./views/User";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="account/:id" element={<User />}>
          <Route index element={<Menu />} />
          <Route path="Withdrawal" element={<Withdrawal />} />
          <Route path="Balance-inquiry" element={<BalanceInquiry />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
