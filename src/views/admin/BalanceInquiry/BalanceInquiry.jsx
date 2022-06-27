import React, { useEffect, useContext } from "react";
import { TitleContext } from "../../../Contexts/ToolContext";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectBalance, getBalanceUser } from "../../../store/reducers/user";
import { useNavigate } from "react-router-dom";

function BalanceInquiry() {
  const params = useParams();
  const id = params.id;
  const dispatch = useDispatch();
  const userBalance = useSelector(selectBalance);
  const { setTitle } = useContext(TitleContext);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getBalanceUser(id));
  }, []);

  useEffect(() => {
    setTitle("  BALANCE INQUIRY  ");
  }, []);

  const handlerSubmit = () => {
    navigate(-1);
    setTitle("DASHBOARD ");
  };
  return (
    <div>
      <div className="BalanceInquiry">
        <div className="BalanceInquiry_box  btn_effect">
          <div className="BalanceInquiry_box_lable">ACCOUNT BALANCE</div>
          <h2>AVAILABLE BALANCE : {userBalance?.Account?.balance}$ </h2>
        </div>

        {/* <GoBack /> */}
        <button
          onClick={() => handlerSubmit()}
          className="BalanceInquiry_button_main BalanceInquiry_button back-btn  btn_effect"
        >
          GO BACK
        </button>
      </div>
    </div>
  );
}

export default BalanceInquiry;
