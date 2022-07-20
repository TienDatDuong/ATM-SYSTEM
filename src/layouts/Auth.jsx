import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../views/auth/Login";

function Auth() {
  return (
    <div>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth" element={<Navigate to="/auth/login" />} />
      </Routes>
    </div>
  );
}

export default Auth;
