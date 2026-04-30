import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
const Testimonial = () => {
  return (
    <div>
      <div>
        <div className="px-6 ">
          {/* Parallax Section */}
          <div
            className="bg-fixed h-[500px] bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/4269365/pexels-photo-4269365.jpeg?auto=compress&cs=tinysrgb&w=600')",
            }}
          >
            <div className="flex flex-col items-center">
              <motion.p
                variants={SlideUp(0.5)}
                initial="hidden"
                whileInView={"visible"}
                className="text-sm text-orange-600 font-semibold capitalize"
              >
                <p className="text-center text-black text-5xl font-bold">
                  Testimonials
                </p>
              </motion.p>
              <motion.p
                variants={SlideUp(0.7)}
                initial="hidden"
                whileInView={"visible"}
                className="text-sm text-orange-600 font-semibold capitalize"
              >
                <h1 className="text-xl pt-3 text-black">
                  What Our Clients Say
                </h1>
              </motion.p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-9 mt-6 w-full">
                {/* Testimonial Card */}
                <div className="flex flex-col items-center mt-2 mb-9 py-6 bg-white h-auto text-center shadow-lg rounded-lg">
                  <img
                    src="https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Adilah Tanzim"
                    className="h-[80px] w-[80px] mx-auto rounded-full"
                  />
                  <p className="font-bold text-lg md:text-xl mt-4">
                    Adilah Tanzim
                  </p>
                  <p className="py-4 px-4 text-sm md:text-base">
                    Exceptional dental care! The staff was friendly, and my
                    smile looks better than ever. Highly recommend!
                  </p>
                </div>

                {/* Testimonial Card */}
                <div className="flex flex-col items-center mt-2 mb-9 py-6 bg-white h-auto text-center shadow-lg rounded-lg">
                  <img
                    src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Fahim Rashid"
                    className="h-[80px] w-[80px] mx-auto rounded-full"
                  />
                  <p className="font-bold text-lg md:text-xl mt-4">
                    Fahim Rashid
                  </p>
                  <p className="py-4 px-4 text-sm md:text-base">
                    Pain-free procedure with excellent results. The dentist
                    explained everything clearly. A truly wonderful dental
                    experience!
                  </p>
                </div>

                {/* Testimonial Card */}
                <div className="flex flex-col items-center mt-2 mb-9 py-6 bg-white h-auto text-center shadow-lg rounded-lg">
                  <img
                    src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Jane Smith"
                    className="h-[80px] w-[80px] mx-auto rounded-full"
                  />
                  <p className="font-bold text-lg md:text-xl mt-4">
                    Foyzun Nahar
                  </p>
                  <p className="py-4 px-4 text-sm md:text-base">
                    State-of-the-art equipment and professional staff made my
                    treatment comfortable. My teeth feel amazing now. Great
                    service!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
