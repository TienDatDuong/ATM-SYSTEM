import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GoBack from "../../../components/Button/GoBack";
import { useDispatch, useSelector } from "react-redux";
import { getUser, selectUser } from "../../../store/reducers/user";
import { createWithdraw } from "../../../store/reducers/user";
import { TitleContext } from "../../../Contexts/ToolContext";

function Billing({ amounts, id }) {
  const [isExchangeCompleted, setIsExchangeCompleted] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const remainingAmount = useSelector(selectUser);
  const [user, setUser] = useState(remainingAmount);
  const wallet = remainingAmount.amount;
  const totalWallet = +wallet - +amounts;
  const date = new Date();
  const { setTitle } = useContext(TitleContext);

  useEffect(() => {
    dispatch(getUser(id));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (amounts % 50 !== 0) {
      alert(
        "transaction failed because money not enought in wallet and the amount must be divisible by 50"
      );
    } else {
      dispatch(
        createWithdraw({
          bank_accountId: id,
          accountName: user.accountName,
          amount: user.amount,
          requsted_amount: amounts,
          updatedAt: { date },
        })
      );
      setIsExchangeCompleted(true);
    }
  };

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
              ATM transaction - Wallet : <span>{remainingAmount.amount}$</span>
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
          <div>
            <input
              type="button"
              value={"ENTER"}
              className="Withdrawal_button_other Withdrawl_btn_confirm  btn_effect"
              onClick={() => Continue()}
            />
            <input
              type="button"
              value={"CENCAL"}
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