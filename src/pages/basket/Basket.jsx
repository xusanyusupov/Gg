import React, { useEffect } from "react";
import "../basket/basket.scss";
import { useStateValue } from "../../context";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";

const Basket = () => {
  const [state, dispatch] = useStateValue();
  const localtions = useLocation()
  useEffect(()=>{
    window.scrollTo(0,0)
  },[localtions])



  const renderCart = state?.cart?.map((item) => (
    <div key={item.id} className="cart">
      <div className="cart__img">
        <img src={item.image} alt={item.title} />
        <div className="cart__img-title">
          <p className="cart__title">{item.title}</p>
          <p className="cart__category">{item.category}</p>
          <p className="cartPrice">{item.price} $ </p>
        </div>
      </div>
      <div className="cart__count">
        <p>All price: {item.amountMiqdor * item.price} $</p>
        <div className="cart__counter">
          <button
            onClick={() => {
              if (item.amountMiqdor <= 1) {
                dispatch({ type: "REMOVE__CART", payload: item });
              } else {
                dispatch({ type: "DEC_CART", payload: item });
              }
            }}
          >
            -
          </button>
          <span>{item.amountMiqdor}</span>
          <button onClick={() => dispatch({ type: "ADD_CART", payload: item })}>
            +
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="container">
       {
        state?.cart?.length ?
        <div className="basket__wrapper">
        <div className="basket" >{renderCart}</div>
        <div className="user__info">
          <form action="">
            <span className="user__in">User name</span>
            <input required type="text" placeholder="Name" />
            <span className="user__in">User surname</span>
            <input required type="text" placeholder="Surname" />
            <span className="user__in">User phone</span>
            <input required type="number" placeholder="Phone number" />
            <span className="user__in">User email</span>
            <input required type="email" placeholder="Email" />
            <span className="user__in">User province</span>
            <select required name="" id="">
              <option value="">Toshkent vil</option>
              <option value="">Sirdaryo vil</option>
              <option value="">Jizzax vil</option>
              <option value="">Samarqand vil</option>
              <option value="">Qashqadaryo vil</option>
              <option value="">Surxondaryo vil</option>
              <option value="">Buxoro vil</option>
              <option value="">Navoiy vil</option>
              <option value="">Xorazm vil</option>
              <option value="">Farg'ona vil</option>
              <option value="">Andijon vil</option>
              <option value="">Namangan vil </option>
            </select>
            <button>Send</button>
          </form>
        </div>
        </div>
      :
     <div className="basket__no">
        <NavLink to={"/"}>
            <button><MdOutlineRemoveShoppingCart className="basket__home" /></button>
            <b>Click to view products</b>
        </NavLink>
     </div>
       }
      </div>
    </>
  );
};

export default Basket;
