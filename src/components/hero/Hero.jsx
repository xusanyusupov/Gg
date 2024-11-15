import React from "react";
import "../hero/hero.scss";
// img st 
import heroIMG from "../../assets/heroImg.svg"
// img en 

// swiper st
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Navigation, Autoplay, Pagination } from "swiper/modules"
// swiper en 

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-wrapper">
            <Swiper loop={true} 
            autoplay={{
                delay:3500,
                disableOnInteraction: false
            }} 
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Navigation,Autoplay,Pagination]} className="carousel">
                
                <SwiperSlide className="hero-swipper">
                    <div className="hero-slide">
                        <div className="hero-slideText">
                            <p>15% off all pendant lights until</p>
                            <button>February 5th</button>
                        </div>
                        <div className="hero-slideImg">
                            <img src={heroIMG} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="hero-swipper">
                    <div className="hero-slide">
                        <div className="hero-slideText">
                            <p>everything is cheap with us</p>
                        </div>
                        <div className="hero-slideImg">
                            <img src={heroIMG} alt="" />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="hero-swipper">
                    <div className="hero-slide">
                        <div className="hero-slideText">
                            <p>everything is cheap with us</p>
                        </div>
                        <div className="hero-slideImg">
                            <img src={heroIMG} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Hero;
