import React, { useContext, useEffect, useState } from "react";
import GoBack from "../../../components/Button/GoBack";
import { useDispatch, useSelector } from "react-redux";
import {
  getPin,
  selectUserPin,
  selectUser,
  updateUserPin,
} from "../../../store/reducers/user";
import { TitleContext } from "../../../Contexts/ToolContext";
import { useParams } from "react-router-dom";

function ChangePin() {
  const accPin = useSelector(selectUserPin);
  const accUser = useSelector(selectUser);
  const [pin, setPin] = useState("");
  const dispatch = useDispatch();
  const params = useParams();
  const id = params.id;
  const { setTitle } = useContext(TitleContext);

  useEffect(() => {
    setTitle("CHANGE PIN");
    dispatch(getPin(id));
    setPin(accPin?.Account?.pin);
  }, []);

  const inputChangePin = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setPin(value);
  };

  const handeleChangePin = (e) => {
    dispatch(updateUserPin({ id, pin }));
  };

  useEffect(() => {
    dispatch(getPin(id));
    setPin("");
  }, [accPin?.Account?.pin]);

  return (
    <div>
      <div className="changepin">
        <h1>CHANGE PIN</h1>
        <table>
          <thead>
            <th>ID</th>
            <th>NAME</th>
            <th>PIN</th>
          </thead>
          <tr key={accPin?.Account?._id} className="selecter">
            <td>{accPin?.Account?._id}</td>
            <td>{accUser?.Account?.accName}</td>
            <td>{accPin?.Account?.pin}</td>
          </tr>
        </table>
      </div>

      <div className="btn_changepin ">
        <input
          type="text"
          className="btn_inputAmount_input"
          value={pin}
          onChange={(e) => inputChangePin(e)}
        />
        <input
          type={"button"}
          className="btn_inputAmount_submit"
          value={"Enter"}
          onClick={() => handeleChangePin()}
        />
      </div>

      <GoBack />
    </div>
  );
}

export default ChangePin;
