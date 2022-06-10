import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { TitleContext } from "../../Contexts/ToolContext";

function User() {
  const [users, setUsers] = useState([]);
  const { setTitle } = useContext(TitleContext);
  const params = useParams();

  useEffect(() => {
    const id = params.id;

    const getWithdraws = async () => {
      const res = await axios.get(
        `https://628b0319667aea3a3e259443.mockapi.io/api/v1/bank_accounts/${id}`
      );
      setUsers(res.data);
    };
    getWithdraws();
  }, []);

  useEffect(() => {
    setTitle("DASHBOARD");
  }, []);

  return (
    <div className="menu">

      <div className="header_menu">
        <h3>ACCOUNT NUMBER : {users.accountNumber} </h3>
        <h3>PHONE : {users.accPhone}</h3>
      </div>

      <Outlet />

    </div>
  );
}

export default User;
