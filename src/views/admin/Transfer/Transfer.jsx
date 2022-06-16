import React, { useContext, useEffect, useState } from "react";
import { TitleContext } from "../../../Contexts/ToolContext";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import user, {
  getListUser,
  getUsers,
  getUser,
  selectUser,
} from "../../../store/reducers/user";

function Transfer() {
  const [acc, setAccs] = useState([]);
  const [isInfo, isSetInfo] = useState(false);
  const dispatch = useDispatch();
  const listAcc = useSelector(getUsers);
  const bankuser = useSelector(selectUser);
  const { setTitle } = useContext(TitleContext);
  const navigate = useNavigate();

  useEffect(() => {
    setTitle("TRANSFER");
    dispatch(getListUser());
    dispatch(getUser());
  }, []);

  const handlerSubmit = () => {
    navigate(-1);
    setTitle("DASHBOARD ");
  };

  const handlerTransfer = (user) => {
    console.log(9999, user.user);
    setAccs(user.user);
    isSetInfo(!isInfo);
  };
  console.log(888, acc);

  return (
    <div>
      <div className="">
        <p>Mô tả và lưu ý giao dịch chuyển tiền</p>
        <h3>Thông tin người chuyển</h3>
        <h4>Tài khoản nguồn : {bankuser.accountName} </h4>
        <h4>Số dư khả dụng : {bankuser.amount} $ </h4>

        {isInfo === false ? (
          <table>
            <thead>
              <th>NAME</th>
              <th>AMOUNT</th>
              <th>ACCONNT NUMBER</th>
            </thead>

            {listAcc.map((user, index) => (
              <tr key={index} className="selecter">
                <td>
                  <nav
                    className="uppercase"
                    onClick={() => handlerTransfer({ user })}
                  >
                    {user.accountName}{" "}
                  </nav>
                </td>
                <td className="selecter_number">{user.amount} $ </td>
                <td>{user.accNumber}</td>
              </tr>
            ))}
          </table>
        ) : (
          <div>
            <h3>Thông tin người hưởng</h3>
            <h4>Tài khoản hưởng : {acc.user.accountName}</h4>
            {/* <h4>Số tiền chuyển khoản : {acc.user.amount}</h4> */}
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

//  <>
{
  /* <p>Mô tả và lưu ý giao dịch chuyển tiền</p>
<h3>Thông tin người chuyển</h3>
<h4>Tài khoản nguồn</h4>
<select name="" id="">
  {listAcc.map((acc) => (
    <option value="">
      <ul>
        <li>{acc.accountName}</li>
        {/* <li>{acc.amount}</li> */
}
//       </ul>
//     </option>
//   ))}
// </select>
// </> */}
