import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAxios } from '../../hook/useAxios'
import "../detail/detail.scss"
import { IoStar } from "react-icons/io5";
import { IoAddCircle } from "react-icons/io5";
import { AiOutlineShopping } from "react-icons/ai";

const Detail = () => {

  const {id} = useParams()
  const {data,err} = useAxios(`${id}`)
  

  return (
    <>
      <div className="container">
        <div className="detail">
          <div className='detail__img'>
            <div className='detail__img-col'>
              <img src={data?.image} alt="" />
              <img src={data?.image} alt="" />
              <img src={data?.image} alt="" />
            </div>
            <div className="detail__img-main">
              <img src={data?.image} alt="" />
            </div>
          </div>
          <div className="detail__info">
            <p className='detail__info-category'>{data?.category}</p>
            <p className='detail__info-title'>{data?.title}</p>
            <p className='detail__info-price'>{data?.price}$ great price </p> 
            <div className='detail__info-star'><IoStar className='dt__star' /><IoStar className='dt__star' /><IoStar className='dt__star' /><IoStar className='dt__star' /><IoStar className='dt__star' /></div>
            
            <p className='detail__info-desc-main'>
            <b>Description</b><br />
              {data?.desc}
            </p>
            <div className='detail__info-color'>
              <div className='detail__info-black'></div>
              <div className='detail__info-bisque'></div>
              <div className='detail__info-white'></div>
            </div>
            <div className='detail__info-btn'><button className='detail__info-add'>Add To Card  </button> <button className='detail__info-check'>Checkout Now  </button></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Detail