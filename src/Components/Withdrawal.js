import React, {  useState } from "react";
import { useNavigate, Link } from "react-router-dom";
function Withdrawal() {
  const [amount, setAmount] = useState();
  const [other, setOther] = useState();
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(-1);
  };

  const handleOther = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setOther(value);
    setAmount(value);
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
        <Link to="Billing" state={{amount:{amount}}}>
          <input
            type="button"
            value={"confirm"}
            className="Withdrawal_button_main Withdrawal_button"
          
          />
        </Link>

        <input
          type="button"
          value={"Cancel"}
          className="Withdrawal_button_main Withdrawal_button"
          // onClick={() => handleTotal()}
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
export default Withdrawal;
