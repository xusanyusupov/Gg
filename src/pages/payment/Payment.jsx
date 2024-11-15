import React from 'react'
import "../payment/payment.scss"
import { NavLink } from 'react-router-dom'

const Payment = () => {
  return (
    <div className="container">
      <div className='payment'>
        <div className='payment-tw'>
          <div>
            <NavLink style={{ color: "#454545", textDecoration: "none" }} to={"/"}>Home</NavLink> 
            <NavLink style={{ color: "#000", textDecoration: "none",padding:'0 10px' ,marginBottom:'-80px',fontWeight:'700'}} to={"/payment"}>Payment</NavLink>
            <p className='payment-title'>Delivery and payment</p>
          </div>
          <div className='payment-desc-wrap'>
            <div className='payment-desc'>
              <b>Delivery</b>
              <p>Мы осуществляем доставку co склада по Москве и Московской области собственной курьерской службой. Транспортными компаниями нашу продукцию мы доставляем по всей территории РФ, a так же по всем странам СНГ. Сроки доставки: 4—6 недель</p>
            </div>
            <div className='payment-desc'>
              <b>Delivery</b>
              <p>БЕСПЛАТНО доставим в приделах МКАД любой заказ от 5 000 ₽.Заказы свыше 30 000 ₽ имеют бесплатную доставку, включительно 15 км от МКАД</p>
            </div>
            <div className='payment-desc'>
              <b>Payment</b>
              <p>Любой заказ можно забрать самостоятельно по адресу: . Москва, Дмитровское шоссе д.100c2</p>
            </div>
          </div>
        </div>
      </div>
      <div className='payment-map'>
      <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.8730069158732!2d69.27446927654007!3d41.31162620069019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2f4960f131%3A0xe7d3ad898ef8844c!2z0JzQuNC90LjRgdGC0LXRgNGB0YLQstC-INGO0YHRgtC40YbQuNC4!5e0!3m2!1sru!2s!4v1730993843329!5m2!1sru!2s"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
      </div>
    </div>
  )
}
 
export default Payment