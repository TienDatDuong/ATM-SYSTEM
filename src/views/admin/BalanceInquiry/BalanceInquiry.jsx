import React, { useEffect, useContext } from "react";
import { TitleContext } from "../../../Contexts/ToolContext";
import { useParams } from "react-router-dom";
import GoBack from "../../../components/Button/GoBack";
import { useDispatch, useSelector } from "react-redux";
import { getUser, selectUser } from "../../../store/reducers/user";
import { useNavigate } from "react-router-dom";

function BalanceInquiry() {
  const { setTitle } = useContext(TitleContext);
  const params = useParams();
  const id = params.id;
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUser(id));
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
          <h2>AVAILABLE BALANCE : {user.amount}$ </h2>
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
