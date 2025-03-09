import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import { FaPinterest } from "react-icons/fa6";
import { FaNewspaper } from "react-icons/fa";
import logo from "../../assets/logo.png";
export const NavbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/",
  },
  {
    name: "Contact",
    link: "/",
  },
  {
    name: "Services",
    link: "/",
  },
  {
    name: "Blog",
    link: "/",
  },
];

export const NavbarLinksHead = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/",
  },
  {
    name: "Contact",
    link: "/",
  },
  {
    name: "Services",
    link: "/",
  },
  {
    name: "Blog",
    link: "/",
  },
];

const Navbar = ({ handleOrderPopup, nav }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="">
      <div
        ref={nav}
        className="fixed top-0 right-0 w-full z-50 bg-white backdrop-blur-sm text-black shadow-md dark:text-white dark:bg-black"
      >
        {/* header1 */}
        {/* <div className="px-9 dark:bg-black bg-slate-200 dark:text-white">
          <div className="container sm:block hidden">
            <div className="flex items-center justify-between">
              <ul className="flex items-center gap-6">
                {NavbarLinksHead.map((data) => (
                  <li className="py-2 text-sm" key={data.name}>
                    <NavLink to={data.link} activeClassName="active">
                      {data.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="flex flex-row gap-2 text-sm">
                <BsFacebook />
                <FaXTwitter />
                <CiYoutube />
                <FaPinterest />
              </div>
            </div>
          </div>
        </div> */}
        <div className="container dark:bg-black dark:text-white px-5 py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 font-bold text-2xl">
              <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
                <div className="flex flex-row gap-2 items-center">
                  <img src={logo} alt="logo" className="h-15 w-15" />
                  <p className="capitalize text-2xl">Dental Couple</p>
                </div>
              </Link>
            </div>
            <div className="hidden md:block">
              <ul className="flex items-center gap-6">
                {NavbarLinks.map((data) => (
                  <li className="py-4" key={data.name}>
                    <NavLink to={data.link} activeClassName="active">
                      {data.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex gap-4">
                {/* Button 1 */}
                <button
                  onClick={toggleDarkMode}
                  className=" rounded-full p-2 dark:text-white"
                  aria-label="Toggle Dark Mode with Button 1"
                >
                  {darkMode ? <MdLightMode /> : <MdDarkMode />}
                </button>
              </div>
            </div>
            <div className="flex gap-4">
              {/* Mobile Hamburger icon */}
              <div className="md:hidden block">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Right-Side Menu */}
        <div
          className={`fixed top-0 right-0 h-screen w-64 bg-white dark:bg-black shadow-lg transform ${
            showMenu ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 z-50`}
        >
          <button
            className="absolute top-4 right-4 text-black dark:text-white"
            onClick={toggleMenu}
          >
            Close
          </button>
          <ul className="mt-16 px-6">
            {NavbarLinks.map((data) => (
              <li
                key={data.name}
                className="py-4 border-b border-gray-200 dark:border-gray-600"
              >
                <NavLink
                  to={data.link}
                  activeClassName="active"
                  onClick={toggleMenu} // Close the menu on link click
                >
                  {data.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
