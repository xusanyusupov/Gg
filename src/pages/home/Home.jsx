import React, { useEffect, useState } from "react";
import "../home/home.scss";
import Hero from "../../components/hero/Hero";
import Category from "../../components/category/Category";
import Product from "../product/Product";
import axios from "axios";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  const [data, setData] = useState(null);
  useEffect(() => {
    const baseURL = "https://6734698fa042ab85d11a0bf2.mockapi.io/products";
    axios.get(baseURL).then((res) => setData(res.data));
  }, []);

  return (
    <>
      <Hero />

      <Category />

      <div className="container">
        <div className="card__wrapper">{<Product data={data}/>}</div>
      </div>
    </>
  );
};

export default Home;
