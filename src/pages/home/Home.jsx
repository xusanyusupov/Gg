import React, { useEffect, useState } from "react";
import "../home/home.scss";
import Hero from "../../components/hero/Hero";
import Category from "../../components/category/Category";
import axios from "axios";
import { IoAddCircle } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { IoMdHeartEmpty } from "react-icons/io";

const Home = () => {
  const [data, setData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const baseURL = "https://6734698fa042ab85d11a0bf2.mockapi.io/products";
    axios.get(baseURL).then((res) => setData(res.data));
  }, []);

  const show = () => {
    setShowModal(!showModal);
  };

  const productRender = data?.map((el) => (
    <div key={el.id} className="card" style={{ position: "relative" }}>
  <img onClick={show} src={el.image} alt="" />
  <div className="card__title">
    <Link to={`/product/${el.id}`} className="title__card">
      <b>{el.title}</b>
    </Link>
    <div className="plusButton">
      <IoAddCircle className="plusIcon" />
    </div>
  </div>
  <p>{el.price}$</p>
  <button
    className="card__wish"
    style={{ top: "25px", right: "25px", position: "absolute" }}
  >
    <IoMdHeartEmpty />
  </button>
</div>

  ));
  // const {id} = useParams()
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <Hero />

      <Category />

      {showModal && (
        <div className="card__modal" onClick={show}>
          <div
            className="card__modal-items"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="card__modal-items-swip">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} 
              >
                {data?.map((card) => (
                  <SwiperSlide key={card.id}>
                    <img src={card.image} alt={card.title} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="card__modal-items-swip-btn">
                <button className="swip__btn-cancel" onClick={show}>
                  Cancel
                </button>
                {data && (
                  <Link to={`/product/${data[activeIndex]?.id}`}>
                    <button className="swip__btn-more">More</button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="container">
        <div className="card__wrapper">{productRender}</div>
      </div>
    </>
  );
};

export default Home;
