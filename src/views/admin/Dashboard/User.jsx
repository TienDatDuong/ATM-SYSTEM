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
  console.log(111,users)
  return (
    <div className="menu">
      <div className="header_menu">
        <h3>ACCOUNT NUMBER : {users?.Account?.accName} </h3>
        <h2>PHONE : {users?.Account?.accPhone}</h2>
      </div>

      <Outlet />
    </div>
  );
}

export default User;
