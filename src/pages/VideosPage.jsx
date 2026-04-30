import React from "react";
import Layout from "../components/layout/Layout";
import Dental from "../assets/dental5.jpg";
import Ortho from "../assets/orthodontic.png";
import Ortho1 from "../assets/orthodontic1.jpg";
import Ortho2 from "../assets/orthodontic2.jpg";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
import { GoDotFill } from "react-icons/go";
import { FaYoutube } from "react-icons/fa";
const VideosPage = () => {
  return (
    <div>
      <Layout>
        <div className="mt-[130px]">
          <div
            className="relative bg-fixed h-[400px] bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/1089030/pexels-photo-1089030.jpeg')",
            }}
          >
            <div className="relative flex flex-col items-center">
              <motion.p
                variants={SlideUp(0.5)}
                initial="hidden"
                whileInView={"visible"}
                className="text-blue-500 text-5xl md:text-7xl font-bold"
              >
               Videos
              </motion.p>
            </div>
          </div>
        </div>

        {/* Section One */}
       <div className="relative px-6 py-[100px] grid grid-cols-1 md:grid-cols-3 gap-9">
  <div className="relative">
    <img
      src="https://images.pexels.com/photos/5355831/pexels-photo-5355831.jpeg"
      alt="image"
      className="w-full h-auto"
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <FaYoutube className="text-red-600 text-6xl" />
    </div>
  </div>
    <div className="relative">
    <img
      src="https://images.pexels.com/photos/4269694/pexels-photo-4269694.jpeg"
      alt="image"
      className="w-full h-auto"
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <FaYoutube className="text-red-600 text-6xl" />
    </div>
  </div>
    <div className="relative">
    <img
      src="https://images.pexels.com/photos/6528907/pexels-photo-6528907.jpeg"
      alt="image"
      className="w-full h-auto"
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <FaYoutube className="text-red-600 text-6xl" />
    </div>
  </div>
    <div className="relative">
    <img
      src="https://images.pexels.com/photos/6502343/pexels-photo-6502343.jpeg"
      alt="image"
      className="w-full h-auto"
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <FaYoutube className="text-red-600 text-6xl" />
    </div>
  </div>
    <div className="relative">
    <img
      src="https://images.pexels.com/photos/3845766/pexels-photo-3845766.jpeg"
      alt="image"
      className="w-full h-auto"
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <FaYoutube className="text-red-600 text-6xl" />
    </div>
  </div>
    <div className="relative">
    <img
      src="https://images.pexels.com/photos/4269365/pexels-photo-4269365.jpeg"
      alt="image"
      className="w-full h-auto"
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <FaYoutube className="text-red-600 text-6xl" />
    </div>
  </div>
</div>

      </Layout>
    </div>
  );
};


export default VideosPage;
