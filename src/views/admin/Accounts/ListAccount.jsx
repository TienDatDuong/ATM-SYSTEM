import "../../../App.css";
import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { TitleContext } from "../../../Contexts/ToolContext";
import { useDispatch, useSelector } from "react-redux";
import { getListUser, selectUsers } from "../../../store/reducers/user";

function ListAccount() {
  const { setTitle } = useContext(TitleContext);
  const dispatch = useDispatch();
  const userList = useSelector(selectUsers);

  useEffect(() => {
    setTitle("DASHBOARD");
    dispatch(getListUser());
  }, []);

  return (
    <>
      <div className="App">
        <h1>LIST ACCOUNT</h1>
        <table>
          <thead>
            <th>ID</th>
            <th>NAME</th>
            <th>AMOUNT</th>
            <th>PHONE</th>
            <th>ACCONNT NUMBER</th>
              <th>PIN</th>
          </thead>
          {userList?.map((user, index) => (
            <tr key={index} className="selecter">
              <td>{user._id}</td>
              <td>
                <nav className="uppercase">
                  <Link
                    to={`/admin/account/${user._id}`}
                    state={{ id: { user } }}
                    className="User"
                  >
                    {user.accName}{" "}
                  </Link>
                </nav>
              </td>
              <td className="selecter_number">{user.balance} $ </td>
              <td>{user.accPhone}</td>
              <td>{user.accNumber}</td>
              <th>{user.pin}</th>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}

export default ListAccount;
