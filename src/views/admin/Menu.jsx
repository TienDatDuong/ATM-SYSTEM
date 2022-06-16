import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import GoBack from "../../components/Button/GoBack";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getUser } from "../../store/reducers/user";

function Menu() {
  const params = useParams();
  const id = params.id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(id));
  }, []);

  return (
    <>
      <div className="menu">
        <nav>
          <ul className="navBar">
            <Link to="balance-inquiry" className="navBar_item btn_effect">
              BALANCE INQUIRY
            </Link>
            <Link
              to="withdrawal"
              className="navBar_item btn_effect"
              state={{ id }}
            >
              WITHDRAWAL
            </Link>
            <Link to={`transfer`} className="navBar_item btn_effect">
              TRANSACTIONS
            </Link>
            <Link to={`transactions`} className="navBar_item btn_effect">
              TRANSACTIONS
            </Link>
            <Link to={`change PIN`} className="navBar_item btn_effect">
              CHANGE PIN
            </Link>
            <Link to={`change PIN`} className="navBar_item btn_effect">
              OTHER
            </Link>
          </ul>
        </nav>

        <GoBack />
      </div>
    </>
  );
}

export default Menu;
