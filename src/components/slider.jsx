import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

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
                src="https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/445170064_122093896742360971_3812692469333600335_n.png?_nc_cat=111&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=dUsj6z6CWmMQ7kNvgEBHXb_&_nc_oc=AdiOh_N-ftG1TohJmFWeQgThkCY8hb37rWtSnYPe46baEmqRBrrNIToVCNl_OoH8JYX2u79jJetlijqzc8lqhOfM&_nc_zt=23&_nc_ht=scontent.fdac99-1.fna&_nc_gid=AqMcifsUqiK1tVXH4f81eGL&oh=00_AYGxVPfZPi5c53TU68Q3JCB-ES8u7JtNEyJgE34jPIi3CA&oe=67D08FCA"
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
                src="https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/475966832_122156032364360971_1541145119050109793_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=KdoY1yu41mUQ7kNvgEorPTA&_nc_oc=AdhsZn7HcQfoQLzjocJB6i9H2w3UIjh-8zQ354NZxmuaX8X7_tuLN2Y-J3_E2e2rQYchDmaRnm3qaN6vv7COdShI&_nc_zt=23&_nc_ht=scontent.fdac99-1.fna&_nc_gid=APhas1gEljXKJ-alkMIm8zZ&oh=00_AYFlj_2bRJazQ-dqJJentGQEFIvlwEEH9WDp6iXzaEmlbA&oe=67D0C351"
                alt="Nature 2"
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
                src="https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/476000407_122156032370360971_685177374238131751_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=s6cOjQY2KXYQ7kNvgHCEpjY&_nc_oc=AdgI_r2es6wQKjHrq4tHda88RqgzM_spenjbI8iLZZjjCkmN1EgAqNk1nHA2_pv4i4AfjEySalOW5V3Gb3d_D2qs&_nc_zt=23&_nc_ht=scontent.fdac99-1.fna&_nc_gid=APhas1gEljXKJ-alkMIm8zZ&oh=00_AYEaXaDCat-PKXGT42gtcrHlP0FI4HNtZRABmZc_SFEWMQ&oe=67D0B213"
                alt="Nature 3"
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
                src="https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/476351334_122156032130360971_7743266752820918133_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=TOd9EUSp6dYQ7kNvgFEf3wK&_nc_oc=AdhU-vb_hNdnh6qqFX8pjjHMcnjeIiuGWvV6HNG2ErJukUkVYwdSQhBe14DswAZMsZla77UO41E_MkTlnZ0pzdr5&_nc_zt=23&_nc_ht=scontent.fdac99-1.fna&_nc_gid=APhas1gEljXKJ-alkMIm8zZ&oh=00_AYH29K6lLPuYv4q5dw7icSgczx9o2C0MDPF-rMGbym7H0w&oe=67D09E55"
                alt="Nature 4"
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
