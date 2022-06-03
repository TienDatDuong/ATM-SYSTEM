import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import GoBack from "../Molecules/GoBack";
import OtherBtn from "../Molecules/OtherBtn";
import WithdrawBtn from "../Molecules/WithdrawBtn";
function Withdrawal() {
  const [amount, setAmount] = useState();
  const [other, setOther] = useState();
  const [text, setText] = useState("");
  const location = useLocation();
  const id = location.state.getid;
 
  const handleOther = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setOther(value);
    setAmount(value);
  };

  return (
    <div className="Withdrawal">
      <h1>Please select an amount </h1>
      <h3>Withdrawal : {amount} $</h3>
      <h2>{text}</h2>
      <div className="Withdrawal_box">
        <WithdrawBtn value={"5"} setAmount={setAmount} />
        <WithdrawBtn value={"1"} setAmount={setAmount} />
        <WithdrawBtn value={"2"} setAmount={setAmount} />
        <WithdrawBtn value={"10"} setAmount={setAmount} />
        <WithdrawBtn value={"15"} setAmount={setAmount} />
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
        />
      </div>

      <GoBack />
    </div>
  );
}
export default Withdrawal;
