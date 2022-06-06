import React from "react";
import { useNavigate } from "react-router-dom";

function GoBack() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="BalanceInquiry_button_main BalanceInquiry_button back-btn"
    >
      go back
    </button>
  );
}

export default GoBack;
