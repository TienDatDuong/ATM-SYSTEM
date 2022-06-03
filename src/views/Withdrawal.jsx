import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import GoBack from "../Molecules/GoBack";
import OtherBtn from "../Molecules/OtherBtn";
import WithdrawBtn from "../Molecules/WithdrawBtn";
import Billing from "./Billing";

function Withdrawal() {
  const [amount, setAmount] = useState();
  const [other, setOther] = useState();
  const [text, setText] = useState("");
  const [isTranstion,isSetTranstion] = useState(false)
  const location = useLocation();
  const id = location.state.getid;

  const handleOther = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setOther(value);
    setAmount(value);
  };

  return (

    <>
     
    
      <div className="Withdrawal">

      <h1>Please select an amount </h1>
      <h3>Withdrawal : {amount} $</h3>
      <h2>{text}</h2>

      <div className="Withdrawal_box">
        <WithdrawBtn value={"50"} setAmount={setAmount} />
        <WithdrawBtn value={"10"} setAmount={setAmount} />
        <WithdrawBtn value={"200"} setAmount={setAmount} />
        <WithdrawBtn value={"100"} setAmount={setAmount} />
        <WithdrawBtn value={"150"} setAmount={setAmount} />
        <OtherBtn
          value={other}
          placeholder={"Other...."}
          handleOther={handleOther}
        />

        <Link to="Billing" state={{ amount: { amount }, id }}>
          <input
            type="button"
            value={"confirm"}
            className="Withdrawal_button_main Withdrawal_button"
          />
        </Link>

        <input
          type="button"
          value={"Cancel"}
          className="Withdrawal_button_main Withdrawal_button"
          onClick={() => setAmount(0)}

        />

      </div>

      <GoBack />
      
    </div>
    </>
   
  );
}
export default Withdrawal;
