import React, { useEffect } from "react";
import "../garant/garant.scss"
import { NavLink, useLocation } from "react-router-dom";

const Garant = () => {
  const localtions = useLocation()
  useEffect(()=>{
    window.scrollTo(0,0)
  },[localtions])

  return (
    <>
      <div className="container">
        <div className="garant">
          <div className="garant__title">
            <NavLink
              style={{ color: "#454545", textDecoration: "none" }}
              to={"/"}
            >
              Home
            </NavLink>
            <NavLink
              style={{
                color: "#000",
                textDecoration: "none",
                padding: "0 10px",
                marginBottom: "-80px",
                fontWeight: "700",
              }}
              to={"/payment"}
            >
              Garant
            </NavLink>
            <p>Garand</p>
          </div>
          <div className="garant__text">
            <b className="garand__exchange">
              Exchange and return at the buyer's request
            </b>
            <p>
              All products in the NornLight store have a warranty. It is
              declared by the manufacturer and has a certain period of validity
              for various groups of products. If your product fails during the
              warranty period, you can contact us and get a free repair. To do
              this, you need
            </p>
            <ul>
              <li>
                Provide a receipt, invoice, or provide the email or phone number
                specified when placing the order
              </li>
              <li>
                Bring the goods to our warehouse or send them by a transport
                company
              </li>
              <li>
                Afterwards, the product is sent for examination and repair. If
                repair is not possible, we will exchange the product for a
                similar one or refund the money for the purchase.
                Please note that A-Svet is not a service center, but acts as an
              intermediary between the client and the supplier.
              </li>
            </ul>
            <p>
              Therefore,
              repair times may differ for products of different brands.
              for various groups of products. If your product fails during the
              warranty period, you can contact us and get a free repair. To do
              this, you need
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Garant;
