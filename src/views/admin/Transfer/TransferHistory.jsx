import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {TitleContext} from "../../../Contexts/ToolContext"

function TransferHistory() {

  const { setTitle } = useContext(TitleContext);
  const navigate = useNavigate();

  const Continue = () => {
    setTitle("DASHBOARD ");
    // setIsExchangeCompleted(false);
    navigate(-1);
  };

  const Succeed = () => {
    // setIsExchangeCompleted(false);
    navigate(-2);
  };

  return (
    <>
        <div className="BillingInfor uppercase">
          <h2>Successful transfer</h2>
          <h3>Thank you for using our service</h3>
          <h3>Do you want to continue making other transactions ? </h3>
          <div className="BillingInfor_btn">
            <input
              type="button"
              value={"ENTER"}
              className="Withdrawal_button_other Withdrawl_btn_confirm  btn_effect"
              onClick={() => Continue()}
            />
            <input
              type="button"
              value={"CANCEL"}
              className="Withdrawal_button_other  Withdrawl_btn_cancel  btn_effect"
              onClick={() => Succeed()}
            />
          </div>
        </div>
    </>
  );
}

export default TransferHistory;
