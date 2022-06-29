import React, { useContext, useEffect } from "react";
import { TitleContext } from "../Contexts/ToolContext";
import { useDispatch, useSelector } from "react-redux";
import { getBalanceUser, selectBalance } from "../store/reducers/user";
import { useParams } from "react-router-dom";

function AdminFooter() {
  const balance = useSelector(selectBalance);
  const { title } = useContext(TitleContext);
  // const params = useParams();
  // const id = params.id;
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getBalanceUser(id));
  // }, []);

  // console.log(balance);
  return (
    <div className="PageFooter">
      {/* <p className="PageHeader_break"></p> */}
      <h2>{`${title}`}</h2>

      {title === "DASHBOARD" ? (
        balance?.Account?.balance === 0
      ) : balance?.Account?.balance > 0 ? (
        <h2> BALANCE : {balance?.Account?.balance} $</h2>
      ) : (
        ""
      )}
    </div>
  );
}

export default AdminFooter;
