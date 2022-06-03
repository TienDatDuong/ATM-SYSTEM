import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import GoBack from "../Molecules/GoBack";

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
            <Link
              to="Balance-inquiry"
              className="navBar_item"
              state={{ amounts }}
            >
              BalanceInquiry
            </Link>
            <Link
              to="Withdrawal"
              className="navBar_item"
              state={{ amounts, getid }}
            >
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

        <GoBack />
        
      </div>
    </>
  );
}

export default Menu;
