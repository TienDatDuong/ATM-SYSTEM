import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import GoBack from "../../components/Button/GoBack";
import { updatebalance } from "../../store/reducers/balance";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

function Menu() {
  const params = useParams();
  const id = params.id
  const dispatch = useDispatch();

  useEffect(() => {
    const getWithdraws = async () => {
      const res = await axios.get(
        `https://628b0319667aea3a3e259443.mockapi.io/api/v1/bank_accounts/${id}`
      );
      dispatch(updatebalance(res.data.amount));
    };
    getWithdraws();
  }, []);

  return (
    <>
      <div className="menu">
        <nav>
          <ul className="navBar">
            <Link to="balance-inquiry" className="navBar_item btn_effect">
              BALANCE INQUIRY
            </Link>
            <Link to="withdrawal" className="navBar_item btn_effect" state={{ id }}>
              WITHDRAWAL
            </Link>
            <Link to={`transfer`} className="navBar_item btn_effect">
              TRANSACTIONS
            </Link>
            <Link to={`transactions`} className="navBar_item btn_effect">
              TRANSACTIONS
            </Link>
            <Link to={`change PIN`} className="navBar_item btn_effect">
              CHANGE PIN
            </Link>
            <Link to={`change PIN`} className="navBar_item btn_effect">
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
