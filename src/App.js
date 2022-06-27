import "./App.css";
import "./assets/Styles/BalanceInquiry.css";
import "./assets/Styles/Withdrawal.css";
import "./assets/Styles/Bill.css";
import "./assets/Styles/input.css";
import "./assets/Styles/menu.css";
import "./assets/Styles/Button.css";
import "./assets/Styles/Reponsive.css";
import "./assets/Styles/ResponSm.css";
import "./assets/Styles/Transfer.css";
import React from "react";
import ListAccount from "./views/admin/Accounts/ListAccount";
function App() {
  return (
    <>
      <ListAccount />
    </>
  );
}

export default App;
