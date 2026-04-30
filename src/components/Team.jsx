import React from "react";
import { BsStars } from "react-icons/bs";
import { TbDental } from "react-icons/tb";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
import { SlideLeft } from "../utility/animation";
import { SlideRight } from "../utility/animation";
import Shamima from "../assets/shamima3.png";
import Shamima4 from "../assets/shamima4.png";
import Mahim from "../assets/drMahim.png";
import Mahim3 from "../assets/mahim3.png";
import Shamima1 from "../assets/DSC09852-removebg-preview (1).png";
import { FaFacebookF } from "react-icons/fa";
const Team = () => {
  return (
    <div className="mt-[100px] px-5">
      {/* text part */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex flex-col items-center text-center"
      >
        <div className="flex flex-row gap-2  items-center text-[#15B392]">
          <BsStars className="" />
          <p className="uppercase font-bold">Meet Our Dental Team</p>
          <TbDental className="mt-1 font-bold" />
        </div>

        <p className="text-5xl font-semibold py-7 ">Committed to Your Smile</p>
        <p className="mt-2 text-gray-600 max-w-lg px-4">
          Our experienced dental team is here to make every visit positive and
          personalized. With gentle hands and caring hearts.
        </p>
      </motion.div>
      {/* 4 div */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7 px-7 mt-8 ">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <div className="justify-center flex  flex-col md:flex-row gap-4  bg-gradient-to-r from-green-100 via-teal-100 to-blue-100">
            <div className="md:w-1/2 relative group">
              <img
                src={Shamima4}
                alt="Shamima"
                className="w-full h-[380px]  md:h-[320px] object-cover bg-gray-300 rounded-md"
              />
              <div className="absolute inset-0 bg-teal-400/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center">
                  <p className="text-white text-lg md:text-2xl font-bold">
                    Dr. Shamima Alam
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 flex items-center justify-center text-start px-4">
              <div>
                <p className="text-lg font-bold text-[#1f2d3d] py-5">
                  Dr. Shamima Alam
                </p>
                <p>
                  Experienced Dental Surgeon specializing in oral surgery,
                  cosmetic, and restorative dentistry with 16+ years' expertise
                  and advanced laser training.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <div className="justify-center flex  flex-col md:flex-row gap-4  bg-gradient-to-r from-green-100 via-teal-100 to-blue-100">
            <div className="md:w-1/2 relative group">
              <img
                src={Mahim}
                alt="Mahim"
                className="w-full h-[380px]  md:h-[320px] object-cover bg-gray-300 rounded-md"
              />
              <div className="absolute inset-0 bg-teal-400/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center">
                  <p className="text-white text-lg md:text-2xl font-bold">
                    Dr. Mahin Sarwar
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 flex items-center justify-center text-start px-4">
              <div>
                <p className="text-lg font-bold text-[#1f2d3d] py-5">
                  Dr. Mahin Sarwar
                </p>
                <p>
                  Experienced Dental Surgeon specializing in oral surgery,
                  cosmetic, and restorative dentistry with 16+ years' expertise
                  and advanced laser training.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* <motion.div
        variants={SlideUp(0.5)}
        initial="hidden"
        whileInView={"visible"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7 px-6 mt-8"
      >
        <div>
          <div className="relative">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              src={Shamima}
              alt="image"
            />
            <div className="absolute bottom-0 w-[380px] md:w-[260px]  ml-4 md:ml-16 bg-white  mb-8 py-4 text-center rounded-xl">
              <p className="text-lg font-bold text-[#1f2d3d]">
                Dr. Shamima Alam
              </p>
             
            </div>
          </div>
        </div>
        <div>
          <div className="relative">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              src={Mahim3}
              alt="image"
            />
            <div className="absolute bottom-0 w-[380px] md:w-[260px]  ml-4 md:ml-16 bg-white  mb-8 py-4 text-center rounded-xl">
              <p className="text-lg font-bold text-[#1f2d3d]">
                Dr. Mahin Sarwar
              </p>
            
            </div>
          </div>
        </div>
      </motion.div> */}
    </div>
  );
};

export default Team;
