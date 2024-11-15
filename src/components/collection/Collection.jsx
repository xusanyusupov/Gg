import React from "react";
import "../../components/collection/Collection.scss"

import category1 from "../../assets/category1.svg";
import category2 from "../../assets/category2.svg";
import category3 from "../../assets/category3.svg";
import category4 from "../../assets/category4.svg";
import category5 from "../../assets/category5.svg";
import category6 from "../../assets/category6.svg";

import { FaAnglesRight } from "react-icons/fa6";
// import Card from "../card/Card";

const Category = () => {
  return (
    <div className="container">
      <div className="category__title">
       
      </div>
      <div className="category">
        {/* card 1 */}
        <div className="category__card">
          <div className="category__text">
            <p>Chandeliers</p>
            <a href="#">
              From 250$ <FaAnglesRight />
            </a>
          </div>
          <div className="category__img">
            <img src={category1} alt="" />
          </div>
        </div>
        {/* card 2  */}
        <div className="category__card">
          <div className="category__text">
            <p>Lighting fixtures</p>
            <a href="#">
              From 250$
              <FaAnglesRight />
            </a>
          </div>
          <div className="category__img">
            <img src={category2} alt="" />
          </div>
        </div>
        {/* card 3 */}
        <div className="category__card">
          <div className="category__text">
            <p>Sconce</p>
            <a href="#">
              From 300$
              <FaAnglesRight />
            </a>
          </div>
          <div className="category__img">
            <img src={category3} alt="" />
          </div>
        </div>
        {/* card 4  */}
        <div className="category__card">
          <div className="category__text">
            <p>Floor lamps</p>
            <a href="#">
              From 350$
              <FaAnglesRight />
            </a>
          </div>
          <div className="category__img">
            <img src={category4} alt="" />
          </div>
        </div>
        {/* card 5 */}
        <div className="category__card">
          <div className="category__text">
            <p>Table lamps</p>
            <a href="#">
              From 250$
              <FaAnglesRight />
            </a>
          </div>
          <div className="category__img">
            <img src={category5} alt="" />
          </div>
        </div>
        {/* card 6  */}
        <div className="category__card">
          <div className="category__text">
            <p>Spots</p>
            <a href="#">
              From 400$
              <FaAnglesRight />
            </a>
          </div>
          <div className="category__img">
            <img src={category6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
