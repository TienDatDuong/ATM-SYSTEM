import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Billing() {
  const [fee, setFee] = useState(1500);
  const navigate = useNavigate();
  const location = useLocation();
  console.log("Billing", location);
  const amount = location.state.amount.amount;
  const handleSubmit = () => {
    navigate(-1);
  };
  return (
    <> 
      <div className="bill_container">
        <div>ATM TRANSACTION</div>
        <p className="bill_container_text">REQUSTED AMOUNT : {amount} </p>
        <p className="bill_container_text">TERNIMAL FEE : {fee} </p>
        <p className="bill_container_text">TOTAL AMOUNT :{amount + fee} </p>
      </div>

      <button
        onClick={handleSubmit}
        className="Withdrawal_button_main Withdrawal_button back-btn"
      >
        go back
      </button>
    </>
  );
}

export default Billing;
