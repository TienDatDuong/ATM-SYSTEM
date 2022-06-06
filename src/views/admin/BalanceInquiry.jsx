import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GoBack from "../../components/Button/GoBack";

function BalanceInquiry() {
  const params = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    const id = params.id;
    const getDetailUser = async () => {
      const res = await axios.get(
        `https://628b0319667aea3a3e259443.mockapi.io/api/v1/bank_accounts/${id}`
      );
      setUser(res.data);
    };
    getDetailUser();
  }, []);

  return (
    <div className="BalanceInquiry">
      {console.log("user", user)}
      <div className="BalanceInquiry_box">
        <div className="BalanceInquiry_box_lable">Account Balance</div>
        <h2>Available balance : {user.amount}$ </h2>
      </div>
      <GoBack />
    </div>
  );
}

export default BalanceInquiry;
