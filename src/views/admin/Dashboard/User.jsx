import React, { useContext, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { TitleContext } from "../../../Contexts/ToolContext";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, getUser } from "../../../store/reducers/user";

function User() {
  const { setTitle } = useContext(TitleContext);
  const dispatch = useDispatch();
  const users = useSelector(selectUser);
  const params = useParams();

  useEffect(() => {
    const id = params.id;
    dispatch(getUser(id));
  }, []);

  useEffect(() => {
    setTitle("DASHBOARD");
  }, []);

  return (
    <div className="menu">
      <div className="header_menu">
        <h3>ACCOUNT NUMBER : {users.accountName} </h3>
        <h3>PHONE : {users.accPhone}</h3>
      </div>

      <Outlet />
    </div>
  );
}

export default User;
