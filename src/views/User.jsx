import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

function User() {
  const [users, setUsers] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const id = location.state.id.user.id;

    const getWithdraws = async () => {
      const res = await axios.get(
        `https://628b0319667aea3a3e259443.mockapi.io/api/v1/bank_accounts/${id}`
      );
      setUsers(res.data);
    };
    getWithdraws();
  }, []);

  return (
    <div className="menu">
      <div className="header_menu">
        <h3>Account number : {users.accountNumber} </h3>
      </div>

      <Outlet />
    </div>
  );
}

export default User;
