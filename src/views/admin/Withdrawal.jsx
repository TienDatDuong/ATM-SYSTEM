import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GoBack from "../../components/Button/GoBack";
import OtherBtn from "../../components/Button/OtherBtn";
import WithdrawBtn from "../../components/Button/WithdrawBtn";
import Billing from "./Billing";

function Withdrawal() {
  const [member, setMember] = useState([]);
  const [amount, setAmount] = useState(0);
  const [other, setOther] = useState();
  const [text, setText] = useState("");
  const [isToggleBtn, isSetToggleBtn] = useState(false);
  const [isTranstion, isSetTranstion] = useState(false);
  const params = useParams();
  console.log("params", params);
  const id = params.id;

  const handleOther = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setOther(value);
    setAmount(value);
    isSetToggleBtn(!isTranstion);
  };

  const handleSubmit = () => {
    if (amount === 0 || amount === "") {
      alert("ATM only payments is a multiple of 50 - Please enter the amount");
    } else if (member.amount > amount) {
      isSetTranstion(true);
    } else {
      alert(" money not enought");
    }
  };

  useEffect(() => {
    const getDetailUser = async () => {
      const res = await axios.get(
        `https://628b0319667aea3a3e259443.mockapi.io/api/v1/bank_accounts/${id}`
      );
      setMember(res.data);
    };
    getDetailUser();
  }, []);

  const handeleOtherMoney = () => {
    isSetToggleBtn(!isTranstion);
  };

  return (
    <>
      {!isTranstion && (
        <div className="Withdrawal">
          <h1>Please select an amount </h1>
          <h3>Withdrawal : {amount} $</h3>
          <h2>{text}</h2>

          <div className="Withdrawal_box">
            <WithdrawBtn value={"50"} setAmount={setAmount} />
            <WithdrawBtn value={"100"} setAmount={setAmount} />
            <WithdrawBtn value={"200"} setAmount={setAmount} />
            <WithdrawBtn value={"500"} setAmount={setAmount} />
            <WithdrawBtn value={"1000"} setAmount={setAmount} />
            {isToggleBtn === false ? (
              <input
                type={"button"}
                className="Withdrawal_button"
                value={"Other"}
                onClick={() => handeleOtherMoney()}
              />
            ) : (
              <OtherBtn
                type={"text"}
                value={other}
                placeholder={"Other...."}
                handleOther={handleOther}
                className={"Withdrawal_button_other"}
              />
            )}

            <input
              type="button"
              value={"confirm"}
              className="Withdrawal_button_main Withdrawal_button"
              onClick={(e) => handleSubmit(e)}
            />

            <input
              type="button"
              value={"Cancel"}
              className="Withdrawal_button_main Withdrawal_button"
              onClick={() => setAmount(0)}
            />
          </div>

          <GoBack />
        </div>
      )}
      {<Billing amounts={amount} id={id} />}
    </>
  );
}
export default Withdrawal;
