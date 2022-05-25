import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [amount, setAmount] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [changeAmount, setChangeAmount] = useState("");
  const [ChangeNumber, setChangeNumber] = useState("");
  const [getid, setGetid] = useState("");
  const [createdAt, setCreatedAt] = useState(new Date());

  useEffect(() => {
    const getWithdraws = async () => {
      const res = await axios.get(
        "https://628b0319667aea3a3e259443.mockapi.io/api/v1/withdraws"
      );
      setUsers(res.data);
    };
    getWithdraws();
  }, []);

  // trong hàm useEffect thì không gọi một cách trực tiếp ở phần callback dc nên phải dùng đến async await
  // Nếu không dùng đến hàm useEffect thì có thể gọi một cách trực tiếp dc

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const hanleNumber = (e) => {
    setAccountNumber(e.target.value);
  };

  const AddListMember = (e) => {
    e.preventDefault();
    const createWithdraw = async () => {
      const res = await axios.post(
        "https://628b0319667aea3a3e259443.mockapi.io/api/v1/withdraws",
        { amount, accountNumber }
      );
      return res.data;
    };
    createWithdraw().then((abc) => setUsers([...users, abc]));
    setAmount("");
    setAccountNumber("");
  };

  const handleDelete = async (id, e) => {
    console.log(id);
    e.preventDefault();
    const res = await axios.delete(
      `https://628b0319667aea3a3e259443.mockapi.io/api/v1/withdraws/${id}`
    );

    const newabc = users.filter((p) => p.id !== id);
    setUsers(newabc);
  };

  const fillUpdateForm = (user) => {
    setChangeAmount(user.amount)
    setChangeNumber(user.accountNumber)
    setGetid(user.id)
  };
  
  const handleUpdate = (getid, e) => {
    console.log("-----------",getid)
    console.log("datdt---->",getid)
    e.preventDefault();
    const UpdateWithdraw = async () => {
      const res = await axios.put(
        `https://628b0319667aea3a3e259443.mockapi.io/api/v1/withdraws/${getid}`,{
          amount:changeAmount ,
          accountNumber: ChangeNumber
        }
      );
      return res.data;
    };
    UpdateWithdraw().then((abc) =>   {
      const newid = users.filter((p)=> p.id !== abc.id)
      setUsers([...newid,abc])
      setChangeAmount("")
      setChangeNumber("")
    });
  };


  const handleChangeAmount = (e) => {
    setChangeAmount(e.target.value)
  };

  const handleChangeNumber = (e) => {
    setChangeNumber(e.target.value);
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

          {/* ---------------------------------- */}

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
            <button className="btn" onClick={(e) => handleUpdate(getid,e)}>
              Change
            </button>
            <button className="btn">Close</button>
          </div>
        </form>
      </div>

      <div className="App">
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
              <td>{user.accountNumber}</td>
              <td>{user.createdAt}</td>
              <td>
                <button
                  type=""
                  className="btnDelete"
                  onClick={(e) => handleDelete(user.id, e)}
                >
                  Delete
                </button>
                <button
                  type=""
                  className="btnDelete"
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

export default App;
