import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Pages/Menu";
import Withdrawal from "./Components/Withdrawal";
import BalanceInquiry from "./Components/BalanceInquiry";
import User from "./Pages/User";
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
