import React, { useEffect } from "react";
import "../about/about.scss";
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from "react-icons/hi";

import brand1 from "../../assets/brand1.svg";
import brand2 from "../../assets/brand2.svg";
import brand3 from "../../assets/brand3.svg";
import { NavLink, useLocation } from "react-router-dom";

const About = () => {
  const localtions = useLocation()
  useEffect(()=>{
    window.scrollTo(0,0)
  },[localtions])

  return (
    <>
      <div className="container">
        <div className="about">
          <div className="about__pointer">
            <div>
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
                About
              </NavLink>
              <p className="about__title">About company</p>
            </div>
            <div className="about__products">
              <p>170+</p>
              <b>Products</b>
            </div>
            <div className="about__products">
              <p>1000+</p>
              <b>Satisfied customers</b>
            </div>
            <div className="about__products">
              <p>170+</p>
              <b>Products</b>
            </div>
          </div>
          <div className="about__blog">
            <div>
              <p>
                The NORNLIGHT online store offers a wide range of lamps for
                lighting your home or office. Here you will find a variety of
                lamp models, from modern and stylish to classic and elegant. We
                offer high-quality and reliable lamps from the best
                manufacturers that will give you comfort and coziness.
              </p>
            </div>
            <div>
              <p>
                When you buy lamps in our online store, you get an excellent
                price-quality ratio. We deliver all over Russia so that every
                customer can enjoy beautiful light and the convenience of online
                shopping. Contact us today and turn your home into an oasis of
                warmth and light with NORNLIGHT
              </p>
            </div>
            <div>
              <p>
                The NORNLIGHT online store offers a wide range of lamps for
                lighting your home or office. Here you will find a variety of
                lamp models, from modern and stylish to classic and elegant. We
                offer high-quality and reliable lamps from the best
                manufacturers that will give you comfort and coziness.
              </p>
            </div>
            <div>
              <p>
                When you buy lamps in our online store, you get an excellent
                price-quality ratio. We deliver all over Russia so that every
                customer can enjoy beautiful light and the convenience of online
                shopping. Contact us today and turn your home into an oasis of
                warmth and light with price-quality ratio. We deliver all over
                Russia so that every customer can enjoy beautiful light and the
                convenience of online shopping. Contact us today and turn your
                home into an oasis of warmth and light with NORNLIGHT
              </p>
            </div>
          </div>
        </div>
        <div className="about__brand">
            <div className="about__brand-title"><b>Only proven brands</b> <div><button><HiOutlineArrowNarrowLeft/></button><button><HiOutlineArrowNarrowRight/></button></div></div>
        </div>
        <div className="about__brand-img">
          <img src={brand1} alt="" />
          <img src={brand2} alt="" />
          <img src={brand3} alt="" />
          <img src={brand1} alt="" />
          <img src={brand2} alt="" />
          <img src={brand3} alt="" />
          <img src={brand1} alt="" />
          <img src={brand2} alt="" />
        </div>
      </div>
    </>
  );
};

export default About;
