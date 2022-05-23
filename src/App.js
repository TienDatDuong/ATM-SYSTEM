import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { API_URL } from "./constant/Config"
import callApi from  "./ApiCaller"
function App() {
  const [users, setUsers] = useState([]);
  const [amount, setAmount] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [createdAt, setCreatedAt] = useState(new Date());
  const datas = [
    {
      createdAt: createdAt,
      accountNumber: accountNumber,
      amount: amount,
      id: uuidv4(),
    },
  ];

  useEffect(() => {
    
  }, []);

  // useEffect(() => {
  //   const UserBank = async () => {
  //     const res = await axios.get(
  //       "https://628b0319667aea3a3e259443.mockapi.io/api/v1/withdraws"
  //     );
  //     setUsers(res.data);
  //   };
  //   UserBank();
  // }, []);

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const hanleNumber = (e) => {
    setAccountNumber(e.target.value);
  };
  // debugger
  const AddListMember = (e) => {
    e.preventDefault();
    setUsers([
      ...users,
      {
        id: uuidv4(),
        amount: Number(amount),
        accountNumber: accountNumber,
        createdAt: createdAt,
      },
    ]);
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
          </tr>
          {console.log(users)}
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.amount}</td>
              <td>{user.accountNumber}</td>
              <td>{user.createdAt}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}

export default App;
