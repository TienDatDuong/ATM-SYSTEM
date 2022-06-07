import React, { useContext } from "react";
import { TitleContext } from "../../Contexts/ToolContext";
function AdminHeader() {
  const { title } = useContext(TitleContext);
  return (
    <div className="PageHeader">
      <h2> Welcome To Vietcombank ATM - {title}</h2>
    </div>
  );
}

export default AdminHeader;
