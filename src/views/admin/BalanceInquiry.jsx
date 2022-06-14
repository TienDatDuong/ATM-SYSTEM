import React, { useEffect, useState, useContext } from "react";
import { TitleContext } from "../../Contexts/ToolContext";
import { useParams } from "react-router-dom";
import GoBack from "../../components/Button/GoBack";
import { getAccount } from "../../services/bankaccount";

function BalanceInquiry() {

  const params = useParams();
  const [user, setUser] = useState([]);
  const { setTitle } = useContext(TitleContext);

  useEffect(() => {
    const id = params.id;
    getAccount(id).then((res) => setUser(res.data));
  }, []);

  useEffect(() => {
    setTitle("BALANCE INQUIRY");
  }, []);

  return (
    <div>
      <div className="BalanceInquiry">
        <div className="BalanceInquiry_box  btn_effect">
          <div className="BalanceInquiry_box_lable">ACCOUNT BALANCE</div> 
          <h2>AVAILABLE BALANCE : {user.amount}$ </h2>
        </div>

        <GoBack />

      </div>
    </div>
  );
}

export default BalanceInquiry;
