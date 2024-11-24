import React, { useState } from "react";
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

  const toggle = () => {
    setshow(!show);
  };
  return (
    <>
      <header className="header">
        <div className="container">
            {/* top header start  */}
            {
              show &&
              <div onClick={()=>setshow(false)} className="header__overlay"></div>
              }
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
                    <NavLink  onClick={()=>setshow(false)} to={"/payment"}  className="sub-header__link">
                      Payment
                    </NavLink>
                  </span>
                </li>
                <li>
                  <span>
                    <NavLink  onClick={()=>setshow(false)} to={"/about"} className="sub-header__link">
                      About
                    </NavLink>
                  </span>
                </li>
                <li>
                  <span>
                    <NavLink  onClick={()=>setshow(false)} to={"/return"} className="sub-header__link">
                      Return
                    </NavLink>
                  </span>
                </li>
                <li>
                  <span>
                    <NavLink  onClick={()=>setshow(false)} to={"/garant"} className="sub-header__link">
                      Garant
                    </NavLink>
                  </span>
                </li>
                <li>
                  <span>
                    <NavLink  onClick={()=>setshow(false)} to={"/contact"} className="sub-header__link">
                      Contact
                    </NavLink>
                  </span>
                </li>
                <li>
                  <span>
                    <NavLink  onClick={()=>setshow(false)} to={"/blog"} className="sub-header__link">
                      Blog
                    </NavLink>
                  </span>
                </li>
              </ul>
              <a className="sub-header__phone" href="te:8 (800) 890-46-56">8 (800) 890-46-56 <span>Заказать</span></a>
            </div>

            {/* top header end  */}

            {/* main header start  */}
            <nav className="navbar">
                  <Link to={"/"} className="navbar__logo">
                    <img src={headLogo} alt="" />
                  </Link>
                  <button onClick={()=>setshow(true)} className="navbar__category-btn">
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
                <Link to={'/'} className="navbar__action__link none">
                  <IoHomeSharp className="icon" />
                  <span>Home</span>
                </Link>
                <Link to={'/wishlist'} className="navbar__action__link">
                  <FaRegHeart className="icon" />
                  <span>Liked</span>
                </Link>
                <Link to={'/'} className="navbar__action__link">
                  <FiBarChart2 className="icon" />
                  <span>Comparison</span>
                </Link>
                <Link to={'/basket'} className="navbar__action__link">
                  <FaCartShopping className="icon" />
                  <span>Basket</span>
                </Link>
              </div>
            </nav>
            {/* main header end  */}

        </div>
      </header>
    </>
  );
};

export default Header;
