import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
import Layout from "../components/layout/Layout";
const Blog = () => {
  return (
    <div>
      <Layout>
        <div className=" py-[80px] dark:bg-black dark:text-white">
          <div
            className="relative h-screen bg-local bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/12917374/pexels-photo-12917374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            }}
          >
            {/* Black Overlay */}
            {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

            {/* Content */}
            <div className="relative flex flex-col justify-center items-center h-full text-white z-10">
              <motion.p
                variants={SlideUp(0.5)}
                initial="hidden"
                whileInView={"visible"}
              >
                <p className="text-5xl font-bold mb-4 uppercase ">
                  essential reads
                </p>
              </motion.p>
              <motion.p
                variants={SlideUp(0.7)}
                initial="hidden"
                whileInView={"visible"}
              >
                <p className="text-center max-w-md">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore molestias aliquid ullam ea doloremque officiis nobis
                  quia officia cum eum?
                </p>
              </motion.p>
            </div>
          </div>
          <div className="container mx-auto px-4 flex flex-col md:flex-row gap-6 mt-[70px]">
            {/* Image Section */}
            <div className="w-[400px] md:w-[400px] ">
              <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                src="https://images.pexels.com/photos/6627655/pexels-photo-6627655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2">
              <div className="flex flex-col ml-0 md:ml-9">
                <motion.p
                  variants={SlideUp(0.5)}
                  initial="hidden"
                  whileInView={"visible"}
                >
                  <p className="text-gray-500">Jan 15, 2025</p>
                  <p className="text-4xl md:text-4xl font-bold uppercase font-bebas mt-4">
                    The Ultimate Guide to Oral Hygiene: Tips for a Healthy Smile
                  </p>
                  <p className="mt-4 text-gray-600 dark:text-white">
                    Discover the secrets to maintaining excellent oral hygiene.
                    From brushing and flossing techniques to the best products
                    for your teeth, this guide has everything you need for a
                    brighter, healthier smile.
                  </p>
                </motion.p>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 flex flex-col md:flex-row gap-6 mt-[70px]">
            {/* Image Section */}
            <div className="w-[400px] md:w-[400px] ">
              <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                src="https://images.pexels.com/photos/7608271/pexels-photo-7608271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Catering Service"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2">
              <div className="flex flex-col ml-0 md:ml-9">
                <motion.p
                  variants={SlideUp(0.5)}
                  initial="hidden"
                  whileInView={"visible"}
                >
                  <p className="text-gray-500">Jan 15, 2025</p>
                  <p className="text-4xl md:text-4xl font-bold uppercase font-bebas mt-4">
                    Top 5 Dental Myths Debunked: What You Need to Know
                  </p>
                  <p className="mt-4 text-gray-600 dark:text-white">
                    Are you falling for common dental myths? Learn the truth
                    about teeth whitening, cavity prevention, and more. Protect
                    your oral health with facts, not fiction.
                  </p>
                </motion.p>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 flex flex-col md:flex-row gap-6 mt-[70px]">
            {/* Image Section */}
            <div className="w-[400px] md:w-[400px] ">
              <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                src="https://images.pexels.com/photos/1616001/pexels-photo-1616001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Catering Service"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2">
              <div className="flex flex-col ml-0 md:ml-9">
                <motion.p
                  variants={SlideUp(0.5)}
                  initial="hidden"
                  whileInView={"visible"}
                >
                  <p className="text-gray-500">Jan 15, 2025</p>
                  <p className="text-4xl md:text-4xl font-bold uppercase font-bebas mt-4">
                    The Connection Between Oral Health and Overall Wellness
                  </p>
                  <p className="mt-4 text-gray-600 dark:text-white">
                    Did you know your oral health impacts your overall
                    well-being? Explore how dental care plays a crucial role in
                    preventing heart disease, diabetes, and other health
                    conditions.
                  </p>
                </motion.p>
              </div>
            </div>
          </div>

          {/* <div className=" container flex flex-row gap-6 mt-[70px]">
        <div className="w-1/2">
          <img
            src="https://images.pexels.com/photos/6053926/pexels-photo-6053926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="image"
          />
        </div>
        <div className="w-1/2 ">
          <div className=" flex flex-col ml-9">
            <p>Jan15, 2025</p>
            <p className="text-6xl font-bold uppercase font-bebas">
              Who has the best catering service?
            </p>
            <p className="mt-4 text-gray-600 dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              minima asperiores officia consectetur accusantium quibusdam optio
              neque dolorem voluptatem velit?
            </p>
            <p className="mt-4 text-gray-600 dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              minima asperiores officia consectetur accusantium quibusdam optio
              neque dolorem voluptatem velit?
            </p>
          </div>
        </div>
      </div> */}
        </div>
      </Layout>
    </div>
  );
};

export default Blog;
