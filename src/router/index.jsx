import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Return from "../pages/return/Return";
import Garant from "../pages/garant/Garant";
import Contact from "../pages/contact/Contact";
import Blog from "../pages/blog/Blog";

import Layout from "../pages/layout/Layout";
import Payment from "../pages/payment/Payment";
import Detail from "../pages/detail/Detail";
import Notfound from "../pages/notfound/NotFound";
import Wishlist from "../pages/wishlist/Wishlist";
import Basket from "../pages/basket/Basket";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/return" element={<Return />} />
        <Route path="/garant" element={<Garant />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        {/* detail  */}
        <Route path="/product/:id" element={<Detail />} /> 
        {/* detail  */}
        <Route path="wishlist" element={<Wishlist/>}/>
        <Route path="basket" element={<Basket/>}/>
        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
  );
};

export default memo(Router);
