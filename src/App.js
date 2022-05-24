import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [users, setUsers] = useState([]);
  const [amount, setAmount] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [createdAt, setCreatedAt] = useState(new Date());
  const datas = [
    {
      createdAt: createdAt,
      accountNumber: accountNumber,
      amount: +amount,
      id: uuidv4(),
    },
  ];
  console.log(datas);
  console.log(createdAt);
  useEffect(() => {
    const getWithdraws = async () => {
      const res = await axios.get(
        "https://628b0319667aea3a3e259443.mockapi.io/api/v1/withdraws"
      );
      setUsers(res.data);
    };
    getWithdraws();
  }, []);

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const hanleNumber = (e) => {
    setAccountNumber(e.target.value);
  };
  // debugger
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
  };
  const handleDelete = (id,e) => {
        console.log(id)
        e.preventDefault();
        const deleteWithdraw = async () => {
          const res = await axios.delete(`https://628b0319667aea3a3e259443.mockapi.io/api/v1/withdraws/${id}`)
          return res.data
        }
        deleteWithdraw().then((res)=> { 
          const newabc = users.filter((p)=> p.id !== res.id)
          setUsers(newabc)
        })
  }
  // findIndex
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
          <input className="btn" type="submit" value=" Add UserBank" />
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
          {console.log(users)}
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.amount}</td>
              <td>{user.accountNumber}</td>
              <td>{user.createdAt}</td>
              <td>
                <button type="" className="btnDelete" onClick={(e) => handleDelete(user.id,e)}>Delete</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}

export default App;
