import React, { useRef, useState } from "react";
import Layout from "../components/layout/Layout";
import { LayoutGroup, motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
import Shamima from "../assets/drShamima1.png";
import Mahim from "../assets/drMahim.png";
import { BsStars } from "react-icons/bs";
import { TbDental } from "react-icons/tb";
import Finance from "../assets/finance.jpg";
import { MdOutlineArrowRight } from "react-icons/md";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
const FinancingPage = () => {
  return (
    <div>
      <Layout>
        <div className=" py-[80px]  dark:bg-black dark:text-white">
          {/* parallex */}
          <div
            className="relative bg-fixed h-[400px] bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: `url(${Finance})`,
            }}
          >
            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}

            {/* Content */}
            <div className="relative flex flex-col items-center ">
              <p className="text-center text-white text-8xl font-bold ">
                Financing
              </p>
              {/* <div className="relative flex flex-row gap-2 items-center mt-5">
                <p className="text-center text-white text-xl ">Financing</p>
                <p className="text-center text-white text-xl ">/ About Us</p>
              </div> */}
              {/* <div className="w-16 h-1 bg-white mt-6 mb-6"></div> */}
            </div>
          </div>
        </div>
        {/* payment-1 */}
        <div className="text-center">
          <p className="px-9 text-4xl font-bold mb-6">
            Care Within Your Budget
          </p>
          <div className="w-[790px] mx-auto text-center  p-4 ">
            <p className="">
              We are dedicated to delivering quality dental care while ensuring
              your treatment is financially comfortable and accessible. To
              support your needs, we proudly provide a range of flexible payment
              options.
            </p>
            <div className="flex flex-row gap-4 items-center pt-7">
              <MdOutlineArrowRight />
              <p>Cash</p>
            </div>
            <div className="flex flex-row gap-4 items-center pt-4">
              <MdOutlineArrowRight />
              <p>VISA, MasterCard, and American Express</p>
            </div>
            <div className="flex flex-row gap-4 items-center pt-4">
              <MdOutlineArrowRight />
              <p>
                6-, 12 month, no-interest payment plans for VISA MASTER CARD
              </p>
            </div>
            <div className="flex flex-row gap-4 items-center pt-4">
              <MdOutlineArrowRight />
              <p>
                AMERICAN EXPRESS Credit cards of Standard Chartered bank,
                Eastern bank & City bank.
              </p>
            </div>
            <div className="flex flex-row gap-4 items-center pt-4">
              <MdOutlineArrowRight />
              <p>We also accept bKash payment.</p>
            </div>
            <div className="flex flex-row gap-4 items-center pt-4">
              <p>
                Optimal, comprehensive dentistry is what we practice. We base
                our treatment on what is best for you.
              </p>
            </div>
          </div>
        </div>

        {/* payment-2 */}
        <div className="py-9 px-8">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Standard_Chartered_%282021%29.svg"
                alt=""
                className="h-[200px] w-[200px]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://www.ebl.com.bd/assets/media/newsevents/ebl-new-logo111.jpg"
                alt=""
                className="h-[200px] w-[200px]"
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                src="https://www.tbsnews.net/sites/default/files/styles/big_3/public/images/2024/11/26/city_bank.jpg"
                alt=""
                className="h-[150px] w-[150px]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://www.tbsnews.net/sites/default/files/styles/amp_metadata_content_image_min_696px_wide/public/images/2022/09/07/lankabangla.jpg"
                alt=""
                className="h-[200px] w-[200px]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrs0z9JG5_d38XafTu0ON-mPEmCTzXr0OMdw&s"
                  alt=""
                  className="h-[180px] w-[200px]"
                />
              </SwiperSlide>
            </SwiperSlide>

            <SwiperSlide>
              <img
                src=" https://thumbs.dreamstime.com/b/mastercard-logo-icon-mastercard-incorporated-american-multinational-financial-services-corporation-headquartered-204759308.jpg"
                alt=""
                className="h-[180px] w-[200px]"
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                src="https://www.fstech.co.uk/fst/images/American%20Express%20Logo.png"
                alt=""
                className="h-[180px] w-[200px]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://logos-world.net/wp-content/uploads/2024/10/Bkash-Logo.png"
                alt=""
                className="h-[180px] w-[200px]"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        {/* payment-3 */}
        <div className="text-center">
          <p className="px-9 text-4xl font-bold mb-6">
            Booking & Payment Guidelines
          </p>
          <div className="w-[840px] mx-auto text-center  p-4 ">
            <p className="">
              We are dedicated to providing you with the highest quality
              treatment and service. To achieve this, we schedule your
              appointments in advance. This approach ensures several benefits:
            </p>
            <div className="flex flex-row gap-4 items-center pt-7">
              <MdOutlineArrowRight />
              <p>
                You receive the full time required for your treatment, without
                feeling rushed.
              </p>
            </div>
            <div className="flex flex-row gap-4 items-center pt-4">
              <MdOutlineArrowRight />
              <p>
                Your waiting time is minimized because your appointment is
                reserved exclusively for you.
              </p>
            </div>
            <div className="flex flex-row gap-4 items-center pt-4">
              <MdOutlineArrowRight />
              <p>
                Knowing your treatment time and duration in advance allows you
                to plan your personal schedule with ease.
              </p>
            </div>

            <div className="flex flex-row gap-4 items-center pt-4">
              <p>
                Since we allocate specific time slots for each patient, we
                kindly request an advance payment to confirm and secure your
                appointment.
              </p>
            </div>
            <div className="flex flex-row gap-4 items-center pt-4">
              <p>Advance Payment Guidelines</p>
            </div>
            <div className="flex flex-row gap-4 items-center pt-4">
              <MdOutlineArrowRight />
              <p>
                <span className="font-bold">Braces Treatment:</span> A minimum
                of 50% of the total cost is required at the first appointment
                when treatment begins.
              </p>
            </div>
            <div className="flex flex-row gap-4 items-center pt-4">
              <MdOutlineArrowRight />
              <p>
                <span className="font-bold">Dental Implants:</span> Full payment
                is required at the implant placement appointment.
              </p>
            </div>
            <div className="flex flex-row gap-4 items-center pt-4">
              <MdOutlineArrowRight />
              <p>
                <span className="font-bold">Other Treatments:</span> An advance
                payment of 25% of the total fee is required at the appointment
                before your treatment is performed.
              </p>
            </div>
          </div>
        </div>
        {/* payment-4 */}
        <div className="text-center">
          <p className="px-9 text-3xl font-bold mb-6">
            How You Can Complete Your Advance Payment
          </p>
        </div>
        <div className="flex flex-row gap-6 mx-auto w-[500px] ">
          <div className="px-9 mb-4">
            <p className=" text-xl font-bold mb-4">Bank details:</p>
            <p>Account name: Dr. mahim DENTALCOUPLE</p>
            <p>Account number: 123456789</p>
            <p>The Estern Bank</p>
          </div>

          <div>
            <p className=" text-xl font-bold mb-4">bKash details:</p>
            <p> Merchant account: 0123456789</p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default FinancingPage;
