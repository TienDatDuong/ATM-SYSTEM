import "./App.css";
import "./assets/Styles/BalanceInquiry.css";
import "./assets/Styles/Withdrawal.css";
import "./assets/Styles/Bill.css";
import "./assets/Styles/input.css";
import "./assets/Styles/menu.css";
import "./assets/Styles/Button.css";
import React, { useEffect } from "react";
import ListAccount from "./views/auth/ListAccount";
import { useDispatch, useSelector } from "react-redux";
import { getListUser, getUsers } from "./store/reducers/user";

function App() {
  const dispatch = useDispatch();
  const userList = useSelector(getUsers);

  useEffect(() => {
    dispatch(getListUser());
  }, []);

  return (
    <>
      <ListAccount users={userList} />
    </>
  );
}

export default App;
