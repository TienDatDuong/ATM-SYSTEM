import React, { useContext } from "react";
import { TitleContext } from "../../Contexts/ToolContext";
import { useSelector } from "react-redux";
import { selectAmount } from "../../store/reducers/balance";

function AdminHeader() {

  const balance = useSelector(selectAmount || { amount: 0 });
  const { title } = useContext(TitleContext);

  return (
    <div className="PageHeader">
      <h2>WELCOME TO NEWWAVE  ATM - {title}</h2>
      <p className="PageHeader_break"></p>
      {balance > 0 ? <h2> - BALANCE - {balance || 0} $</h2> : ""}
    </div>
  );
}

export default AdminHeader;
