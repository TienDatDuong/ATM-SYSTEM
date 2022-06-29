import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GoBack from "../../../components/Button/GoBack";
import { useDispatch, useSelector } from "react-redux";
import { getBalanceUser, selectBalance } from "../../../store/reducers/user";
import { createWithdraw } from "../../../store/reducers/user";
import { TitleContext } from "../../../Contexts/ToolContext";

function Billing({ amounts, id }) {
  const [isExchangeCompleted, setIsExchangeCompleted] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const remainingAmount = useSelector(selectBalance);
  // const updateDataBalance = useSelector(updateBalance);
  const [user, setUser] = useState(remainingAmount);
  const wallet = remainingAmount?.Account?.balance;
  const totalWallet = +wallet - +amounts;
  // const date = new Date();
  const { setTitle } = useContext(TitleContext);

  useEffect(() => {}, []);
  const handleUpdate = (e) => {
    e.preventDefault();

    if (amounts % 50 !== 0) {
      alert(
        "transaction failed because money not enought in wallet and the amount must be divisible by 50"
      );
    } else {
      dispatch(
        createWithdraw({
          accNumber: id,
          type: "withdraw",
          amount: +amounts,
          // amount: +user?.Account?.balance,
        })
      );
      dispatch(getBalanceUser(id));
      setIsExchangeCompleted(true);
    }
  };

  useEffect(() => {
    dispatch(getBalanceUser(id));
  }, [!isExchangeCompleted]);

  console.log(88888, remainingAmount);

  const Continue = () => {
    setTitle("DASHBOARD ");
    setIsExchangeCompleted(false);
    navigate(-1);
  };

  const Succeed = () => {
    setIsExchangeCompleted(false);
    navigate(-2);
  };

  return (
    <>
      {isExchangeCompleted === false ? (
        <>
          <div className="bill_container uppercase ">
            <p className="bill_container_text">Bill</p>
            <p className="bill_container_text">
              ATM transaction - Wallet :{" "}
              <span>{remainingAmount?.Account?.balance}$</span>
            </p>
            <p className="bill_container_text">
              Requsted amount : <span>{amounts}$</span>{" "}
            </p>
            <p className="bill_container_text">
              Remaining amount : <span>{totalWallet}$</span>{" "}
            </p>
            <button
              className="btn  btn_effect"
              onClick={(e) => handleUpdate(e)}
            >
              {" "}
              APPROVE{" "}
            </button>
          </div>

          <GoBack />
        </>
      ) : (
        <div className="BillingInfor uppercase">
          <h2>Successful transaction</h2>
          <h3>Thank you for using our service</h3>
          <h3>Do you want to continue making other transactions ? </h3>
          <div className="BillingInfor_btn">
            <input
              type="button"
              value={"ENTER"}
              className="Withdrawal_button_other Withdrawl_btn_confirm  btn_effect"
              onClick={() => Continue()}
            />
            <input
              type="button"
              value={"CANCEL"}
              className="Withdrawal_button_other  Withdrawl_btn_cancel  btn_effect"
              onClick={() => Succeed()}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Billing;
