import "../../App.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import OtherBtn from "../../components/Button/OtherBtn";
import moment from "moment";
import Moment from "react-moment";
function ListAccount({
  users,
  amount,
  handleAmount,
  accountNumber,
  hanleNumber,
  handleDelete,
  AddListMember,
  setChangeAmount,
  setChangeNumber,
  changeAmount,
  ChangeNumber,
  handleUpdate,
  isSetToggle,
  isToggle,
}) {
  const [getid, setGetid] = useState("");
  const [createdAt, setCreatedAt] = useState(new Date());
  moment(createdAt).format();
  const fillUpdateForm = (user) => {
    setChangeAmount(user.amount);
    setChangeNumber(user.accountNumber);
    setGetid(user.id);
    isSetToggle(true);
  };

  const handleChangeAmount = (e) => {
    setChangeAmount(e.target.value);
  };

  const handleChangeNumber = (e) => {
    setChangeNumber(e.target.value);
  };

  const handleClose = () => {
    isSetToggle(false);
  };

  return (
    <>
      <div className="inputs">
        <form onSubmit={AddListMember}>
          {/* <Button
            value={amount}
            onChange={handleAmount}
            placeholder={"amount"}
          /> */}
          {/* <Button
            value={accountNumber}
            onChange={hanleNumber}
            placeholder={"accountNumber"}
          /> */}
          {/* <Button value={createdAt} placeholder={"createdAt"} /> */}
          {/* <OtherBtn type={"submit"} className={"btn"} value={"Add UserBank"} /> */}
          {/* {isToggle === true ? (
            <div className="box">
              <Button
                value={changeAmount}
                onChange={handleChangeAmount}
                placeholder={"amount"}
              />
              <Button
                value={ChangeNumber}
                onChange={handleChangeNumber}
                placeholder={"accountNumber"}
              />
              <button className="btn" onClick={(e) => handleUpdate(getid, e)}>
                {" "}
                Change{" "}
              </button>
              <button className="btn" onClick={(e) => handleClose(e)}>
                {" "}
                Close{" "}
              </button>
            </div>
          ) : (
            ""
          )} */}
        </form>
      </div>

      <div className="App">
        <h1>List Account</h1>
        <table>
          <thead>
            <th>STT</th>
            <th>Name</th>
            <th>amount</th>
            <th>Phone</th>
            <th>Account Number</th>
            <th>Pin</th>
            {/* <th>createdAt</th> */}
            {/* <th>Action</th> */}
          </thead>
          {users.map((user, index) => (
            <tr key={index} className="selecter">
              <td>{user.id}</td>
              <td>
                <nav>
                  <Link
                    to={`/account/${user.id}`}
                    state={{ id: { user } }}
                    className="User"
                  >
                    {" "}
                    {user.accountNumber}{" "}
                  </Link>
                </nav>
              </td>
              <td>{user.amount}$</td>
              <td>{user.accPhone}</td>
              <td>{user.accNumber}</td>
              <th>{user.pin}</th>
              {/* <td>
                <Moment format="D MMMM YYYY HH:mm">{user.createdAt}</Moment>
              </td> */}
              {/* <td>
                <button
                  type=""
                  className="btn"
                  onClick={(e) => handleDelete(user.id, e)}
                >
                  Delete
                </button>
                <button
                  type=""
                  className="btn"
                  onClick={(e) => fillUpdateForm(user)}
                >
                  Update
                </button>
              </td> */}
            </tr>
          ))}
        </table>
      </div>
      <div className="PageFooter">
        <h2>Welcome To Vietcombank ATM</h2>
      </div>
    </>
  );
}

export default ListAccount;
