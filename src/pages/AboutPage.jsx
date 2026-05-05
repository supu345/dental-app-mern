import React from "react";
import { LayoutGroup, motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
import Layout from "../components/layout/Layout";
import Shamima from "../assets/drShamima1.png";
import Mahim from "../assets/drMahim.png";

import { BsStars } from "react-icons/bs";
import { TbDental } from "react-icons/tb";
import Service from "../components/Service";
const About = () => {
  return (
    <div>
      <Layout>
        <div className=" py-[80px] px-[50px] dark:bg-black dark:text-white">
          {/* parallex */}
          <div
            className="relative bg-fixed h-[400px] bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage:
                "url('https://plus.unsplash.com/premium_photo-1681843004557-f3128f91aeb7?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Content */}
            <div className="relative flex flex-col items-center ">
              <p className="text-center text-white text-5xl font-bold">
                About Us
              </p>
              <div className="relative flex flex-row gap-2 items-center mt-5">
                <p className="text-center text-white text-xl ">Home</p>
                <p className="text-center text-white text-xl ">/ About Us</p>
              </div>
              {/* <div className="w-16 h-1 bg-white mt-6 mb-6"></div> */}
            </div>
          </div>
          {/*About Us*/}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="px-6 py-[100px] flex flex-col md:flex-row gap-5"
          >
            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/7195317/pexels-photo-7195317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="photo"
                className="rounded-2xl h-[600px] w-full object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <div className="flex flex-row gap-2 item-center  text-teal-700 px-7 py-9">
                <BsStars className="" />
                <p className="uppercase font-bold">About Us</p>
                <TbDental className="mt-1 font-bold" />
              </div>
              <p className="text-5xl px-6 font-bold">
                Committed to Your Health, One Smile at a Time
              </p>

              <p className="py-7  px-6">
                While many placeholder texts exist, they often lose meaning
                through random edits or humor. At Dental Couple Hospital, we
                believe in real care, real words, and truly exceptional service.
              </p>
              <div className="flex flex-col gap-5 px-6 items-center">
                <div className="flex flex-row gap-5 px-6 items-center">
                  <div className="rounded-full bg-teal-600 p-3">
                    <BsStars className="text-5xl text-white  " />
                  </div>
                  <div>
                    <p className="text-xl font-bold">Our Vision</p>
                    <p>
                      To redefine dental care through innovation, compassion,
                      and a commitment to lifelong oral wellness
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-5 px-6 items-center">
                  <div className="rounded-full bg-teal-600 p-3">
                    <TbDental className="text-5xl text-white  " />
                  </div>
                  <div>
                    <p className="text-xl font-bold">Our Mission</p>
                    <p>
                      To provide exceptional, patient-centered dental care using
                      advanced technology in a comfortable and caring
                      environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <div className=" container flex flex-col md:flex-row gap-6 mt-[70px]">
            <div className="w-1/2 ">
              <div className=" flex flex-col ml-2 text-justify">
                <motion.div
                  variants={SlideUp(0.5)}
                  initial="hidden"
                  whileInView={"visible"}
                  className="text-justify"
                >
                  <p className="text-6xl font-bold uppercase font-bebas">
                    Our Story
                  </p>
                  <p className="mt-4 text-gray-600 dark:text-white">
                    Dr. Shamima Alam is a highly skilled Dental surgeon with 16+
                    years of clinical experience in oral surgery, cosmetic
                    dentistry, and restorative procedures. A graduate of
                    University of Dhaka and post-graduation in Masters of Public
                    Health. Dr. Shamima Alam is known for combining advanced
                    surgical techniques with a patient-centered approach to
                    care.
                  </p>
                  <p className="mt-4 text-gray-600 dark:text-white">
                    Throughout their career, Dr. Shamima Alam has performed a
                    wide range of procedures, including wisdom tooth
                    extractions, dental implants, bone grafts, and corrective
                    surgeries. Passionate about continuing education, Dr.
                    Shamima Alam stays current with the latest advancements in
                    dental technology and surgical protocols.
                  </p>
                  <br />
                  <p className="mt-4 text-gray-600 dark:text-white">
                    Dr. Shamima Alam is Chief Consultant of Japan Bangladesh
                    Friendship Hospital (Dental unit), is committed to helping
                    patients achieve optimal oral health through precision,
                    compassion, and education.
                  </p>
                  <br />
                  <p>
                    With expertise in conservative, preventive, restorative, and
                    cosmetic dentistry, Dr. Shamima Alam offers a full range of
                    treatments, including scaling, fillings, crowns, veneers,
                    teeth whitening, extraction, surgical extraction and more.
                    Known for a gentle chairside manner and a commitment to
                    dental excellence, Dr. Shamima Alam ensures every patient
                    feels informed, comfortable, and cared for.
                  </p>
                  <br />
                  <p>
                    Outside of the clinic, Dr. Shamima Alam stays current with
                    the latest advancements in dentistry through continuing
                    education and professional affiliations such as Advanced
                    training in Laser Therapy from Thailand.
                  </p>
                </motion.div>
              </div>
            </div>
            <div className="w-1/2 flex justify-center items-center">
              <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                src={Shamima}
                alt="image"
                className="w-[400px] object-cover"
              />
            </div>
          </div>

          <div className=" container flex flex-col md:flex-row gap-6 mt-[40px]">
            <div className="w-1/2">
              <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                src={Mahim}
                alt="image"
                className="w-[400px] h-full object-cover -mt-6"
              />
            </div>
            <div className="w-1/2 ">
              <div className=" flex flex-col ml-2">
                <motion.div
                  variants={SlideUp(0.5)}
                  initial="hidden"
                  whileInView={"visible"}
                  className="text-justify"
                >
                  <p className="text-6xl font-bold uppercase font-bebas">
                    Our Story
                  </p>
                  <p className="mt-4 text-gray-600 dark:text-white">
                    Dr.Mahin Sarwar is a highly skilled dental surgeon with over
                    16 years of experience in providing comprehensive oral
                    healthcare. Specializing in Root canal treatment, dental
                    crown/cap, dental bridge, aesthetic fillings,dental
                    fillings,oral surgery, implantology, maxillofacial
                    procedures, laser treatment etc, Dr. Mahin Sarwar is known
                    for precision, compassionate patient care, and a commitment
                    to clinical excellence.
                  </p>
                  <p className="mt-4 text-gray-600 dark:text-white">
                    A graduate of Dhaka University, post graduation in Masters
                    of Public Health, post graduation training in oral and
                    maxillofacial surgery from BSMMU.Dr. Mahin Sarwar has
                    completed advanced training in aesthetic restoration, oral
                    implant, laser dentistry and continues to stay at the
                    forefront of dental innovations through ongoing education
                    and professional development. Whether performing complex
                    surgical procedures or routine dental treatments, Dr. Mahin
                    Sarwar prioritizes patient comfort and long-term oral
                    health.
                  </p>
                  <p className="mt-4 text-gray-600 dark:text-white">
                    Currently practicing at Japan Bangladesh Friendship Hospital
                    as a Dental Center In charge , Dr. Mahin Sarwar is dedicated
                    to restoring smiles and improving lives, one patient at a
                    time.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <Service />
      </Layout>
    </div>
  );
};

export default About;
