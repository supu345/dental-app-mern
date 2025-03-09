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
                    alt="John Doe"
                    className="h-[80px] w-[80px] mx-auto rounded-full"
                  />
                  <p className="font-bold text-lg md:text-xl mt-4">John Doe</p>
                  <p className="py-4 px-4 text-sm md:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque quae aliquid molestiae sed illo aut earum alias
                    aspernatur iusto! Eveniet.
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque quae aliquid molestiae sed illo aut earum alias
                    aspernatur iusto! Eveniet.
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
                    Jane Smith
                  </p>
                  <p className="py-4 px-4 text-sm md:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque quae aliquid molestiae sed illo aut earum alias
                    aspernatur iusto! Eveniet.
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
