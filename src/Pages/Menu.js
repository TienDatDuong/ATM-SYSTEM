import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Outlet,useLocation } from "react-router-dom";
function Menu() {
  const [users, setUsers] = useState([]);
  const location =  useLocation()

  useEffect(() => {
    const id = location.state.id.user.id
    const getWithdraws = async () => {
      const res = await axios.get(
        `https://628b0319667aea3a3e259443.mockapi.io/api/v1/withdraws/${id}`
      );
      setUsers(res.data);
    };
    getWithdraws();
  }, []);

  return (
    <>
      <div className="header_menu">
        <h3>Account number : {users.accountNumber} </h3>
        <h3>Pin : {users.pin}</h3>
      </div>
      <nav>
        <ul className="navBar">
          <Link to="BalanceInquiry" className="navBar_item">
            BalanceInquiry
          </Link>
          <Link to={`Withdrawal`} className="navBar_item">
            Withdrawal
          </Link>
          <Link to={``} className="navBar_item">
            Transfer
          </Link>
          <Link to={``} className="navBar_item">
            Transactions
          </Link>
          <Link to={``} className="navBar_item">
            Change PIN
          </Link>
          <Link to={``} className="navBar_item">
            Other
          </Link>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Menu;
