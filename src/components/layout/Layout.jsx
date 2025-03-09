import React, { useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CreateAt from "./CreateAt";
import { FaArrowUp } from "react-icons/fa";

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
      <div
        onClick={scrollTop}
        id="scroll"
        className="fixed bottom-4 right-4 cursor-pointer"
      >
        <button className="bg-yellow-300 p-3 rounded-full shadow-md">
          <span>
            <FaArrowUp />
          </span>
        </button>
      </div>
    </>
  );
};

export default Layout;
