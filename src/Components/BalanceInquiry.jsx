import React from "react";
import { useNavigate,useLocation } from 'react-router-dom';

function BalanceInquiry() {
  const navigate = useNavigate();
  const location = useLocation()
  return (
    <div className="BalanceInquiry">
      <h1>Review your balance information, then select Continue when are done</h1>
      <h2>Available balance : {location.state.amounts.user.amount} </h2>
      <div className="BalanceInquiry_box">
      <button onClick={() => navigate(-1)} className="BalanceInquiry_button_main BalanceInquiry_button back-btn">go back</button>
      </div>
    </div>
  );
}

export default BalanceInquiry;
