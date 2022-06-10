import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import GoBack from "../../components/Button/GoBack";
import { updatebalance } from "../../store/reducers/balance";
import { useDispatch } from "react-redux";

function Menu() {
  const [users, setUsers] = useState([]);
  const [getid, setGetid] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const amounts = location.state.id;
  const id = location.state.id.user.id;
  const dispatch = useDispatch();

  useEffect(() => {
    const getWithdraws = async () => {
      const res = await axios.get(
        `https://628b0319667aea3a3e259443.mockapi.io/api/v1/bank_accounts/${id}`
      );
      dispatch(updatebalance(res.data.amount));
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
              BALANCE INQUIRY
            </Link>
            <Link to="withdrawal" className="navBar_item" state={{ getid }}>
              WITHDRAWAL
            </Link>
            <Link to={`transfer`} className="navBar_item">
              TRANSACTIONS
            </Link>
            <Link to={`transactions`} className="navBar_item">
              TRANSACTIONS
            </Link>
            <Link to={`change PIN`} className="navBar_item">
              CHANGE PIN
            </Link>
            <Link to={`change PIN`} className="navBar_item">
              OTHER
            </Link>
          </ul>
        </nav>

        <GoBack />
      </div>
    </>
  );
}

export default Menu;
