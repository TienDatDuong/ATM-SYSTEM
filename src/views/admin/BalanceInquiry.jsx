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
  console.log("user", user);
  return (
    <div className="BalanceInquiry">
      <h1>
        Review your balance information, then select Continue when are done
      </h1>
      {console.log("user", user)}
      <h2>Available balance : {user.amount}$ </h2>
      <div className="BalanceInquiry_box">
        <GoBack />
      </div>
    </div>
  );
}

export default BalanceInquiry;
