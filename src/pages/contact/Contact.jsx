import React, { useEffect } from "react";
import "../contact/contact.scss";
import { NavLink, useLocation } from "react-router-dom";

const Contact = () => {
  const localtions = useLocation()
  useEffect(()=>{
    window.scrollTo(0,0)
  },[localtions])

  return (
    <>
      <div className="container">
        <div className="contact">
          <div>
          <NavLink
                style={{ color: "#454545", textDecoration: "none" }}
                to={"/"}
              >
                Home
              </NavLink>
              <NavLink style={{color: "#000",textDecoration: "none",padding: "0 10px",marginBottom: "-80px",fontWeight: "700",}}to={"/payment"}>About</NavLink>
              <p className="contact__title">Contact</p>
          </div>
          <a href="#" className="tel">8 (800) 890-46-56 Пн-Пт: 10:00 до 19:00:  заказ через корзину Телефоны</a>
        </div>
        <iframe
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.8730069158732!2d69.27446927654007!3d41.31162620069019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2f4960f131%3A0xe7d3ad898ef8844c!2z0JzQuNC90LjRgdGC0LXRgNGB0YLQstC-INGO0YHRgtC40YbQuNC4!5e0!3m2!1sru!2s!4v1730993843329!5m2!1sru!2s"
           height="450"
           style={{ border: 0 }}
           allowFullScreen=""
           loading="lazy"
           referrerPolicy="no-referrer-when-downgrade"
         ></iframe> 
      </div>
    </>
  );
};

export default Contact;