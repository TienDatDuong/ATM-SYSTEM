import "./App.css";
import "./assets/Styles/BalanceInquiry.css";
import "./assets/Styles/Withdrawal.css";
import "./assets/Styles/Bill.css";
import "./assets/Styles/input.css";
import "./assets/Styles/menu.css";
import React, { useEffect, useState } from "react";
import ListAccount from "./views/auth/ListAccount";
import { getAllAccount } from "./services/bankaccount.jsx";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllAccount().then((res) => setUsers(res.data));
  }, []);

  return (
    <>
      <ListAccount users={users} />
    </>
  );
}

export default App;
