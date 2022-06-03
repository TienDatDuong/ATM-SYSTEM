import "../App.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Molecules/Button";
function ListAccount({
  users,
  setUsers,
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
          <Button value={amount} onChange={handleAmount} placeholder={"amount"} />
          <Button value={accountNumber} onChange={hanleNumber} placeholder={"accountNumber"}/>
          <Button value={createdAt} placeholder={"createdAt"} />
          <input className="btn" type="submit" value="Add UserBank" />
          {isToggle === true ?
           (
            <div className="box">
              <Button  value={changeAmount} onChange={handleChangeAmount} placeholder={"amount"}/>
              <Button value={ChangeNumber} onChange={handleChangeNumber}  placeholder={"accountNumber"} />
              <button className="btn" onClick={(e) => handleUpdate(getid, e)}>  Change </button>
              <button className="btn" onClick={(e) => handleClose(e)}>  Close </button>
            </div>
          ) 
          : 
          ("")}
        </form>
      </div>

      <div className="App">
        <h1>List Account</h1>
        <table>
          <tr>
            <th>id</th>
            <th>amount</th>
            <th>accountNumber</th>
            <th>createdAt</th>
            <th>Action</th>
          </tr>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.amount}</td>
              <td>
                <nav>
                  <Link to={`/account/${user.id}`} state={{ id: { user } }} className="User"> {user.accountNumber} </Link>
                </nav>
              </td>
              <td>{user.createdAt}</td>
              <td>
                <button  type="" className="btn" onClick={(e) => handleDelete(user.id, e)}>
                  Delete
                </button>
                <button type="" className="btn" onClick={(e) => fillUpdateForm(user)} >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </table>
        
      </div>
    </>
  );
}

export default ListAccount;
