import React, { useEffect } from "react";
import { useStateValue } from "../../context/index";
import Product from "../product/Product";
import "../home/home.scss";
import noLike from "../../assets/nolike.svg";
import { NavLink, useLocation } from "react-router-dom";
import "../wishlist/wishlist.scss";

const Wishlist = () => {
  const [state, dispatch] = useStateValue();
  const localtions = useLocation()
  useEffect(()=>{
    window.scrollTo(0,0)
  },[localtions])

  return (
    <>
      <div className="container">
        {state.wishlist.length === 0 ? (
          <div className="wishlist">
            <NavLink to={"/"}>
              <button>
                <img src={noLike} alt="" />
              </button>
            </NavLink>
            <b>Click to purchase</b>
          </div>
        ) : (
          <div className="card__wrapper">
            <Product data={state.wishlist} />
          </div>
        )}
      </div>
    </>
  );
};

export default Wishlist;
