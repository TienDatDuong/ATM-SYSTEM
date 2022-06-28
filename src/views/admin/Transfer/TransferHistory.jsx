import React, { useContext } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TitleContext } from "../../../Contexts/ToolContext";
import { selectUser } from "../../../store/reducers/user";

function TransferHistory({ acc, amount, isBill, isSetBill }) {
  const { setTitle } = useContext(TitleContext);
  const users = useSelector(selectUser);
  const navigate = useNavigate();

  const Continue = () => {
    setTitle("DASHBOARD ");
    navigate(-1);
    isSetBill(!isBill);
  };
  console.log(1111,users)
  return (
    <>
      <div className="transfer_Container">
        <h2>Successful transfer</h2>
        <div className="transfer_Container_text">
          <p>receiver :{acc?.accName}</p>
          <p>amount : {amount}</p>
          <p>information : {users?.createTransfer?.information}</p>
        </div>
        <div className="transfer_section">
          <input
            type="button"
            value={"continue"}
            className="btn_effect transfer_continue"
            onClick={() => Continue()}
          />
        </div>
      </div>
    </>
  );
}

export default TransferHistory;
