import "../../../App.css";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TitleContext } from "../../../Contexts/ToolContext";
import { useDispatch, useSelector } from "react-redux";
import {
  getTransaction,
  getListTransaction,
} from "../../../store/reducers/user";
import GoBack from "../../../components/Button/GoBack";

function Transaction() {
  const { setTitle } = useContext(TitleContext);
  const dispatch = useDispatch();
  const userList = useSelector(getTransaction);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    setTitle("TRANSACTION");
    dispatch(getListTransaction());
  }, []);

  const typeWithdraw = userList.filter(
    (item) => item.accNumber === id && item.type === "withdraw"
  );

  const typeTransfer = userList.filter(
    (item) => item.accNumber === id && item.type === "transfer"
  );

  return (
    <>
      <div className="changepin">
        <h1>LIST TRANSACTION</h1>
        <table>
          <thead>
            <th>ID</th>
            <th>TYPE</th>
            <th>AMOUNT</th>
            <th>iNFORMATIONS</th>
          </thead>
          {typeWithdraw?.map((user, index) => (
            <tr key={index} className="selecter">
              <td className=" changepin_text">{user.accNumber}</td>
              <td>{user.type}</td>
              <td className="selecter_number">{user.amount} $ </td>
              <td>{"Nothing"}</td>
            </tr>
          ))}
          {typeTransfer?.map((user, index) => (
            <tr key={index} className="selecter">
              <td>{user.accNumber}</td>
              <td>{user.type}</td>
              <td className="selecter_number">{user.amount} $ </td>
              <td>{user.information}</td>
            </tr>
          ))}
        </table>
      </div>
      <GoBack />
    </>
  );
}

export default Transaction;
