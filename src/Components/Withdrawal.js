import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
function Withdrawal() {
  const location = useLocation();
  console.log("----->", location);
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(location.state.amounts.user.amount);
  const [other, setOther] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleTotal = () => {
    const newTotal = total - amount;
    setTotal(newTotal);
    newTotal = location.state.amounts.user.amount;
  };

  const handleSubmit = () => {
    navigate(-1);
  };

  const handleOther = (e) => {
    setOther(+e.target.value);
    if (other === Number && other % 5 === 0) {
      setText("");
    } else {
      setText("Please enter an amount that is a multiple of 50");
    }
  };


  

  return (
    <div className="Withdrawal">
      <h1>Please select an amount </h1>
      <h3>Withdrawal : {amount} $</h3>
      <h2>{text}</h2>
      <div className="Withdrawal_box">
        <input
          type="button"
          value={"5"}
          className="Withdrawal_button"
          onClick={() => setAmount(5)}
        />
        <input
          type="button"
          value={"1"}
          className="Withdrawal_button"
          onClick={() => setAmount(1)}
        />
        <input
          type="button"
          value={"2"}
          className="Withdrawal_button"
          onClick={() => setAmount(2)}
        />
        <input
          type="button"
          value={"10"}
          className="Withdrawal_button"
          onClick={() => setAmount(10)}
        />
        <input
          type="button"
          value={"15"}
          className="Withdrawal_button"
          onClick={() => setAmount(15)}
        />

        <input
          type="text"
          value={other}
          placeholder="Other...."
          className="Withdrawal_button_other"
          onChange={(e) => handleOther(e)}
        />

        <input
          type="button"
          value={"confirm"}
          className="Withdrawal_button_main Withdrawal_button"
          onClick={() => handleTotal()}
        />

        <input
          type="button"
          value={"confirm"}
          className="Withdrawal_button_main Withdrawal_button"
          onClick={() => handleTotal()}
        />
      </div>

      <button
        onClick={handleSubmit}
        className="Withdrawal_button_main Withdrawal_button back-btn"
      >
        go back
      </button>
    </div>
  );
}
// const numberonly = (input) => {
//   var num = /[^0-9]/gi;
//       input.value = input.value.replace(num,"")

// }
export default Withdrawal;
