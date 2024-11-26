import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../blog/blog.scss"
import blog1 from "../../assets/home1.svg"
import blog2 from "../../assets/home2.svg"
import blog3 from "../../assets/home3.svg"

import { LuArrowUpRight } from "react-icons/lu";

const Blog = () => {
  const localtions = useLocation()
  useEffect(()=>{
    window.scrollTo(0,0)
  },[localtions])

  return (
    <div className="container">
      <div className="blog__title">
        <NavLink style={{ color: "#454545", textDecoration: "none" }} to={"/"}>
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
          Blog
        </NavLink>
        <p>Blog</p>
      </div>
      <div className="blog">
        <div className="blog__card">
          <img src={blog1} alt="" />
          <div className="blog__card-title">
            <p>Как правильно освещать дом снаружи?</p>
            <a href="#"><LuArrowUpRight /></a>
          </div>
          <p>15.11.2024</p>
        </div>
        <div className="blog__card">
          <img src={blog2} alt="" />
          <div className="blog__card-title">
            <p>Как правильно освещать дом снаружи?</p>
            <a href="#"><LuArrowUpRight /></a>
          </div>
          <p>15.11.2024</p>
        </div>
        <div className="blog__card">
          <img src={blog3} alt="" />
          <div className="blog__card-title">
            <p>Как правильно освещать дом снаружи?</p>
            <a href="#"><LuArrowUpRight /></a>
          </div>
          <p>15.11.2024</p>
        </div>
        <div className="blog__card">
          <img src={blog3} alt="" />
          <div className="blog__card-title">
            <p>Как правильно освещать дом снаружи?</p>
            <a href="#"><LuArrowUpRight /></a>
          </div>
          <p>15.11.2024</p>
        </div>
        <div className="blog__card">
          <img src={blog2} alt="" />
          <div className="blog__card-title">
            <p>Как правильно освещать дом снаружи?</p>
            <a href="#"><LuArrowUpRight /></a>
          </div>
          <p>15.11.2024</p>
        </div>
        <div className="blog__card">
          <img src={blog1} alt="" />
          <div className="blog__card-title">
            <p>Как правильно освещать дом снаружи?</p>
            <a href="#"><LuArrowUpRight /></a>
          </div>
          <p>15.11.2024</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
