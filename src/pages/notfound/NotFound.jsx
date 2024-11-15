import React from "react";
import "../notfound/notFound.scss";
import { IoHome } from "react-icons/io5";
import not from "../../assets/notfound.svg";

const Notfound = () => {
  return (
    <div className="container">
      <div className="not-found">
        <img src={not} alt="" />

        <button class="not-found__btn">
          <IoHome/> HOME
        </button> 
      </div>
    </div>
  );
};

export default Notfound;
