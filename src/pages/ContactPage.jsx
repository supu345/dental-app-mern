import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
import Layout from "../components/layout/Layout";
import map from "../assets/map.jpg";
const Contact = () => {
  return (
    <div>
      <Layout>
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
                  <p className="text-3xl md:text-5xl font-bold mb-6">
                    Contact us
                  </p>
                </motion.p>

                <motion.p
                  variants={SlideUp(0.7)}
                  initial="hidden"
                  whileInView={"visible"}
                >
                  <p className="text-sm md:text-base mb-8">
                    Hello! Do you have any questions or suggestions about this
                    site, or just want to say Hi? Send a message using the below
                    form. I will get back to you as soon as possible.
                  </p>
                </motion.p>

                <div>
                  <p className="text-2xl font-bold">
                    Havely Complex, ka-6, Bashundhara Main Road,
                  </p>
                  <p className="text-2xl font-bold">Dhaka,Bangladesh</p>
                  <p className="text-xl font-bold mt-8">Call us!</p>
                  <p>01999 44 1515</p>
                  <p>01999 55 1616</p>
                  <div>
                    <img src={map} alt="image" />
                  </div>
                </div>
              </div>

              {/* Image Section */}
              <div className="w-full md:w-1/2 ">
                <motion.img
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                  src="https://images.pexels.com/photos/6627534/pexels-photo-6627534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="image"
                  className="w-full h-auto md:h-[800px] object-cover rounded-xl md:rounded-r-xl"
                />
                {/* <img
              src="https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Contact Us"
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
