import "../App.css";
import React, {  useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function ListAccount({
  users,
  setUsers,
  amount,
  handleAmount,
  accountNumber,
  hanleNumber,
  handleDelete,
  AddListMember
}) {
  const [changeAmount, setChangeAmount] = useState("");
  const [ChangeNumber, setChangeNumber] = useState("");
  const [getid, setGetid] = useState("");
  const [createdAt, setCreatedAt] = useState(new Date());
  const [toggle, setToggle] = useState(false);

  const fillUpdateForm = (user) => {
    setChangeAmount(user.amount);
    setChangeNumber(user.accountNumber);
    setGetid(user.id);
    setToggle(true);
  };

  const handleUpdate = (getid, e) => {
    e.preventDefault();
    const UpdateWithdraw = async () => {
      const res = await axios.put(
        `https://628b0319667aea3a3e259443.mockapi.io/api/v1/bank-account/${getid}`,
        {
          amount: changeAmount,
          accountNumber: ChangeNumber,
        }
      );
      return res.data;
    };
    UpdateWithdraw().then((abc) => {
      const newid = users.filter((p) => p.id !== abc.id);
      setUsers([...newid, abc]);
      setChangeAmount("");
      setChangeNumber("");
      setToggle(false);
    });
  };

  const handleChangeAmount = (e) => {
    setChangeAmount(e.target.value);
  };

  const handleChangeNumber = (e) => {
    setChangeNumber(e.target.value);
  };

  const handleClose = () => {
    setToggle(false);
  };

  return (
    <>
      <div className="inputs">
        <form onSubmit={AddListMember}>
          <input
            className="inputs-value"
            type="text"
            placeholder="amount"
            value={amount}
            onChange={handleAmount}
          />
          <input
            className="inputs-value"
            type="text"
            placeholder="accountNumber"
            value={accountNumber}
            onChange={hanleNumber}
          />
          <input
            className="inputs-value"
            type="text"
            placeholder="createdAt"
            value={createdAt}
          />
          <input className="btn" type="submit" value="Add UserBank" />

          {toggle === true ? (
            <div className="box">
              <input
                className="inputs-value"
                type="text"
                placeholder="amount"
                value={changeAmount}
                onChange={(e) => handleChangeAmount(e)}
              />
              <input
                className="inputs-value"
                type="text"
                placeholder="accountNumber"
                value={ChangeNumber}
                onChange={(e) => handleChangeNumber(e)}
              />
              <button className="btn" onClick={(e) => handleUpdate(getid, e)}>
                Change
              </button>
              <button className="btn" onClick={(e) => handleClose(e)}>
                Close
              </button>
            </div>
          ) : (
            ""
          )}
        </form>
      </div>
      <div className="App">
        <h1>List Account</h1>
        <table>
          <tr>
            <th>id</th>
            <th>pin</th>
            <th>accountNumber</th>
            <th>createdAt</th>
            <th>Action</th>
          </tr>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.pin}</td>
              <td>
                <nav>
                  <Link
                    to={`/account/${user.id}`}
                    state={{ id: { user } }}
                    className="User"
                  >
                    {user.accountNumber}
                  </Link>
                </nav>
              </td>
              <td>{user.createdAt}</td>
              <td>
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
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}

export default ListAccount;
