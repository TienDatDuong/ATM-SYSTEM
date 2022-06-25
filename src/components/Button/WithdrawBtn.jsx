import React, { useState } from "react";

function WithdrawBtn({ value, setAmount, isFocus, isSetFocus, amount }) {
  const handleAmount = () => {
    setAmount(value);
  };

  return (
    <input
      type="button"
      value={value}
      className={`Withdrawal_button  btn_effect ${
        isFocus === false && value === amount ? "Withdrawal_button_focus" : ""
      } `}
      onClick={() => handleAmount()}
    />
  );
}

export default WithdrawBtn;
