import React, { useContext } from "react";
import { TitleContext } from "../../Contexts/ToolContext";
import { useSelector } from "react-redux";
// import selectAmount from "../../store/reducers/balance"
function AdminHeader() {
  const { title } = useContext(TitleContext);
  const balance = useSelector((state) => state.amount) || { amount: 0 };
  console.log("abc",balance );
  return (
    <div className="PageHeader">
      <h2> Welcome To Vietcombank ATM - {title}</h2>
      <h2> Balance - {balance.amount || 0}</h2>
    </div>
  );
}

export default AdminHeader;
