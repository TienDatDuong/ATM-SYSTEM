import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AdminHeader from "../views/admin/AdminHeader";
import Menu from "../views/admin/Menu";
import Withdrawal from "../views/admin/Withdrawal";
import BalanceInquiry from "../views/admin/BalanceInquiry";
import User from "../views/admin/User";
import TitleContextProvider from "../Contexts/ToolContext";
import App from "../App";

function Admin() {
  return (
    <div>
      <TitleContextProvider>
        <AdminHeader />
        <Routes>
          <Route path="/admin/dashboard" element={<App />} />
          <Route path="/admin/account/:id" element={<User />}>
            <Route index element={<Menu />} />
            <Route path="withdrawal" element={<Withdrawal />} />
            <Route path="balance-inquiry" element={<BalanceInquiry />} />
          </Route>
          <Route path="/" element={<Navigate to="/admin/dashboard" />} />
        </Routes>
      </TitleContextProvider>
    </div>
  );
}

export default Admin;
