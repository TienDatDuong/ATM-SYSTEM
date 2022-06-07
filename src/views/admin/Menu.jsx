import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import GoBack from "../../components/Button/GoBack";

function Menu() {
  const [users, setUsers] = useState([]);
  const [getid, setGetid] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const amounts = location.state.id;
  const id = location.state.id.user.id;

  useEffect(() => {
    const getWithdraws = async () => {
      const res = await axios.get(
        `https://628b0319667aea3a3e259443.mockapi.io/api/v1/bank_accounts/${id}`
      );
      setUsers(res.data);
      setGetid(id);
    };
    getWithdraws();
  }, []);

  return (
    <>
      <div className="menu">
        <nav>
          <ul className="navBar">
            <Link to="balance-inquiry" className="navBar_item">
              BalanceInquiry
            </Link>
            <Link to="withdrawal" className="navBar_item" state={{ getid }}>
              Withdrawal
            </Link>
            <Link to={`transfer`} className="navBar_item">
              Transfer
            </Link>
            <Link to={`transactions`} className="navBar_item">
              Transactions
            </Link>
            <Link to={`change PIN`} className="navBar_item">
              Change PIN
            </Link>
            <Link to={`change PIN`} className="navBar_item">
              Other
            </Link>
          </ul>
        </nav>

        <GoBack />
      </div>
      <div className="PageFooter">
        <h2>Welcome To Vietcombank ATM</h2>
      </div>
    </>
  );
}

export default Menu;
