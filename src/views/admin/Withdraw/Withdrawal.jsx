import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import GoBack from "../../../components/Button/GoBack";
import OtherBtn from "../../../components/Button/OtherBtn";
import WithdrawBtn from "../../../components/Button/WithdrawBtn";
import Billing from "./Billing";
import { TitleContext } from "../../../Contexts/ToolContext";
import { useDispatch, useSelector } from "react-redux";
import { getBalanceUser, selectBalance } from "../../../store/reducers/user";
import { useNavigate } from "react-router-dom";

function Withdrawal() {
  const [amount, setAmount] = useState(0);
  const [amountOther, setAmountOther] = useState(0);
  const [isFocus, isSetFocus] = useState(false);
  const [isSelectAmount, isSetSelectAmount] = useState(false);
  const [isRedirectBill, isSetRedirectBill] = useState(false);
  const getDetailUser = useSelector(selectBalance);
  const totalMoney = getDetailUser?.Account?.balance;
  const dispatch = useDispatch();
  const { setTitle } = useContext(TitleContext);
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();

  const handleOtherAmount = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    // setAmountOther(value);
    setAmount(value);
  };

  const handleSubmit = () => {
    if (amount === 0 || amount === "") {
      alert("ATM only payments is a multiple of 50 - Please enter the amount");
    } else if (+totalMoney >= +amount) {
      isSetRedirectBill(true);
    } else {
      alert(" money not enought");
    }
  };

  const setOtherMoneys = () => {
    isSetSelectAmount(!isSelectAmount);
    setAmount();
  };

  const handeleOtherMoneys = () => {
    isSetSelectAmount(!isSelectAmount);
  };

  useEffect(() => {
    dispatch(getBalanceUser(id));
  }, []);

  useEffect(() => {
    setTitle("WITHDRAWAL");
  }, []);

  const handlerSubmit = () => {
    navigate(-1);
    setTitle("DASHBOARD ");
  };

  const cancel = () => {
    navigate(-1);
    setTitle("DASHBOARD ");
  };

  const handleAmounts = () => {
    isSetFocus(!isFocus);
  };

  return (
    <>
      {isRedirectBill === false ? (
        <div className="Withdrawal uppercase">
          <h1>Please select an amount</h1>
          <h3>Withdrawal : {amountOther || amount} $</h3>

          <div className="Withdraws_menu">
            {isSelectAmount === false ? (
              <div className="Withdrawal_box">
                <WithdrawBtn
                  value={"100"}
                  setAmount={setAmount}
                  isFocus={isFocus}
                  isSetFocus={isSetFocus}
                  amount={amount}
                  onClick={() => handleAmounts()}
                />
                <WithdrawBtn
                  value={"200"}
                  setAmount={setAmount}
                  isFocus={isFocus}
                  isSetFocus={isSetFocus}
                  amount={amount}
                  onClick={() => handleAmounts()}
                />
                <WithdrawBtn
                  value={"500"}
                  setAmount={setAmount}
                  isFocus={isFocus}
                  isSetFocus={isSetFocus}
                  amount={amount}
                  onClick={() => handleAmounts()}
                />
                <WithdrawBtn
                  value={"1000"}
                  setAmount={setAmount}
                  isFocus={isFocus}
                  isSetFocus={isSetFocus}
                  amount={amount}
                  onClick={() => handleAmounts()}
                />
                <WithdrawBtn
                  value={"1500"}
                  setAmount={setAmount}
                  isFocus={isFocus}
                  isSetFocus={isSetFocus}
                  amount={amount}
                  onClick={() => handleAmounts()}
                />

                <input
                  type={"button"}
                  className="Withdrawal_button btn_effect"
                  value={"OTHER"}
                  onClick={() => setOtherMoneys()}
                />
              </div>
            ) : (
              <div className="btn_inputAmount ">
                <input
                  type="text"
                  className="btn_inputAmount_input"
                  placeholder={"Amount of money ... "}
                  value={0 || amount}
                  onChange={(e) => handleOtherAmount(e)}
                />
                <input
                  type={"button"}
                  className="btn_inputAmount_submit"
                  value={"Enter"}
                  onClick={() => handeleOtherMoneys()}
                />
              </div>
            )}

            <div className="Withdrawal_cofirm">
              <div className="Withdrawal_cofirm_other">
                <input
                  type="button"
                  value={"CONFIRM"}
                  className="Withdrawal_button_main Withdrawal_button Withdrawl_btn_confirm btn_effect "
                  onClick={(e) => handleSubmit(e)}
                />

                <input
                  type="button"
                  value={"CANCEL"}
                  className="Withdrawal_button_main Withdrawal_button Withdrawl_btn_cancel btn_effect "
                  onClick={() => cancel(0)}
                />
              </div>
            </div>
          </div>

          <button
            onClick={() => handlerSubmit()}
            className="BalanceInquiry_button_main BalanceInquiry_button back-btn  btn_effect"
          >
            GO BACK
          </button>
        </div>
      ) : (
        <Billing amounts={amount} id={id} />
      )}
    </>
  );
}
export default Withdrawal;
