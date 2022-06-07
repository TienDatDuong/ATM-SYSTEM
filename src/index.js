import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./views/admin/Menu";
import Withdrawal from "./views/admin/Withdrawal";
import BalanceInquiry from "./views/admin/BalanceInquiry";
import User from "./views/admin/User";
import TitleContextProvider from "./Contexts/ToolContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="account/:id"
          element={
            <TitleContextProvider>
              <User />
            </TitleContextProvider>
          }
        >
          <Route index element={<Menu />} />
          <Route path="withdrawal" element={<Withdrawal />} />
          <Route path="balance-inquiry" element={<BalanceInquiry />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
