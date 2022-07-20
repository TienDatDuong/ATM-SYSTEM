import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser, selectlogin } from "../../store/reducers/user";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import App from "../../App";
import apiRequest from "../../store/reducers/apiRequest";
import { useEffect } from "react";

function Login() {
  const [account, setAccount] = useState("");
  const [pin, setPin] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectlogin);
  const navigate = useNavigate();

  console.log(999, token);
  const submitAccountNumber = (e) => {
    const value = e.target.value;
    setAccount(value);
  };
  const submitPin = (e) => {
    const value = e.target.value;
    setPin(value);
  };

  const submitLogin = (e) => {
    e.preventDefault();
    dispatch(
      LoginUser({
        accNumber: account,
        pin: pin,
      })
    );
    // const newUser = {
    //   accNumber: account,
    //   pin: pin,
    // };
    // apiRequest(newUser,dispatch,navigate)
  };
 
  useEffect(()=>{
    if(token.length >= 1){
      navigate("/admin/accounts")
    }
  },[token])
  return (
    <>
      <div className="login">
        <form className="login_container">
          <div className="login_container_input ">
            <label className="login_container_label">ACCOUNT NUMBER :</label>
            <input
              type="text"
              className="login_input"
              placeholder={"Account Number ... "}
              value={account}
              onChange={(e) => submitAccountNumber(e)}
            />
            <p></p>
            <label className="login_container_label">PIN :</label>
            <input
              type="text"
              className="login_input"
              placeholder={"Pin ... "}
              value={pin}
              onChange={(e) => submitPin(e)}
            />
            <p></p>
          </div>
          <button
            className="login_btn btn_effect"
            onClick={(e) => submitLogin(e)}
          >
            {" "}
            LOGIN{" "}
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
