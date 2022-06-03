import "./App.css";
import "./Styles/BalanceInquiry.css";
import "./Styles/Withdrawal.css";
import "./Styles/Bill.css"
import "./Styles/input.css"
import "./Styles/menu.css"
import React, { useEffect, useState } from "react";
import axios from "axios";
import ListAccount from "./Home/ListAccount";

function App() {
  const [users, setUsers] = useState([]);
  const [amount, setAmount] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [changeAmount, setChangeAmount] = useState("");
  const [ChangeNumber, setChangeNumber] = useState("");
  const [isToggle, isSetToggle] = useState(false);
  const URL =  "https://628b0319667aea3a3e259443.mockapi.io/api/v1/bank_accounts"

  useEffect(() => {
    const getWithdraws = async () => {
      const res = await axios.get(
        `${URL}`
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
        `${URL}`,
        { amount, accountNumber }
      );
      return res.data;
    };
    createWithdraw().then((abc) => setUsers([...users, abc]));
    setAmount("");
    setAccountNumber("");
  };

  const handleDelete = async (id, e) => {
    e.preventDefault();
    const res = await axios.delete(
      `${URL}/${id}`
    );
    const newabc = users.filter((p) => p.id !== id);
    setUsers(newabc);
  };

  const handleUpdate = (getid, e) => {
    
    e.preventDefault();
    const UpdateWithdraw = async () => {
      const res = await axios.put(
        `${URL}/${getid}`,
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
      isSetToggle(false);
    });

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
        setChangeAmount ={setChangeAmount}
        setChangeNumber={setChangeNumber}
        changeAmount ={changeAmount}
        ChangeNumber={ChangeNumber}
        handleUpdate={handleUpdate}
        isSetToggle ={isSetToggle}
        isToggle = {isToggle}
      />
    </>
  );
}

export default App;
