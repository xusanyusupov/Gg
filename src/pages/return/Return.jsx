import React, { useEffect } from "react";
import "../return/return.scss";
import { NavLink, useLocation } from "react-router-dom";

const Return = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="container">
      <div className="return">
        <div className="return__title">
        <NavLink
                style={{ color: "#454545", textDecoration: "none" }}
                to={"/"}
              >
                Home
              </NavLink>
              <NavLink style={{color: "#000",textDecoration: "none",padding: "0 10px",marginBottom: "-80px",fontWeight: "700",}}to={"/payment"}>About</NavLink>
          <p className="return__tt">Return</p>
        </div>
        <div className="return__main">
          <div className="return__main-top">
            <b>Exchange and return at the buyer's request</b>
            <p>
              If the product does not suit you for some reason, you have the
              right to return it or exchange it for another one within 7 days*
              from the date of purchase, subject to the following conditions:
            </p>
            <ul>
              <li>
                The product has its original appearance and is in commercial
                condition;
              </li>
              <li>
                The product is fully assembled, including packaging materials;
              </li>
              <li>
                The product is fully assembled, including packaging materials;
              </li>
              <li>
                The product packaging is not damaged and has its original
                commercial appearance;
              </li>
              <li>
                There is a document confirming the purchase in our online store.
              </li>
              <li>
                Goods from other cities can be sent to us by a transport
                company, in which case the services of the transport company are
                paid by the client.
              </li>
              <li>
                Within 14 days for certain brands. When placing an order, check
                with the manager
              </li>
            </ul>
          </div>
          <div className="return__main-top">
            <b>Exchange and return at the buyer's request</b>
            <p>Reasons for exchange or return due to seller error:</p>
            <ul>
              <li>Incomplete product set</li>
              <li>Defective or faulty product</li>
              <li>
                If you find a defect, marriage or incomplete set of the goods,
                you need to take a photo of the defect and send it to
                mail@at-svet.ru, indicating a brief description of the nature of
                the marriage/
              </li>
              <li>
                We will replace the defective product or deliver the missing
                parts. Delivery will be free of charge
              </li>
              <li>
                Refunds are made by transferring funds to the buyer's bank
                account upon receipt of a request from the buyer.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Return;
