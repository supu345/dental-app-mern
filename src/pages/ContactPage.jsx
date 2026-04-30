import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
import Layout from "../components/layout/Layout";
import map from "../assets/map.jpg";
import { PiMapPinLight } from "react-icons/pi";
import { FaPhone } from "react-icons/fa6";
import laser from "../assets/dental-laser1.png";
const Contact = () => {
  return (
    <div>
      <Layout>
        {/* parallex */}
        <div
          className="relative bg-fixed h-[500px] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/6627534/pexels-photo-6627534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Content */}
          <div className="relative flex flex-col items-center ">
            <p className="text-center text-white text-5xl font-bold">
              Contact Us
            </p>

            <div className="w-16 h-1 bg-white mt-6 mb-6"></div>
          </div>
        </div>
        <div className="px-6 py-[100px] flex flex-col md:flex-row gap-8">
          {/*1*/}
          <div className="w-full md:w-1/3 bg-gradient-to-r from-green-100 via-teal-100 to-blue-100 text-center justify-center items-center rounded-2xl">
            <div className=" py-8  text-center flex justify-center items-center">
              <FaPhone className="text-8xl p-6 text-white rounded-full bg-[#15B392]" />
            </div>
            <p className="text-3xl font-semibold">Call Us</p>
            <p className="px-7 mt-5 font-bold">01999 44 1515</p>
            <p className="px-7 font-bold">01999 55 1616</p>
            {/* <p className="px-7 mt-5">
              <p className="px-7 mt-5 uppercase mb-9 font-bold">
                view location
              </p>
            </p> */}
          </div>
          {/*2*/}
          <div className="w-full md:w-1/3 bg-gradient-to-r from-green-100 via-teal-100 to-blue-100 text-center justify-center items-center rounded-2xl">
            <img
              src={laser}
              alt=""
              className="h-[440px] w-full object-cover rounded-2xl"
            />
          </div>

          {/*3*/}
          <div className="w-full md:w-1/3 bg-gradient-to-r from-green-100 via-teal-100 to-blue-100 text-center justify-center items-center rounded-2xl">
            <div className=" py-8  text-center flex justify-center items-center">
              <PiMapPinLight
                className="text-8xl p-6 text-white rounded-full
          bg-[#15B392]"
              />
            </div>
            <p className="text-3xl font-semibold">Visit Our Clinic</p>
            <p className="px-7 mt-5">
              Havely Complex (1st Floor Behind Walton Showroom), Ka-6,
              Bashundhara Main Road, Dhaka-1229, Bangladesh
            </p>
            {/* <p className="px-7 mt-5">
              <p className="px-7 mt-5 uppercase mb-9 font-bold">
                view location
              </p>
            </p> */}
          </div>
        </div>
        <div className="dark:bg-black dark:text-white">
          <div className="container mx-auto px-4 pt-[110px] pb-[90px]">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Contact Form Section */}
              <div className="w-full md:w-1/2 bg-slate-100 rounded-xl dark:bg-black dark:text-white p-6 md:p-12">
                <motion.p
                  variants={SlideUp(0.5)}
                  initial="hidden"
                  whileInView={"visible"}
                >
                  <p className="text-2xl md:text-5xl font-bold mb-6">
                    Contact us
                  </p>
                </motion.p>

                <motion.div
                  variants={SlideUp(0.7)}
                  initial="hidden"
                  whileInView={"visible"}
                >
                  <p className="text-sm md:text-base mb-8">
                    Hello! Do you have any questions or suggestions about our
                    service, or just want to say Hi? Send a message using the
                    below form. We will get back to you as soon as possible.
                  </p>
                </motion.div>

                <div>
                  <p className="text-2xl font-bold">
                    Havely Complex(1st Floor Behind Walton Showroom), Ka-6,
                    Bashundhara Main Road, Dhaka-1229
                  </p>
                  <p className="text-2xl font-bold">Dhaka,Bangladesh</p>
                  <p className="text-xl font-bold mt-8">Call us!</p>
                  <p>01999 44 1515</p>
                  <p>01999 55 1616</p>
                  <div className="w-full">
                    {/* <img src={map} alt="image" /> */}

                    <iframe
                      class="map-container"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d439.03753709658616!2d90.42361637354097!3d23.81181132974156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7001e630e5b%3A0x6d8751ac6b361921!2sDental%20Couple!5e0!3m2!1sen!2sbd!4v1746033869219!5m2!1sen!2sbd"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                      className="md:h-[300px] md:w-[500px] mt-5 "
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* Image Section */}
              <div className="w-full md:w-1/2 ">
                <motion.img
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                  src="https://images.pexels.com/photos/5355710/pexels-photo-5355710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="image"
                  className="w-full h-auto md:h-[840px] object-cover rounded-xl md:rounded-r-xl"
                />
                {/* <img
              src="https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Consrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d439.03753709658616!2d90.42361637354097!3d23.81181132974156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7001e630e5b%3A0x6d8751ac6b361921!2sDental%20Couple!5e0!3m2!1sen!2sbd!4v1746033869219!5m2!1sen!2sbd"tact Us"
              className="w-full h-auto md:h-[800px] object-cover rounded-xl md:rounded-r-xl"
            /> */}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Contact;
