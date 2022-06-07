import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { TitleContext } from "../../Contexts/ToolContext";
import { useParams } from "react-router-dom";
import GoBack from "../../components/Button/GoBack";
import { getAccount } from "../../services/bankaccount";

function BalanceInquiry() {
  const params = useParams();

  const [user, setUser] = useState([]);

  useEffect(() => {
    const id = params.id;
    getAccount(id).then((res) => setUser(res.data));
  }, []);

  const { setTitle } = useContext(TitleContext);
  useEffect(() => {
    setTitle("BALANCE INQUIRY");
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
    </div>
  );
}

export default BalanceInquiry;
