import React from "react";
import Layout from "../components/layout/Layout";
import Slider from "../components/slider";
import d1 from "../assets/floss.png";
import d2 from "../assets/clinic.png";
import d3 from "../assets/toothbrush.png";
import d4 from "../assets/dental-implant.png";
import d5 from "../assets/floss2.png";
import d6 from "../assets/medical-report.png";
import d7 from "../assets/scaling.png";
import d8 from "../assets/x-ray.png";
import d9 from "../assets/smile.png";
import d10 from "../assets/medicine.png";
import d11 from "../assets/braces.png";
import d12 from "../assets/tooth.png";

import Testimonial from "../components/Testimonial";
const HomePage = () => {
  return (
    <Layout>
      <div className="mt-[50px]">
        <Slider />
        {/* about*/}
        {/* 1 */}
        <div className="px-9 py-9 flex flex-col md:flex-row dark:bg-black dark:text-white">
          <div className="w-full md:w-1/2 ml-9 mt-6">
            <img
              src="https://jbfh.org.bd/media/doctor-image/Doc-47.webp"
              alt="image"
              className="h-[630px] w-[500px] object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 ">
            <h1 className="text-4xl font-bold">
              Welcome to DENTAL COUPLE in Bashundhara{" "}
            </h1>
            <p className="text-xl font-bold mt-4"> Dr. Mahin Sarwar</p>
            <p className="text-xl font-bold mt-4"> Consultant</p>
            <p className="text-xl font-bold">
              BDS (DU), MPH (SUB), PGT-Oral & Maxillofacial Surgery (BSMMU)
              Advanced Trained in Oral Implant (ICTTTRB) Special Trained in
              Aesthetic Restoration
            </p>
            <p className="mt-4 text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
              explicabo incidunt iste deleniti ducimus eaque sint expedita autem
              odio ipsa, quae nobis maxime porro, error voluptas nulla non
              ullam! Necessitatibus ratione fugiat perspiciatis repellendus. Ut
            </p>
            <p className="mt-4 text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
              explicabo incidunt iste deleniti ducimus eaque sint expedita autem
              odio ipsa, quae nobis maxime porro, error voluptas nulla non
            </p>
            <p className="mt-4 text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
              explicabo incidunt iste deleniti ducimus eaque sint expedita autem
            </p>
          </div>
        </div>

        {/* 2*/}
        <div className="px-9 py-9 flex flex-col md:flex-row dark:bg-black dark:text-white">
          <div className="w-full md:w-1/2 ">
            <h1 className="text-4xl font-bold">
              Welcome to DENTAL COUPLE in Bashundhara{" "}
            </h1>
            <p className="text-xl font-bold mt-4"> Dr.Shamima Alam</p>
            <p className="text-xl font-bold mt-4"> Consultant</p>
            <p className="text-xl font-bold">
              BDS (DU), MPH (SUB), PGT-Oral & Maxillofacial Surgery (BSMMU)
              Advanced Trained in Oral Implant (ICTTTRB) Special Trained in
              Aesthetic Restoration
            </p>
            <p className="mt-4 text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
              explicabo incidunt iste deleniti ducimus eaque sint expedita autem
              odio ipsa, quae nobis maxime porro, error voluptas nulla non
              ullam! Necessitatibus ratione fugiat perspiciatis repellendus. Ut
              corrupti sint ipsam, praesentium nostrum perspiciatis, doloribus
              ab cumque natus modi reprehenderit, velit expedita officia!
            </p>
            <p className="mt-4 text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
              explicabo incidunt iste deleniti ducimus eaque sint expedita autem
              odio ipsa, quae nobis maxime porro, error voluptas nulla non
            </p>
            <p className="mt-4 text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
              explicabo incidunt iste deleniti ducimus eaque sint expedita autem
              odio ipsa, quae nobis maxime porro, error voluptas nulla non
            </p>
          </div>
          <div className="w-full md:w-1/2 ml-7">
            <img
              src="https://jbfh.org.bd/media/doctor-image/dr.shamima_alam.webp"
              alt="image"
              className="h-[650px] w-[500px] object-cover"
            />
          </div>
        </div>

        <div>
          <div className="relative h-[300px] w-full overflow-hidden">
            {/* Image */}
            <img
              src="https://images.pexels.com/photos/3845806/pexels-photo-3845806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="image"
              className="h-full w-full object-cover"
            />

            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black opacity-30"></div>

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center uppercase">
              <p className="py-1 text-white text-md font-bold">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Facere, pariatur!
              </p>
              <p className="py-1 text-2xl font-bold text-white">New Products</p>
            </div>
          </div>
        </div>

        {/* service*/}
        <div className="px-6 py-12 dark:bg-black dark:text-white">
          <p className="text-4xl font-bold">Dental Services</p>

          <div className="py-12 flex flex-col md:flex-row">
            <div
              className="w-full md:w-1/4 bg-black pl-5 font-bold space-y-3 py-7 overflow-y-auto"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/6529111/pexels-photo-6529111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat ",
              }}
            >
              <p className="text-4xl font-bold text-white mb-7">Services</p>
              <div className="text-white text-xl">
                <p className="py-2">Teeth Whitening</p>
                <p className="py-2">Dental Implants</p>
                <p className="py-2">Orthodontics (Braces and Invisalign)</p>
                <p className="py-2">Root Canal Treatment</p>
                <p className="py-2">Cosmetic Dentistry</p>
                <p className="py-2">Pediatric Dentistry</p>
                <p className="py-2">Tooth Extraction</p>
                <p className="py-2">Dental Crowns and Bridges</p>
                <p className="py-2">Periodontal (Gum) Therapy</p>
                <p className="py-2">
                  Preventive Dental Care (Cleanings and Check-ups)
                </p>
              </div>
            </div>
            {/* Services Section */}
            <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-4 gap-5 ml-3">
              <div className="text-center w-full">
                <img src={d1} alt="d1" className="h-[60px] mx-auto" />
                <p className="uppercase font-bold">Teeth Whitening</p>
                <p className="justify-start">
                  Brighten your smile with professional whitening treatments
                  that remove stains and discoloration.
                </p>
              </div>

              <div className="text-center w-full">
                <img src={d2} alt="d1" className="h-[60px] mx-auto" />
                <p className="uppercase font-bold">Dental Implants</p>
                <p className="justify-start">
                  Replace missing teeth with durable, natural-looking implants
                  that restore functionality and aesthetics.
                </p>
              </div>
              <div className="text-center w-full">
                <img src={d3} alt="d1" className="h-[60px] mx-auto" />
                <p className="uppercase font-bold">
                  Orthodontics (Braces and Invisalign)
                </p>
                <p className="justify-start">
                  Straighten misaligned teeth and improve your bite with
                  traditional braces or clear aligners.
                </p>
              </div>

              <div className="text-center w-full">
                <img src={d4} alt="d1" className="h-[60px] mx-auto" />
                <p className="uppercase font-bold">Root Canal Treatment</p>
                <p className="justify-start">
                  Save infected or damaged teeth by removing decay and sealing
                  the root canal to prevent further issues.
                </p>
              </div>

              <div className="text-center w-full">
                <img src={d5} alt="d1" className="h-[60px] mx-auto" />
                <p className="uppercase font-bold">Cosmetic Dentistry</p>
                <p className="justify-start">
                  Enhance your smile with procedures like veneers, bonding, and
                  contouring for a flawless look.
                </p>
              </div>
              <div className="text-center w-full">
                <img src={d6} alt="d1" className="h-[60px] mx-auto" />
                <p className="uppercase font-bold">Pediatric Dentistry</p>
                <p className="justify-start">
                  Specialized dental care for children, focusing on preventive
                  treatments and early oral health education.
                </p>
              </div>
              <div className="text-center w-full">
                <img src={d7} alt="d1" className="h-[60px] mx-auto" />
                <p className="uppercase font-bold">Tooth Extraction</p>
                <p className="justify-start">
                  Safely remove damaged or problematic teeth to maintain overall
                  oral health and comfort.
                </p>
              </div>
              <div className="text-center w-full">
                <img src={d8} alt="d1" className="h-[60px] mx-auto" />
                <p className="uppercase font-bold">Dental Crowns and Bridges</p>
                <p className="justify-start">
                  Restore the strength and appearance of damaged teeth or fill
                  gaps with custom-made crowns and bridges.
                </p>
              </div>
              <div className="text-center w-full">
                <img src={d9} alt="d1" className="h-[60px] mx-auto" />
                <p className="uppercase font-bold">Periodontal (Gum) Therapy</p>
                <p className="justify-start">
                  Treat gum disease with scaling, root planing, and other
                  therapies to protect your gums and teeth.
                </p>
              </div>
              <div className="text-center w-full">
                <img src={d10} alt="d1" className="h-[60px] mx-auto" />
                <p className="uppercase font-bold">
                  Preventive Dental Care (Cleanings and Check-ups)
                </p>
                <p className="justify-start">
                  Maintain a healthy smile with routine cleanings, exams, and
                  personalized oral hygiene advice.
                </p>
              </div>
              <div className="text-center w-full">
                <img src={d11} alt="d1" className="h-[60px] mx-auto" />
                <p className="uppercase font-bold">Dental Examination</p>
                <p className="justify-start">
                  A comprehensive dental check-up to assess oral health,
                  identify issues like cavities, gum disease, and ensure your
                  teeth and gums are in optimal condition.
                </p>
              </div>
              <div className="text-center w-full">
                <img src={d12} alt="d1" className="h-[60px] mx-auto" />
                <p className="uppercase font-bold">Routine Dental Check-Up</p>
                <p className="justify-start">
                  Regular examinations to maintain oral hygiene, detect early
                  signs of dental problems, and provide personalized care for a
                  healthy smile.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial */}

        <p className="text-center text-black dark:text-white dark:bg-black text-5xl font-bold">
          Testimonials
        </p>
        <h1 className="text-xl pt-3 text-center text-black dark:text-white dark:bg-black pb-5">
          What Our Clients Say
        </h1>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-amber-500 gap-6 py-7 px-4 md:px-9 pt-9 w-full dark:text-white dark:bg-black"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/4269365/pexels-photo-4269365.jpeg?auto=compress&cs=tinysrgb&w=600')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Testimonial Card */}
          <div className="flex flex-col items-center mt-2 mb-9 py-6 bg-white  dark:bg-black h-auto text-center shadow-lg rounded-lg">
            <img
              src="https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="John Doe"
              className="h-[80px] w-[80px] mx-auto rounded-full"
            />
            <p className="font-bold text-lg md:text-xl mt-4">John Doe</p>
            <p className="py-4 px-4 text-sm md:text-base dark:text-white dark:bg-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              quae aliquid molestiae sed illo aut earum alias aspernatur iusto!
              Eveniet.
            </p>
          </div>

          {/* Testimonial Card */}
          <div className="flex flex-col items-center mt-2 mb-9 py-6 bg-white  dark:bg-black h-auto text-center shadow-lg rounded-lg">
            <img
              src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Fahim Rashid"
              className="h-[80px] w-[80px] mx-auto rounded-full"
            />
            <p className="font-bold text-lg md:text-xl mt-4">Fahim Rashid</p>
            <p className="py-4 px-4 text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              quae aliquid molestiae sed illo aut earum alias aspernatur iusto!
              Eveniet.
            </p>
          </div>

          {/* Testimonial Card */}
          <div className="flex flex-col items-center mt-2 mb-9 py-6 bg-white  dark:bg-black h-auto text-center shadow-lg rounded-lg">
            <img
              src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Jane Smith"
              className="h-[80px] w-[80px] mx-auto rounded-full"
            />
            <p className="font-bold text-lg md:text-xl mt-4">Jane Smith</p>
            <p className="py-4 px-4 text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              quae aliquid molestiae sed illo aut earum alias aspernatur iusto!
              Eveniet.
            </p>
          </div>
        </div>
        {/* testimonial*/}
      </div>
    </Layout>
  );
};

export default HomePage;
