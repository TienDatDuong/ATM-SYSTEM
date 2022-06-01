import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Menu() {
  const [users, setUsers] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const amounts = location.state.id;
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    const id = location.state.id.user.id;

    const getWithdraws = async () => {
      const res = await axios.get(
        `https://628b0319667aea3a3e259443.mockapi.io/api/v1/bank-account/${id}`
      );
      setUsers(res.data);
    };
    console.log("res", users);
    getWithdraws();
  }, []);

  const hanleSubmit = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="menu">
      
        <nav>
          <ul className="navBar">
            <Link
              to="Balance-inquiry"
              className="navBar_item"
              onClick={() => hanleSubmit()}
              state={{ amounts }}
            >
              BalanceInquiry
            </Link>
            <Link
              to="Withdrawal"
              className="navBar_item"
              onClick={hanleSubmit}
              state={{ amounts, toggle: toggle }}
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
        <button
          onClick={() => navigate(-1)}
          className="BalanceInquiry_button_main BalanceInquiry_button back-btn"
        >
          go back
        </button>
      </div>
    </>
  );
}

export default Menu;
