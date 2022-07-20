import React, { useContext, useEffect, useRef, useState } from "react";
import { TitleContext } from "../../../Contexts/ToolContext";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getListUser,
  selectUsers,
  selectUser,
  UpDateTransfer,
  getBalanceUser,
  selectBalance,
  getUser,
} from "../../../store/reducers/user";
import TransferHistory from "./TransferHistory";

function Transfer() {
  const [amount, setAmount] = useState("");
  const [content, setContent] = useState("");
  const [acc, setAccs] = useState([]);
  const [isInfo, isSetInfo] = useState(false);
  const [isBill, isSetBill] = useState(false);
  const bankuser = useSelector(selectUser);
  const balanceUser = useSelector(selectBalance);
  const { setTitle } = useContext(TitleContext);
  const listAcc = useSelector(selectUsers);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const id = params.id;

  const handlerSubmit = () => {
    setTitle("DASHBOARD");
    navigate(-1);
  };

  const handlerTransfer = (user) => {
    setAccs(user.user);
    isSetInfo(!isInfo);
  };

  const handleOtherAmount = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setAmount(value);
    if (amount > balanceUser.Account.balance) {
      alert("Số tiền của bạn không đủ.");
      setAmount("");
    }
  };

  const handleContent = (e) => {
    const value = e.target.value;
    setContent(value);
  };

  const Continue = () => {
    if (amount === 0) {
      alert("Please enter the amount ");
    } else {
      dispatch(
        UpDateTransfer({
          type: "transfer",
          accNumber: id,
          accNumberReceived: acc._id,
          amount: amount,
          information: content,
        })
      );
      isSetBill(!isBill);
    }
  };
console.log(999,acc)
  useEffect(() => {
    setTitle("TRANSFER");
    dispatch(getListUser());
  }, []);

  useEffect(() => {
    dispatch(getUser(id));
    dispatch(getBalanceUser(id));
  }, [!isBill]);

  var receiver = listAcc.filter((item) => item?._id !== bankuser.Account?._id);

  return (
    <div>
      <div className="transfer">
        <h1>DESCRIPTION AND NOTES OF MONEY TRANSFER</h1>
        {isInfo === false ? (
          <table>
            <thead>
              <th>NAME</th>
              <th>ACCONNT NUMBER</th>
            </thead>

            {receiver.map((user, index) => (
              <tr key={index} className="selecter">
                <td>
                  <nav
                    className="uppercase curser"
                    onClick={() => handlerTransfer({ user })}
                  >
                    {user?.accName}{" "}
                  </nav>
                </td>
                <td>{user?.accNumber}</td>
              </tr>
            ))}
          </table>
        ) : isBill === false ? (
          <div className="transfer_Container">
            <h3>Transferr Information :</h3>
            <div className="transfer_section">
              <h4>Source account : {bankuser?.Account?.accName} </h4>
              <h5>Available balances : {balanceUser?.Account?.balance} $ </h5>
            </div>

            <h3>Beneficiary information :</h3>
            <div className="transfer_section">
              <h4>Beneficiary account : {acc?.accName}</h4>
              <h5>Amount received : {amount} $</h5>
            </div>

            <h3>Transaction information :</h3>
            <div className="transfer_section">
              <div>
                <h4>Amount of money :</h4>{" "}
              </div>
              <div className="transition_btn_inputAmount ">
                <input
                  type="number"
                  className="transtion_btn_inputAmount_input"
                  placeholder={"Amount of money ... "}
                  value={amount}
                  onChange={(e) => handleOtherAmount(e)}
                />
              </div>
            </div>
            <div className="transfer_section">
              <div>
                <h4> Money transfer content:</h4>{" "}
              </div>
              <div className="transition_btn_inputAmount ">
                <input
                  type="text"
                  className="transtion_btn_inputAmount_input"
                  placeholder={"Transfer money... "}
                  value={content}
                  onChange={(e) => handleContent(e)}
                />
              </div>
            </div>
            <div className="transfer_section">
              <input
                type="button"
                value={"continue"}
                className="btn_effect transfer_continue"
                onClick={() => Continue()}
              />
            </div>
          </div>
        ) : (
          <TransferHistory
            bankuser={bankuser}
            acc={acc}
            amount={amount}
            isBill={isBill}
            isSetBill={isSetBill}
            content={content}
          />
        )}
      </div>
      <button
        onClick={() => handlerSubmit()}
        className="BalanceInquiry_button_main BalanceInquiry_button back-btn  btn_effect"
      >
        GO BACK
      </button>
    </div>
  );
}

export default Transfer;
