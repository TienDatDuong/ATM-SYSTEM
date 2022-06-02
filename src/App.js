import "./App.css";
import "./Style/BalanceInquiry.css";
import "./Style/Withdrawal.css";
import "./Style/Bill.css"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ListAccount from "./Pages/ListAccount";
function App() {
  const [users, setUsers] = useState([]);
  const [amount, setAmount] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  useEffect(() => {
    const getWithdraws = async () => {
      const res = await axios.get(
        "https://628b0319667aea3a3e259443.mockapi.io/api/v1/bank-account"
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

  const AddListMember = (e) => {
    e.preventDefault();
    const createWithdraw = async () => {
      const res = await axios.post(
        "https://628b0319667aea3a3e259443.mockapi.io/api/v1/bank-account",
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
      `https://628b0319667aea3a3e259443.mockapi.io/api/v1/bank-account/${id}`
    );

    const newabc = users.filter((p) => p.id !== id);
    setUsers(newabc);
  };

  return (
    <>
      <ListAccount
        users={users}
        setUsers={setUsers}
        AddListMember={AddListMember}
        amount={amount}
        handleAmount={handleAmount}
        accountNumber={accountNumber}
        hanleNumber={hanleNumber}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default App;
