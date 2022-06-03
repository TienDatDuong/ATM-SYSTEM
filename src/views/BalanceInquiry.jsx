import React from "react";
import {useLocation } from 'react-router-dom';
import GoBack from "../Molecules/GoBack";

function BalanceInquiry() {
  const location = useLocation()
  return (
    <div className="BalanceInquiry">
      <h1>Review your balance information, then select Continue when are done</h1>
      <h2>Available balance : {location.state.amounts.user.amount} </h2>
      <div className="BalanceInquiry_box">
      <GoBack/>
      </div>
    </div>
  );
}

export default BalanceInquiry;
