import React, { useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CreateAt from "./CreateAt";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";
import { NavLink, Link, useLocation } from "react-router-dom";
const Layout = (props) => {
  const nav = useRef();

  const scrollTop = () => {
    const scrollStep = -window.scrollY / 50;
    const delay = 10;

    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, delay);
  };

  return (
    <>
      <Navbar nav={nav} />
      {props.children}
      <Footer />
      <CreateAt />

      {/* Scroll to top (Right Bottom) */}
      <div
        onClick={scrollTop}
        className="fixed bottom-4 right-4 cursor-pointer z-50"
      >
        <div className="bg-blue-400 text-white p-3 rounded-full shadow-lg hover:bg-blue-500 transition">
          <FaArrowUp size={20} />
        </div>
      </div>

      {/* WhatsApp Left */}
      {/* <a
        href="https://wa.me/8801XXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 left-4 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <FaWhatsapp size={22} />
      </a> */}

      {/* WhatsApp Right (Above Scroll Button) */}
      <a
        href="https://wa.me/8801XXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-4 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        {/* <FaWhatsapp size={22} /> */}
  <Link
              to="https://web.whatsapp.com/send?phone=+wa.me/8801730702545"
              target="_blank"
              rel="noopener nofollow"
              data-url="https://web.whatsapp.com/send?phone=wa.me/8801730702545"
              data-tab-setting="hover"
              data-mobile-behavior="disable"
              data-flyout="disable"
              title="WhatsApp"
            >
              {" "}
              <FaWhatsapp className="text-white text-3xl bg-green-600 rounded-full p-1 hover:scale-105 transition-transform" />
            </Link>
      </a>
     
     
    </>
  );
};

export default Layout;