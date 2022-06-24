import React, { useContext, useEffect, useState } from "react";
import { TitleContext } from "../../../Contexts/ToolContext";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getListUser,
  getUsers,
  getUser,
  selectUser,
  UpDateTransfer,
} from "../../../store/reducers/user";

function Transfer() {
  const [amount, setAmount] = useState();
  const [content, setContent] = useState("");
  const [acc, setAccs] = useState([]);
  const [isInfo, isSetInfo] = useState(false);
  const bankuser = useSelector(selectUser);
  const { setTitle } = useContext(TitleContext);
  const listAcc = useSelector(getUsers);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlerSubmit = () => {
    setTitle("DASHBOARD ");
    navigate(-1);
  };

  const handlerTransfer = (user) => {
    setAccs(user.user);
    isSetInfo(!isInfo);
    // dispatch(getUser());
  };

  const handleOtherAmount = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setAmount(value)
    if( amount > bankuser.amount){
        alert("Số tiền của bạn không đủ.")
        setAmount("")
    }
  };

  const handleContent = (e) => {
    const value = e.target.value;
    setContent(value);
  };

  const Continue = () => {
    dispatch(
      UpDateTransfer({
        type: "transfer",
        balance: amount,
        Information: content,
        // receiver_id: acc.id,
        // sender_id: bankuser.id,
        // sender: bankuser.accountName,
        // sender_amount: bankuser.amount,
        // receiver: acc.accountName,
        // receiver_amount: acc.amount,
        // sender_amounts: +bankuser.amount - +amount,
        // receiver_amounts: +acc.amount + +amount,
      })
    );
    isSetInfo(!isInfo);
    navigate(-1);
    setTitle("DASHBOARD ");
  };

  useEffect(() => {
    setTitle("TRANSFER");
    dispatch(getListUser());
  }, []);
  console.log(111111,bankuser)
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

            {listAcc.map((user, index) => (
              <tr key={index} className="selecter">
                <td>
                  <nav
                    className="uppercase"
                    onClick={() => handlerTransfer({ user })}
                  >
                    {user.accName}{" "}
                  </nav>
                </td>
                <td>{user.accNumber}</td>
              </tr>
            ))}
          </table>
        ) : (
          <div>
            <h3>Transferr Information :</h3>
            <div className="transfer_section">
              <h4>Source account : {bankuser.Account.accName} </h4>
              <h4>Available balances : {bankuser.balance} $ </h4>
            </div>

            <h3>Beneficiary information :</h3>
            <div className="transfer_section">
              <h4>Beneficiary account : {acc.accName}</h4>
              <h4>Amount received : {amount} $</h4>
            </div>

            <h3>Transaction information :</h3>
            <div className="transfer_section">
              <div>
                <h4>Amount of money :</h4>{" "}
              </div>
              <div className="transition_btn_inputAmount ">
                <input
                  type="text"
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
                  placeholder={"Transfer money for meals ... "}
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
