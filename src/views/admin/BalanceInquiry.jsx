import React, { useEffect, useContext } from "react";
import { TitleContext } from "../../Contexts/ToolContext";
import { useParams } from "react-router-dom";
import GoBack from "../../components/Button/GoBack";
import { useDispatch, useSelector } from "react-redux";
import { getUser, selectUser } from "../../store/reducers/user";

function BalanceInquiry() {
  const { setTitle } = useContext(TitleContext);
  const params = useParams();
  const id = params.id;
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(getUser(id));
  }, []);

  useEffect(() => {
    setTitle("BALANCE INQUIRY");
  }, []);

  return (
    <div>
      <div className="BalanceInquiry">
        <div className="BalanceInquiry_box  btn_effect">
          <div className="BalanceInquiry_box_lable">ACCOUNT BALANCE</div>
          <h2>AVAILABLE BALANCE : {user.amount}$ </h2>
        </div>

        <GoBack />
      </div>
    </div>
  );
}

export default BalanceInquiry;
