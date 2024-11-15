import React, { useEffect, useState } from "react";
import "../home/home.scss";
import Hero from "../../components/hero/Hero";
import Category from "../../components/collection/Category.jsx"
import axios from "axios";
import { IoAddCircle } from "react-icons/io5";

const Home = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const baseURL = "https://6734698fa042ab85d11a0bf2.mockapi.io/products";
    axios.get(baseURL).then((res) => setData(res.data));
  }, []);

  const productRender = data?.map((el) => (
    <div key={el.id} className="card">
      <img src={el.image} alt="" />
      <div className="card__title">
        <b>{el.title}</b>
        <div tabindex="0" className="plusButton">
          <IoAddCircle className="plusIcon" />
        </div>
      </div>
      <p>{el.price}$</p>
    </div>
  ));

  return (
    <>
      <Hero />
      <Category />
      <div className="container">
        <div className="card__wrapper">{productRender}</div>
      </div>
    </>
  );
};

export default Home;
