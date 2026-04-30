import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="py-6 px-6 dark:bg-black text-gray-400 bg-black">
      <div className="flex flex-col md:flex-row pt-9 gap-6">
        <div className=" w-full md:w-1/4">
          <p className="text-2xl font-bold text-center  dark:bg-black ">
            Phone
          </p>
          <p className="text-center mt-7">01999 44 1515 , 01999 55 1616</p>
        </div>
        <div className=" w-full md:w-1/4">
          <p className="text-2xl font-bold text-center  dark:bg-black ">
            Address
          </p>
          <p className="text-center mt-7">
            Havely Complex (1st Floor Behind Walton Showroom), Ka-6, Bashundhara
            Main Road, Dhaka-1229, Bangladesh
          </p>
        </div>
        <div className=" w-full md:w-1/4">
          <p className="text-2xl font-bold text-center  dark:bg-black ">
            Email
          </p>
          <p className="text-center pt-7">info@dentalcouple.com</p>
        </div>
        <div className=" w-full md:w-1/4">
          <p className="text-2xl font-bold text-center  dark:bg-black ">
            Follow Us
          </p>
          <div className="flex flex-row gap-5 ml-[120px] md:ml-[120px] pt-7">
            <Link to="https://www.facebook.com/profile.php?id=61560829131740">
              <FaFacebookF className="bg-blue-800 text-gray-400 p-1 text-3xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
