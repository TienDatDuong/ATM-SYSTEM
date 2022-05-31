import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Pages/Menu";
import Withdrawal from "./Components/Withdrawal";
import BalanceInquiry from "./Components/BalanceInquiry";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/Menu/:id/" element={<Menu />}></Route>
        <Route path="Withdrawal" element={<Withdrawal />} />
        <Route path="BalanceInquiry" element={<BalanceInquiry />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
