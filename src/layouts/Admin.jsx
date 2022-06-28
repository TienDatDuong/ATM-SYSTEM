import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import Menu from "../views/admin/Dashboard/Menu";
import Withdrawal from "../views/admin/Withdraw/Withdrawal";
import BalanceInquiry from "../views/admin/BalanceInquiry/BalanceInquiry";
import User from "../views/admin/Dashboard/Dashboard";
import TitleContextProvider from "../Contexts/ToolContext";
import App from "../App";
import Transfer from "../views/admin/Transfer/Transfer";
import AdminFooter from "./AdminFooter";

function Admin() {
  return (
    <div>
      <TitleContextProvider>
        <AdminHeader />
        <Routes>
          <Route path="/admin/accounts" element={<App />} />
          <Route path="/admin/account/:id" element={<User />}>
            <Route index element={<Menu />} />
            <Route path="withdrawal" element={<Withdrawal />} />
            <Route path="balance-inquiry" element={<BalanceInquiry />} />
            <Route path="transfer" element={<Transfer />}></Route>
          </Route>
          <Route path="/" element={<Navigate to="/admin/accounts" />} />
        </Routes>
        <AdminFooter/>
      </TitleContextProvider>
    </div>
  );
}

export default Admin;
