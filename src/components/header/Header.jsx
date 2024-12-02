import React, { useEffect, useState } from "react";
import "../header/header.scss";
import { Link, NavLink } from "react-router-dom";

// img st
import headLogo from "../../assets/headLogo.svg";
// img en

// icon st
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FiBarChart2 } from "react-icons/fi";
import { IoHomeSharp } from "react-icons/io5";
// icpn en

const Header = () => {
  const [show, setshow] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggle = () => {
    setshow(!show);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="container">
          {/* top header start  */}
          {show && (
            <div
              onClick={() => setshow(false)}
              className="header__overlay"
            ></div>
          )}
          <div className={`sub-header ${show ? "show" : ""}`}>
            <ul className="sub-header__collection">
              <li>
                <span>
                  <NavLink to={"/"} className="sub-header__link">
                    Home
                  </NavLink>
                </span>
              </li>
              <li>
                <span>
                  <NavLink
                    onClick={() => setshow(false)}
                    to={"/payment"}
                    className="sub-header__link"
                  >
                    Payment
                  </NavLink>
                </span>
              </li>
              <li>
                <span>
                  <NavLink
                    onClick={() => setshow(false)}
                    to={"/about"}
                    className="sub-header__link"
                  >
                    About
                  </NavLink>
                </span>
              </li>
              <li>
                <span>
                  <NavLink
                    onClick={() => setshow(false)}
                    to={"/return"}
                    className="sub-header__link"
                  >
                    Return
                  </NavLink>
                </span>
              </li>
              <li>
                <span>
                  <NavLink
                    onClick={() => setshow(false)}
                    to={"/garant"}
                    className="sub-header__link"
                  >
                    Garant
                  </NavLink>
                </span>
              </li>
              <li>
                <span>
                  <NavLink
                    onClick={() => setshow(false)}
                    to={"/contact"}
                    className="sub-header__link"
                  >
                    Contact
                  </NavLink>
                </span>
              </li>
              <li>
                <span>
                  <NavLink
                    onClick={() => setshow(false)}
                    to={"/blog"}
                    className="sub-header__link"
                  >
                    Blog
                  </NavLink>
                </span>
              </li>
            </ul>
            <a className="sub-header__phone" href="te:8 (800) 890-46-56">
              8 (800) 890-46-56 <span>Заказать</span>
            </a>
          </div>

          {/* top header end  */}

          {/* main header start  */}
          <nav className="navbar">
            <Link to={"/"} className="navbar__logo">
              <img src={headLogo} alt="" />
            </Link>
            <button
              onClick={() => setshow(true)}
              className="navbar__category-btn"
            >
              <HiOutlineBars3CenterLeft />
              <span>Categories</span>
            </button>

            <div className="navbar__search">
              <input
                type="text"
                name=""
                id=""
                placeholder="Search by products"
              />
              <button>
                <IoSearch />
              </button>
            </div>
            <div className="navbar__action">
              <Link to={"/"} className="navbar__action__link none">
                <IoHomeSharp className="icon" />
                <span>Home</span>
              </Link>
              <Link to={"/wishlist"} className="navbar__action__link">
                <FaRegHeart className="icon" />
                <span>Liked</span>
              </Link>
              <Link to={"/"} className="navbar__action__link">
                <FiBarChart2 className="icon" />
                <span>Comparison</span>
              </Link>
              <Link to={"/basket"} className="navbar__action__link">
                <FaCartShopping className="icon" />
                <span>Basket</span>
              </Link>
            </div>
          </nav>
          {/* main header end  */}
        </div>
      </header>

      {window.scrollY < 50 ? null : (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="Btn"
        >
          <svg height="1.2em" className="arrow" viewBox="0 0 512 512">
            <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
          </svg>
          <p className="textBtn">Back to Top</p>
        </button>
      )}
    </>
  );
};

export default Header;
