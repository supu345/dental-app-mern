import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="py-6 px-6 dark:bg-black dark:text-white">
      <div className="flex flex-col md:flex-row pt-9 gap-6">
        <div className=" w-full md:w-1/4">
          <p className="text-4xl font-extrabold text-center text-slate-600 dark:bg-black dark:text-white">
            Phone
          </p>
          <p className="text-center mt-7">01999 44 1515 , 01999 55 1616</p>
        </div>
        <div className=" w-full md:w-1/4">
          <p className="text-4xl font-extrabold text-center text-slate-600 dark:bg-black dark:text-white">
            Address
          </p>
          <p className="text-center mt-7">
            Havely Complex, ka-6, Bashundhara Main Road,, Dhaka, Bangladesh
          </p>
        </div>
        <div className=" w-full md:w-1/4">
          <p className="text-4xl font-extrabold text-center text-slate-600 dark:bg-black dark:text-white">
            Email
          </p>
          <p className="text-center pt-7">example@gmail.com</p>
        </div>
        <div className=" w-full md:w-1/4">
          <p className="text-4xl font-extrabold text-center text-slate-600 dark:bg-black dark:text-white">
            Follow Us
          </p>
          <div className="flex flex-row gap-5 ml-[200px] md:ml-[120px] pt-7">
            <Link to="https://www.facebook.com/profile.php?id=61560829131740">
              <FaFacebookF className="bg-blue-800 text-white p-1 text-3xl" />
            </Link>

            <IoCall className="bg-blue-800 text-white p-1 text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
