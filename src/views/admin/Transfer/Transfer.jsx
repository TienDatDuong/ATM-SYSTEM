import React, { useContext, useEffect, useState } from "react";
import { TitleContext } from "../../../Contexts/ToolContext";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getListUser,
  getUsers,
  selectUser,
  UpDateTransfer,
  getBalanceUser,
  selectBalance,
} from "../../../store/reducers/user";

function Transfer() {
  const [amount, setAmount] = useState();
  const [content, setContent] = useState("");
  const [acc, setAccs] = useState([]);
  const [isInfo, isSetInfo] = useState(false);
  const bankuser = useSelector(selectUser);
  const balanceUser = useSelector(selectBalance);
  const { setTitle } = useContext(TitleContext);
  const listAcc = useSelector(getUsers);
  // const accSender = useSelector(selectUser)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlerSubmit = () => {
    setTitle("DASHBOARD ");
    navigate(-1);
  };

  const handlerTransfer = (user) => {
    console.log(1111, user);
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
  // const Continue = () => {
  //   if (amount > 50) {
  //     dispatch(
  //       UpDateTransfer({
  //         type: "transfer",
  //         transfer_amount: amount,
  //         information: content,
  //         sender_id: bankuser.Account._id,
  //         receiver_id: acc._id,
  //       })
  //     );
  //     isSetInfo(!isInfo);
  //     navigate(-1);
  //     setTitle("DASHBOARD ");
  //   } else {
  //     alert("Please enter the amount ");
  //   }
  // };
   const Continue = () => {
  
      dispatch(
        UpDateTransfer({
          type: "transfer",
          transfer_amount: amount,
          information: content,
          sender_id: bankuser.Account._id,
          receiver_id: acc._id,
        })
      );
      isSetInfo(!isInfo);
      navigate(-1);
      setTitle("DASHBOARD ");
    } 


  useEffect(() => {
    setTitle("TRANSFER");
    dispatch(getListUser());
    dispatch(getBalanceUser(bankuser.Account?._id));
  }, []);
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
        ) : (
          <div className="transfer_Container">
            <h3>Transferr Information :</h3>
            <div className="transfer_section">
              <h4>Source account : {bankuser.Account.accName} </h4>
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
