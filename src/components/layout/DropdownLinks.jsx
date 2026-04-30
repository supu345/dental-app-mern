import { NavLink } from "react-router-dom";

const DropdownLinks = () => {
  return (
    <div className="flex flex-col space-y-2 bg-white shadow-md p-4">
      <NavLink
        to="/services"
        className={({ isActive }) =>
          `block px-4 py-2 rounded ${
            isActive ? "bg-blue-500 text-white font-bold" : "text-gray-700"
          }`
        }
      >
        Services
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          `block px-4 py-2 rounded ${
            isActive ? "bg-blue-500 text-white font-bold" : "text-gray-700"
          }`
        }
      >
        About
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `block px-4 py-2 rounded ${
            isActive ? "bg-blue-500 text-white font-bold" : "text-gray-700"
          }`
        }
      >
        Contact1
      </NavLink>
    </div>
  );
};

export default DropdownLinks;
