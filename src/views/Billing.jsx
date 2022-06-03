import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import GoBack from "../Molecules/GoBack";
function Billing() {
  const location = useLocation();
  const amount = location.state.amount.amount;
  const id = location.state.id;
  const [fee, setFee] = useState(1500);
  const [money, setMoney] = useState(+amount + fee);
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const wallet = user.amount;
  const totalWallet = +wallet - money;

  const date = new Date();
  const today =
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
  const time =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

  const handleSubmit = () => {
    navigate(-1);
  };

  useEffect(() => {
    const getWithdraws = async () => {
      const res = await axios.get(
        `https://628b0319667aea3a3e259443.mockapi.io/api/v1/bank-account/${id}`
      );
      setUser(res.data);
    };
    getWithdraws();
  }, []);

  const handleUpdate = () => {
    const UpdateWithdraw = async () => {
      const res = await axios.put(
        `https://628b0319667aea3a3e259443.mockapi.io/api/v1/bank-account/${id}`,
        {
          amount: totalWallet,
        }
      );
      return res.data;
    };
    UpdateWithdraw().then((abc) => {
      setUser(abc);
      alert(` you withdrewed ${money}`);
    });
  };

  return (
    <>
      <div className="bill_container">
        <div>ATM TRANSACTION - Wallet {user.amount}</div>
        <p className="bill_container_text">
          DATE : {today} - {time}
        </p>
        <p className="bill_container_text">REQUSTED AMOUNT : {amount} </p>
        <p className="bill_container_text">TERNIMAL FEE : {fee} </p>
        <p className="bill_container_text">TOTAL AMOUNT :{money} </p>
        <button className="btn" onClick={() => handleUpdate()}>
          approve
        </button>
      </div>

      <GoBack />
    </>
  );
}

export default Billing;
