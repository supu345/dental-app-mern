import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import Banner1 from "../assets/banner.png";
import Banner2 from "../assets/banner1.png";
import Banner3 from "../assets/banner2.png";
import Banner4 from "../assets/banner4.png";
const Slider = () => {
  return (
    <div>
      <div className="w-full h-screen bg-gray-100 flex items-center justify-center">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          className="w-full h-[550px]  overflow-hidden shadow-lg"
        >
          <SwiperSlide>
            <div className="relative h-full w-full flex flex-col items-start pl-[100px] justify-center p-4 bg-gray-900 bg-opacity-50">
              <img
                src={Banner1}
                alt="Nature 1"
                className="w-full h-full object-cover absolute top-0 left-0 z-0"
              />
              {/* <div className="relative z-10 text-white">
                <h2 className="text-5xl font-bold mb-4">
                  Discover the Best Deals!
                </h2>
                <p className="mb-6">
                  Shop the latest trends at unbeatable prices. Don't miss out!
                </p>
                <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-blue-600">
                  Shop Now
                </button>
              </div> */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-full w-full flex flex-col  items-start pl-[100px] justify-center p-4 bg-gray-900 bg-opacity-50">
              <img
                src={Banner2}
                alt="Nature 1"
                className="w-full h-full object-cover absolute top-0 left-0 z-0"
              />
              {/* <div className="relative z-10 text-white">
                <h2 className="text-5xl font-bold mb-4">
                  Your One-Stop Shopping Destination
                </h2>
                <p className="mb-6">
                  Find everything you need in one place – fashion, gadgets, and
                  more!
                </p>
                <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-blue-600">
                  Explore Categories
                </button>
              </div> */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-full w-full flex flex-col  items-start pl-[100px] justify-center p-4 bg-gray-900 bg-opacity-50">
              <img
                src={Banner3}
                alt="Nature 1"
                className="w-full h-full object-cover absolute top-0 left-0 z-0"
              />
              {/* <div className="relative z-10 text-white">
                <h2 className="text-5xl font-bold mb-4">
                  Flash Sale – Limited Time Only!
                </h2>
                <p className="mb-6">
                  Up to 70% off on your favorite products. Hurry, shop now!
                </p>
                <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-blue-600">
                  Grab the Deal
                </button>
              </div> */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-full w-full flex flex-col  items-start pl-[100px] justify-center p-4 bg-gray-900 bg-opacity-50">
              <img
                src={Banner4}
                alt="Nature 1"
                className="w-full h-full object-cover absolute top-0 left-0 z-0"
              />
              {/* <div className="relative z-10 text-white">
                <h2 className="text-5xl font-bold mb-4">
                  Flash Sale – Limited Time Only!{" "}
                </h2>
                <p className="mb-6">
                  Up to 70% off on your favorite products. Hurry, shop now!
                </p>
                <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-blue-600">
                  Grab the Deal
                </button>
              </div> */}
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>
            <div className="relative h-full w-full flex flex-col  items-start pl-[100px] justify-center p-4 bg-gray-900 bg-opacity-50">
              <img
                src="https://images.pexels.com/photos/1131575/pexels-photo-1131575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Nature 4"
                className="w-full h-full object-cover absolute top-0 left-0 z-0"
              />
              <div className="relative z-10 text-white">
                <h2 className="text-5xl font-bold mb-4">
                  New Arrivals are Here!
                </h2>
                <p className="mb-6">
                  Be the first to own our exclusive new collection. Shop today!
                </p>
                <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-blue-600">
                  View New Arrivals
                </button>
              </div>
            </div>
          </SwiperSlide> */}
          {/* <SwiperSlide>
            <div className="relative h-full w-full flex flex-col  items-start pl-[100px] justify-center p-4 bg-gray-900 bg-opacity-50">
              <img
                src="https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Nature 4"
                className="w-full h-full object-cover absolute top-0 left-0 z-0"
              />
              <div className="relative z-10 text-white">
                <h2 className="text-5xl font-bold mb-4">E-Bazer Rewards You</h2>
                <p className="mb-6">
                  Earn points on every purchase and enjoy exclusive benefits.
                </p>
                <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-blue-600">
                  Start Saving
                </button>
              </div>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
