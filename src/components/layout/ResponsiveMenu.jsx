import React, { useState } from "react";
import { NavLink } from "react-router-dom";
//import { NavbarLinks, DropdownLinks } from "./Navbar";
import { FaCaretDown } from "react-icons/fa";

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
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Contact1",
    link: "/contact",
  },
];
const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[85%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <nav className="mt-12">
        <ul className="flex flex-col gap-2">
          <li className="relative">
  seeee
</li>
          {NavbarLinks.map((data) => (
            <li key={data.name}>
              <NavLink
                to={data.link}
                className={({ isActive }) =>
                  `py-4 font-bold hover:text-teal-500 ${
                    isActive ? "text-teal-500" : ""
                  }`
                }
                onClick={() => toggleMenu()}
              >
                {data.name}
              </NavLink>
            </li>
            
          ))}

          {/* Services dropdown */}
          <li className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-2 py-4 font-bold w-full"
            >
              Services <FaCaretDown className={`${showDropdown ? "rotate-180" : ""} transition-transform`} />
            </button>

            {showDropdown && (
              <ul className="mt-2 space-y-2 bg-gray-100 dark:bg-gray-800 rounded-md p-2">
                {DropdownLinks.map((data) => (
                  <li key={data.name}>
                    <a
                      href={data.link}
                      className="block rounded-md px-2 py-1 hover:bg-primary/20"
                      onClick={() => toggleMenu()}
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </nav>

      <div className="footer">{/* Optional footer */}</div>
    </div>
  );
};

export default ResponsiveMenu;
