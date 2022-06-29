import React, { useContext } from "react";
import { TitleContext } from "../Contexts/ToolContext";
import { useSelector } from "react-redux";
import { selectBalance } from "../store/reducers/user";

function AdminHeader() {
  const balance = useSelector(selectBalance);
  const { title } = useContext(TitleContext);

  return (
    <div className="PageHeader">
      <h2>{` WELCOME TO NEWWAVE ATM`}</h2>

      {/* <p className="PageHeader_break"></p>
      {title === "DASHBOARD" ? (
        balance?.Account?.balance === 0
      ) : balance?.Account?.balance > 0 ? (
        <h2> BALANCE : {balance?.Account?.balance} $</h2>
      ) : (
        ""
      )} */}
    </div>
  );
}

export default AdminHeader;
