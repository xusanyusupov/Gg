import React, { useEffect, useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {useStateValue} from "../../context/index"
import { IoMdHeart } from "react-icons/io";


const Product = ({ data }) => {
    const [state,dispatch] = useStateValue()

  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const show = () => {
    setActiveIndex(0); 
    setShowModal(!showModal);
  };
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);


  return (
    <>
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
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              >
                {data.map((item) => (
                  <SwiperSlide key={item.id}>
                    <img src={item.image} alt={item.title} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="card__modal-items-swip-btn">
                <button className="swip__btn-cancel" onClick={show}>
                  Cancel
                </button>
                <Link to={`/product/${data[activeIndex]?.id}`}>
                  <button className="swip__btn-more">More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      {data?.length > 0 ? (
        data.map((el) => (
          <div key={el.id} className="card" style={{ position: "relative" }}>
            <img onClick={show} src={el.image} alt="" />
            <div className="card__title">
              <Link to={`/product/${el.id}`} className="title__card">
                <b>{el.title}</b>
              </Link>
              <div onClick={()=> dispatch({type:"ADD_CART",payload:el})} className="plusButton">
                <IoAddCircle className="plusIcon" />
              </div>
            </div>
            <p>{el.price}$</p>
            <button
              onClick={()=> dispatch({type:"ADD__WISHLIST", payload:el})}
              className="card__wish"
              style={{ top: "25px", right: "0px", position: "absolute" }}
            >
              {
                state.wishlist?.some(i => i.id === el.id)
                ?
                <IoMdHeart style={{fontSize:"28px"}} />
                :
              <IoMdHeartEmpty style={{color:"var(--main-text)", fontSize:"28px"}}/>
              }
            </button>
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </>
  );
};

export default Product;
