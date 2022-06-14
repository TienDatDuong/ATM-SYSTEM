import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import GoBack from "../../components/Button/GoBack";
import OtherBtn from "../../components/Button/OtherBtn";
import WithdrawBtn from "../../components/Button/WithdrawBtn";
import Billing from "./Billing";
import { TitleContext } from "../../Contexts/ToolContext";
import {useDispatch,useSelector} from "react-redux"
import {getUser,selectUser} from "../../store/reducerUser/user"

function Withdrawal() {

  const [amount, setAmount] = useState(0);
  const [other, setOther] = useState("OTHER");
  const [text, setText] = useState("");
  const [isToggleBtn, isSetToggleBtn] = useState(false);
  const [isTranstion, isSetTranstion] = useState(false);
  const params = useParams();
  const id = params.id;
  const { setTitle } = useContext(TitleContext);
  const dispatch = useDispatch()
  const getDetailUser = useSelector(selectUser);
  const totalMoney = getDetailUser.amount 

  const handleOther = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setOther(value);
    setAmount(value);
    isSetToggleBtn(!isTranstion);
  };

  const handleSubmit = () => {
    if (amount === 0 || amount === "") {
      alert("ATM only payments is a multiple of 50 - Please enter the amount");
    } else if (totalMoney >= amount) {
      isSetTranstion(true);
    } else {
      alert(" money not enought");
    }
  };

  const handeleOtherMoney = () => {
    isSetToggleBtn(!isTranstion);
  };

  useEffect(() => {
    dispatch(getUser(id))
  }, []);

  useEffect(() => {
    setTitle("WITHDRAWAL");
  }, []);

  return (
    <>
      {isTranstion === false ? (
        <div className="Withdrawal uppercase">
          <h1>Please select an amount</h1>
          <h3>Withdrawal : {amount} $</h3>
          <h2>{text}</h2>

          <div className="Withdrawal_box">
            <WithdrawBtn value={"100"} setAmount={setAmount} />
            <WithdrawBtn value={"200"} setAmount={setAmount} />
            <WithdrawBtn value={"500"} setAmount={setAmount} />
            <WithdrawBtn value={"1000"} setAmount={setAmount} />
            <WithdrawBtn value={"1500"} setAmount={setAmount} />

            {isToggleBtn === false ? (
              <input
                type={"button"}
                className="Withdrawal_button"
                value={"OTHER"}
                onClick={() => handeleOtherMoney()}
              />
            ) 
            :
            (
              <OtherBtn
                type={"text"}
                value={other}
                placeholder={"Other...."}
                handleOther={handleOther}
                className={"Withdrawal_button_other  btn_effect"}
              />
            )}

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
              onClick={() => setAmount(0)}
            />
          </div>

          <GoBack />

        </div>
      ) 
      :
      (
        <Billing amounts={amount} id={id} />
      )}
    </>
  );
}
export default Withdrawal;
