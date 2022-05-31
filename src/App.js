import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import BalanceInquiry from "./Components/BalanceInquiry";
import Withdrawal from "./Components/Withdrawal";
import { Link } from "react-router-dom";
import Account from "./Pages/Account";
// import Moment from 'react-moment';
function App() {
 
  return (
    <>
      <Account/>
    </>
  );
}

export default App;
