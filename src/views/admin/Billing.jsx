import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import GoBack from "../../components/Button/GoBack";
import Button from "../../components/Button/Button";
import OtherBtn from "../../components/Button/OtherBtn";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateBalance } from "../../store/actions/balance";

function Billing({ amounts, id }) {
  const [acc, setAcc] = useState("");
  const accSelectors = useSelector((state) => state.balance);
  const dispatch = useDispatch();
  console.log("------datdt", accSelectors);
  // const [fee, setFee] = useState(1500);
  const [user, setUser] = useState([]);
  const [history, setHistory] = useState([]);
  const [isToggle, isSetToggle] = useState(false);
  const navigate = useNavigate();
  const wallet = user.amount;
  console.log("wallet", wallet);
  const totalWallet = +wallet - +amounts;
  const URL =
    "https://628b0319667aea3a3e259443.mockapi.io/api/v1/bank_accounts";

  const date = new Date();
  const today =
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
  const time =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

  useEffect(() => {
    const getDetailUser = async () => {
      const res = await axios.get(`${URL}/${id}`);
      setUser(res.data);
    };
    getDetailUser();
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (amounts % 50 !== 0) {
      alert(
        "transaction failed because money not enought in wallet and the amount must be divisible by 50"
      );
    } else {
      const updateListUser = async () => {
        const res = await axios.put(`${URL}/${id}`, {
          amount: totalWallet,
        });
        // dispatchEvent(amount)
        console.log(res.data);
        dispatch(updateBalance(res.data.amount));
        return res.data;
      };

      updateListUser().then((abc) => {
        setUser(abc);
      });

      const createTranstion = async () => {
        const res = await axios.post(
          `https://628b0319667aea3a3e259443.mockapi.io/api/v1/bank_accounts/1/withdraws`,
          {
            accountNumber: user.accountNumber,
            amount: user.amount,
            requsted_amount: amounts,
            createdAt: { date },
          }
        );
        return res.data;
      };
      createTranstion().then((abc) => setHistory([...history, abc]));
      isSetToggle(true);
    }
  };

  const Continue = () => {
    isSetToggle(false);
    navigate(-1);
  };

  const Succeed = () => {
    isSetToggle(false);
    navigate(-2);
  };

  return (
    <>
      {isToggle === false ? (
        <>
          <div className="bill_container">
            <p className="bill_container_text">Bill</p>
            <p className="bill_container_text">
              ATM transaction - Wallet : <span>{user.amount}$</span>
            </p>
            {/* <p className="bill_container_text">
          DATE : {today} - {time}
        </p> */}
            <p className="bill_container_text">
              Requsted amount : <span>{amounts}$</span>{" "}
            </p>
            {/* <p className="bill_container_text">TERNIMAL FEE : {fee} </p> */}
            <p className="bill_container_text">
              Remaining amount : <span>{totalWallet}$</span>{" "}
            </p>
            <button className="btn" onClick={(e) => handleUpdate(e)}>
              {" "}
              Approve{" "}
            </button>
          </div>

          <GoBack />
        </>
      ) : (
        <div className="BillingInfor">
          <h2>Successful transaction</h2>
          <h2>Thank you for using our service</h2>
          <h2>Do you want to continue making other transactions?</h2>
          <div>
            <input
              type="button"
              value={"Yes"}
              className="Withdrawal_button_other"
              onClick={() => Continue()}
            />
            <input
              type="button"
              value={"No"}
              className="Withdrawal_button_other"
              onClick={() => Succeed()}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Billing;
