import React from 'react'
import logo from "../../assets/headLogo.svg"
import payment from "../../assets/payment.svg"
import "../footer/footer.scss"

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="footer__wrapper">
                <div className='footer__item ft'>
                    <img src={logo} alt="" />
                    <a href="#">8 (800) 890-46-56</a>
                    <img src={payment} alt="" />
                    <a href="#">Privacy Policy</a>
                    <a href="#">User Agreement</a>
                </div>
                <div className="footer__item">
                    <strong>For buyers</strong>
                    <a href="#">About the company</a>
                    <a href="#">Delivery and payment</a>
                    <a href="#">Return</a>
                    <a href="#">Guarantees</a>
                    <a href="#">Contact</a>
                    <a href="#">Blog</a>
                </div>
                <div className="footer__item">
                    <strong>Goods</strong>
                    <a href="#">Chandeliers</a>
                    <a href="#">Lighting fixtures</a>
                    <a href="#">Sconce</a>
                    <a href="#">Floor lamps</a>
                    <a href="#">Accessories</a>
                    <a href="#">Table lamps</a>
                </div>
                <div className="footer__item">
                    <a href="#">Spots</a>
                    <a href="#">Track lights</a>
                    <a href="#">Street lights</a>
                    <a href="#">Technical lighting fixtures</a>
                    <a href="#">LED strips</a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer