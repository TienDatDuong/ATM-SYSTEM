import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import ChangeData from "./constant/ChangeData";
import { type } from "@testing-library/user-event/dist/type";
function App() {
  const [users, setUsers] = useState([]);
  const [amount, setAmount] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [changeAmount, setChangeAmount] = useState("");
  const [ChangeNumber, setChangeNumber] = useState("");
  const [getid,setGetid] = useState("")
  const [createdAt, setCreatedAt] = useState(new Date());
  const [title, setTitle] = useState("Add UserBank");
  const datas = [
    {
      createdAt: createdAt,
      accountNumber: accountNumber,
      amount: +amount,
      id: uuidv4(),
    },
  ];
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
    // })
  };

  const handleUpdate = (user, e) => {
    e.preventDefault();
    // <ChangeData />
    const UpdateWithdraw = async () => {
      const res = await axios.put(
        `https://628b0319667aea3a3e259443.mockapi.io/api/v1/withdraws/${user.id}`
      );
      return res;
    };
    UpdateWithdraw().then((res) => {
      // console.log("datdt", res.data, res.data.amount, res.data.id);
      setChangeAmount(res.data.amount);
      setChangeNumber(res.data.accountNumber);
      setGetid(res.data.id)
      // handleChangeDate(res.data)
      // setAmount(changeAmount)
    });
  };

  const handleChangeAmount = (e) => {
    setChangeAmount(e.target.value);
  };

  const handleChangeNumber = (e) => {
    setChangeNumber(e.target.value);
  };
  // console.log("id:",getid)

  const handleChangeDate = async () => {

    const res = await axios.put(
      `https://628b0319667aea3a3e259443.mockapi.io/api/v1/withdraws/${getid}`
    );
    // setUsers(res.data);
    console.log("ressss",res.data)
    // setAmount(res.data.amount)
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
          <input className="btn" type="submit" value={title} />
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
              placeholder="amount"
              value={ChangeNumber}
              onChange={(e) => handleChangeNumber(e)}
            />
            <button className="btn" onClick={() => handleChangeDate()}>
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
                  onClick={(e) => handleUpdate(user, e)}
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
