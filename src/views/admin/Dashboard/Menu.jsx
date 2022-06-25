import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import GoBack from "../../../components/Button/GoBack";

function Menu() {
  return (
    <>
      <div className="sub_menu">
        <nav>
          <ul className="navBar">
            <Link to="balance-inquiry" className="navBar_item btn_effect">
              BALANCE INQUIRY
            </Link>
            <Link to="withdrawal" className="navBar_item btn_effect">
              WITHDRAWAL
            </Link>
            <Link to={`transactions`} className="navBar_item btn_effect">
              TRANSACTIONS
            </Link>
            <Link to={`transfer`} className="navBar_item btn_effect">
              TRANSFER
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
