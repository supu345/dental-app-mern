import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { MdEmail, MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import logo from "../../assets/logo-1.png";
import LogoText from "../../assets/dental-couple-text1.png";
import { FaCaretDown, FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { ImLinkedin2 } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
export const NavbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Financing",
    link: "/financing",
  },

  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Gallery",
    link: "/gallery",
  },
   {
    name: "Videos",
    link: "/videos",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export const DropdownLinks = [
  {
    name: "General Dentistry",
    link: "/general-dentistry",
  },
  {
    name: "Prosthetic Dentistry",
    link: "/prosthetic-dentistry",
  },
  {
    name: "Cosmetic Dentistry",
    link: "/cosmetic-dentistry",
  },
  {
    name: "Orthodontic Dentistry",
    link: "/orthodontic-dentistry",
  },
  {
    name: "Biological Dentistry",
    link: "/biological-dentistry",
  },
  {
    name: "Radiology",
    link: "/radiology",
  },
  {
    name: "Sterilization",
    link: "/sterilization",
  },
];
// export const NavbarLinksHead = [
//   {
//     name: "Home",
//     link: "/",
//   },
//   {
//     name: "About",
//     link: "/about",
//   },
//   {
//     name: "Contact1",
//     link: "/contact",
//   },

//   {
//     name: "Blog",
//     link: "/blog",
//   },
// ];

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
        {/** */}
        <div className=" bg-gray-200">
          <div className="container py-[1px] px-7 sm:block hidden">
            <div className="flex items-center justify-between py-2">
              <div className="flex flex-row gap-4 items-center">
                <div className="flex flex-row gap-4 items-center">
                  <FaPhoneAlt />
                  <p>01615523438</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <MdEmail />
                  <p>jbfhdu@yahoo.com</p>
                </div>
              </div>
              <div className="flex flex-row gap-4 items-center">
                <FaFacebookF />
                <FaYoutube />
                <IoLogoTwitter />
                <ImLinkedin2 />
                <RiInstagramFill />
              </div>
            </div>
          </div>
        </div>
        <div className="container dark:bg-black dark:text-white px-5  sm:py-0">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 font-bold text-2xl">
              <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
                <div className="flex flex-row gap-2 items-center">
                  <img
                    src={logo}
                    alt="logo"
                    className="h-10 w-10 dark:bg-white"
                  />
                  <img
                    src={LogoText}
                    alt="logo"
                    className="h-20 w-50 dark:bg-white"
                  />
                  {/* <p className="capitalize text-2xl">Dental Couple</p> */}
                </div>
              </Link>
            </div>
            <div className="hidden md:block">
              <ul className="flex items-center gap-6">
                {NavbarLinks.map((data) => (
                  <li
                    className="py-4 font-bold hover:text-teal-500"
                    key={data.name}
                  >
                    <NavLink
                      to={data.link}
                      className={({ isActive }) =>
                        `py-4 font-bold hover:text-teal-500 ${
                          isActive ? "text-teal-500" : ""
                        }`
                      }
                      onClick={(e) => {
                        // Close the menu
                        toggleMenu();

                        // Force scroll to top (even if on same route)
                        setTimeout(() => {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }, 100); // wait for menu to close smoothly
                      }}
                    >
                      {data.name}
                    </NavLink>
                  </li>
                ))}
                <li className="group relative cursor-pointer">
                  <a
                    href="/#home"
                    className="flex h-[72px] font-bold items-center gap-[2px]"
                  >
                    Services
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </a>
                  <div className="absolute -left-9 z-[9999] hidden w-[200px] px-3 py-4 rounded-md bg-white p-2 text-black group-hover:block shadow-md">
                    <ul className="space-y-1">
                      {DropdownLinks.map((data) => (
                        <li key={data.name}>
                          <a
                            className="inline-block w-full rounded-md px-2 hover:bg-primary/20"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              {/* <div className="flex gap-4">
               
                <button
                  onClick={toggleDarkMode}
                  className=" rounded-full p-2 dark:text-white"
                  aria-label="Toggle Dark Mode with Button 1"
                >
                  {darkMode ? <MdLightMode /> : <MdDarkMode />}
                </button>
              </div> */}
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
          <ul className="mt-10 px-6">
            {NavbarLinks.map((data) => (
              <li
                key={data.name}
                className="py-1 border-b border-gray-200 dark:border-gray-600"
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
            <li className="relative group py-2 border-b border-gray-200 dark:border-gray-600">
  <a
    href="/#home"
    className="flex h-[72px] font-bold items-center gap-[2px]"
  >
    Services
    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
  </a>

  <div className="absolute left-0 top-full z-[9999] hidden w-[200px] px-3 py-2 rounded-md bg-white text-black group-hover:block shadow-md">
    <ul className="space-y-1">
      {DropdownLinks.map((data) => (
        <li key={data.name}>
          <a
            className="inline-block w-full rounded-md px-2 hover:bg-primary/20"
            href={data.link}
          >
            {data.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
</li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
