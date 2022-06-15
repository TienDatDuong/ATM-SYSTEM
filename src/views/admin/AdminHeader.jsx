import React, { useContext } from "react";
import { TitleContext } from "../../Contexts/ToolContext";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/reducers/user";

function AdminHeader() {
  const balance = useSelector(selectUser || { amount: 0 });
  const { title } = useContext(TitleContext);

  return (
    <div className="PageHeader">
      <h2>WELCOME TO NEWWAVE ATM - {title}</h2>
      <p className="PageHeader_break"></p>
      {title === "DASHBOARD" ? (
        balance.amount === 0
      ) : balance.amount > 0 ? (
        <h2> - BALANCE - {balance.amount} $</h2>
      ) : (
        ""
      )}
    </div>
  );
}

export default AdminHeader;
