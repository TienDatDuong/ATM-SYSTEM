import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import GoBack from "../../components/Button/GoBack";
import { TitleContext } from "../../Contexts/ToolContext";
function BalanceInquiry() {
  const params = useParams();
  const [user, setUser] = useState([]);
  const titleFooter = useContext(TitleContext);
  const titlePage = titleFooter.title[0].Balancelnquiry;
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
    <div>
      <div className="BalanceInquiry">
        {console.log("user", user)}
        <div className="BalanceInquiry_box">
          <div className="BalanceInquiry_box_lable">Account Balance</div>
          <h2>Available balance : {user.amount}$ </h2>
        </div>
        <GoBack />
      </div>
      <div className="PageFooter">
        <h2>Welcome To Vietcombank ATM - {titlePage}</h2>
      </div>
    </div>
  );
}

export default BalanceInquiry;
