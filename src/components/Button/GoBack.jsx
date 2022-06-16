import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function GoBack({ props }) {
  const navigate = useNavigate();
  console.log("props", props);
  useEffect(() => {}, []);

  return (
    <button
      onClick={() => navigate(-1)}
      className="BalanceInquiry_button_main BalanceInquiry_button back-btn  btn_effect"
    >
      GO BACK
    </button>
  );
}

export default GoBack;
