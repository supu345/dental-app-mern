import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import chamber1 from "../assets/chamber-11.png";
import chamber2 from "../assets/chamber-12.png";
import chamber3 from "../assets/chamber-22.png";
import Mahimpt from "../assets/pt1.jpeg";
import Testimonial from "../components/Testimonial";
import { LayoutGroup, motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
import {
  FaKaaba,
  FaUserCheck,
  FaPrayingHands,
  FaCalendarAlt,
  FaFemale,
  FaTshirt,
  FaClock,
  FaPassport,
  FaChild,
  FaClipboardList,
} from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { FaHandHoldingMedical } from "react-icons/fa";
import { PiHospitalFill } from "react-icons/pi";
import { SlideRight } from "../utility/animation";
import { BsStars } from "react-icons/bs";
import { TbDental } from "react-icons/tb";
import { PiStarFourFill } from "react-icons/pi";
import dental1 from "../assets/dental1.png";
import Team from "../components/Team";
import Service from "../components/Service";
import WhyChoose from "../components/WhyChoose";
import { SlideLeft } from "../utility/animation";
import Tesstimonials from "../components/Tesstimonials";
import Blogs from "../components/Blogs";
import Hero from "../components/Hero";
const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Default to first item open

  const faqs = [
    {
      question: "Book an Appointement",
      answer:
        "Call us today to book your appointment at a time that works best for you. 01999 44 1515, 01999 55 1616",
      icon: <CiCalendarDate />,
    },
    {
      question: "What conditions can manual therapy treat?",
      answer:
        "Manual therapy can treat joint pain, muscle tension, back pain, neck pain, and mobility issues.",
      icon: <FaHandHoldingMedical />,
    },
    {
      question: "Expert Care",
      answer:
        "Receive high-quality treatment from skilled professionals dedicated to your comfort and recovery.",
      icon: <PiHospitalFill />,
    },
   
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <Layout>
      <div className="mt-[50px]">
        <Hero />
        {/* <Slider /> */}
        {/* about*/}

        {/* WHO WE ARE */}
        <motion.div
          variants={SlideRight(0.4)}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col md:flex-row lg:flex-row gap-6 mt-[200px] px-8"
        >
          <div className="w-full md:w-1/2 item-center">
            {/* <div className="flex flex-row gap-2 item-center text-[#15B392]">
              <BsStars className="" />
              <p className="uppercase font-bold">About Us</p>
              <TbDental className="mt-1 font-bold" />
            </div> */}
            <div>
              <p className="text-4xl font-semibold">
                One Smile at a Time, <br />
                We Build Confidence and Care.
              </p>
            </div>
            <div className="text-justify">
              <p className="mt-4 text-sm w-[400px] md:w-[480px] ">
                Every smile has a story — and we’re here to make yours
                unforgettable. At the heart of our care is a commitment to your
                health, comfort, and confidence. Through personalized dental
                solutions, we help you smile brighter, live healthier, and feel
                your very best, one smile at a time.
              </p>
            </div>
            <div className="flex flex-row gap-2 mt-5">
              <img
                src={Mahimpt}
                alt="dental1"
                className="w-[200px] h-[150px]"
              />
              <div>
                <div className="flex flex-row gap-2 items-center text-sm mt-4">
                  <PiStarFourFill className="text-[#15B392]" />
                  <p>Trusted Routine & Specialized Services</p>
                </div>
                <div className="flex flex-row gap-2 items-center text-sm mt-2 ">
                  <PiStarFourFill className="text-[#15B392]" />
                  <p>Nurturing a Healthier Tomorrow, Today</p>
                </div>
                <div className="flex flex-row gap-2 items-center text-sm mt-2">
                  <PiStarFourFill className="text-[#15B392]" />
                  <p>Excellence in Care, Every Day</p>
                </div>
                <div className="flex flex-row gap-2 items-center text-sm mt-2">
                  <PiStarFourFill className="text-[#15B392]" />
                  <p>Raising the Standard in Healthcare</p>
                </div>
              </div>
            </div>
            {/* <div className="flex flex-row w-[200px] mt-6 item-center  gap-2 bg-black rounded-full text-white p-2 pr-4">
              <TbDental className="bg-[#15B392] font-bold rounded-full p-1 text-3xl" />
              <p> read more </p>
            </div> */}
          </div>
          <div className="w-full md:w-1/2 ">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="relative w-fullh-auto"
            >
              {/* Larger background image */}
              <img
                src={Mahimpt}
                alt="photo"
                className="w-full md:w-[500px] h-[330px] md:h-[350px] object-cover  rounded-4xl "
              />
              {/* <div className="absolute inset-0 bg-black opacity-30"></div> */}
              {/* Smaller image positioned over the larger one */}
              <img
                src={chamber2}
                alt="photo"
                className="absolute w-[200px]  h-[300px] sm:w-[200px] sm:h-[160px]  md:w-[300px] md:h-[250px] object-cover top-12  sm:top-16 md:top-50 sm:left-8 md:-left-20  md:right-80 border-[5px] md:border-[10px]  sm:border-[6px] border-white shadow-lg  rounded-4xl"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* team*/}
        <Team />
        <Service />
        {/* 2*/}
        {/* <div className="px-9 py-9 flex flex-col md:flex-row dark:bg-black dark:text-white">
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
            <motion.div
              variants={SlideUp(0.5)}
              initial="hidden"
              whileInView={"visible"}
              className="text-justify"
            >
              <p className="mt-4 text-gray-600 dark:text-white">
                Dr. Shamima Alam is a highly skilled Dental surgeon with 16+
                years of clinical experience in oral surgery, cosmetic
                dentistry, and restorative procedures. A graduate of University
                of Dhaka and post-graduation in Masters of Public Health. Dr.
                Shamima Alam is known for combining advanced surgical techniques
                with a patient-centered approach to care.
              </p>
              <p className="mt-4 text-gray-600 dark:text-white">
                Throughout their career, Dr. Shamima Alam has performed a wide
                range of procedures, including wisdom tooth extractions, dental
                implants, bone grafts, and corrective surgeries. Passionate
                about continuing education, Dr. Shamima Alam stays current with
                the latest advancements in dental technology and surgical
                protocols.
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
                treatments, including scaling, fillings, crowns, veneers, teeth
                whitening, extraction, surgical extraction and more. Known for a
                gentle chairside manner and a commitment to dental excellence,
                Dr. Shamima Alam ensures every patient feels informed,
                comfortable, and cared for.
              </p>
              <br />
              <p>
                Outside of the clinic, Dr. Shamima Alam stays current with the
                latest advancements in dentistry through continuing education
                and professional affiliations such as Advanced training in Laser
                Therapy from Thailand.
              </p>
            </motion.div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 ml-7 flex justify-center">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              src={Shamima}
              alt="image"
              className="h-[350px] sm:h-[450px] md:h-[650px] w-[80%] sm:w-[400px] object-cover"
            />
          </div>
        </div> */}
        {/* 1 */}
        {/* <div className="px-9 py-9 flex flex-col md:flex-row dark:bg-black dark:text-white">
          <div className="w-full md:w-1/2 ml-9 -mt-9">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              src={Mahim}
              alt="image"
              // className="h-[630px] w-[500px] "
              className="h-[350px] sm:h-[450px] md:h-[650px] w-[80%] sm:w-[400px] object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 ">
            <h1 className="text-4xl font-bold">
              Welcome to DENTAL COUPLE in Bashundhara{" "}
            </h1>
            <p className="text-xl font-bold mt-4"> Dr.Mahin Sarwar</p>
            <p className="text-xl font-bold mt-4"> Consultant</p>
            <p className="text-xl font-bold">
              BDS (DU), MPH (SUB), PGT-Oral & Maxillofacial Surgery (BSMMU)
              Advanced Trained in Oral Implant (ICTTTRB) Special Trained in
              Aesthetic Restoration
            </p>
            <motion.div
              variants={SlideUp(0.5)}
              initial="hidden"
              whileInView={"visible"}
              className="text-justify"
            >
              <p className="mt-4 text-gray-600 dark:text-white">
                Dr.Mahin Sarwar is a highly skilled dental surgeon with over 16
                years of experience in providing comprehensive oral healthcare.
                Specializing in Root canal treatment, dental crown/cap, dental
                bridge, aesthetic fillings,dental fillings,oral surgery,
                implantology, maxillofacial procedures, laser treatment etc, Dr.
                Mahin Sarwar is known for precision, compassionate patient care,
                and a commitment to clinical excellence.
              </p>
              <p className="mt-4 text-gray-600 dark:text-white">
                A graduate of Dhaka University, post graduation in Masters of
                Public Health, post graduation training in oral and
                maxillofacial surgery from BSMMU.Dr. Mahin Sarwar has completed
                advanced training in aesthetic restoration, oral implant, laser
                dentistry and continues to stay at the forefront of dental
                innovations through ongoing education and professional
                development. Whether performing complex surgical procedures or
                routine dental treatments, Dr. Mahin Sarwar prioritizes patient
                comfort and long-term oral health.
              </p>
              <br />
              <p className="mt-4 text-gray-600 dark:text-white">
                Currently practicing at Japan Bangladesh Friendship Hospital as
                a Dental Center In charge , Dr. Mahin Sarwar is dedicated to
                restoring smiles and improving lives, one patient at a time.
              </p>
              <br />
            </motion.div>
          </div>
        </div> */}
        <WhyChoose />
        {/* faq */}
        <div className="py-9 px-7 flex flex-col md:flex-row gap-5">
          <motion.div
            variants={SlideRight(0.4)}
            initial="hidden"
            whileInView="visible"
            className="w-full md:w-1/2"
          >
            <img
              src={chamber1}
              alt="image"
              className="h-[550px] object-cover rounded-4xl"
            />
          </motion.div>
          <motion.div
            variants={SlideLeft(0.4)}
            initial="hidden"
            whileInView="visible"
            className="w-full md:w-1/2"
          >
            <div className="px-6">
              <div className="flex flex-row mt-9 mb-5">
                <div className="flex flex-row gap-2 items-center text-[#15B392]">
                  <BsStars />
                  <p className="uppercase font-bold text-[#15B392]">
                    OUR SERVICES
                  </p>
                  <TbDental className="mt-1 font-bold" />
                </div>
              </div>
              <p className="text-5xl font-bold mb-6">
                <span className="text-[#15B392]"> What We Do for</span> Your
                Teeth
              </p>
              <p className="mb-6">
                We are committed to sustainability. Our clinic practices
                eco-friendly initiatives like digital records to reduce paper
                waste and energy-efficient equipment.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 relative">
              {faqs.slice(0, 3).map((faq, index) => (
                <div
                  key={index}
                  className="border border-[#15B392] rounded-lg overflow-hidden  w-[90%] mx-auto bg-white bg-opacity-80"
                >
                  <button
                    className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200"
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex items-center gap-2 text-black font-bold text-xl">
                      <span className="text-3xl text-[#15B392]">
                        {faq.icon}{" "}
                      </span>
                      <span>{faq.question}</span>
                    </div>
                    <span className="text-md">
                      {activeIndex === index ? "-" : "+"}
                    </span>
                  </button>
                  {activeIndex === index && (
                    <div className="p-4 bg-white text-gray-700">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <Tesstimonials />
        <Blogs />
        {/* <div>
          <div className="relative h-[300px] w-full overflow-hidden">
         
            <img
              src="https://images.pexels.com/photos/3845806/pexels-photo-3845806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="image"
              className="h-full w-full object-cover"
            />

          
            <div className="absolute inset-0 bg-black opacity-30"></div>

           
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center uppercase">
              <p className="py-1 text-white text-4xl font-bold">
                Don’t Wait Your Smile Deserves the Best
              </p>
         
            </div>
          </div>
        </div> */}

        {/* service*/}
        {/* <div className="px-6 py-12 dark:bg-black dark:text-white">
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
                <p className="py-2">General Dentistry</p>
                <p className="py-2">Prosthetic Dentistry</p>
                <p className="py-2">Teeth Whitening</p>
                <p className="py-2">Dental Implants</p>
                <p className="py-2">Orthodontics (Braces and Invisalign)</p>
                <p className="py-2">Root Canal Treatment</p>
                <p className="py-2">Cosmetic Dentistry</p>
                <p className="py-2">Pediatric Dentistry</p>
                <p className="py-2">Biological Dentistry</p>
                <p className="py-2">Tooth Extraction</p>
                <p className="py-2">Radiology</p>
                <p className="py-2">Dental Crowns and Bridges</p>
                <p className="py-2">Periodontal (Gum) Therapy</p>
                <p className="py-2">
                  Preventive Dental Care (Cleanings and Check-ups)
                </p>
              </div>
            </div>
           
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
        </div> */}
        {/* Testimonial */}
        {/* <div>
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
         
            <div className="flex flex-col items-center mt-2 mb-9 py-6 bg-white  dark:bg-black h-auto text-center shadow-lg rounded-lg">
              <img
                src={Fahim}
                alt="Fahim"
                className="h-[80px] w-[80px] mx-auto rounded-full"
              />
              <p className="font-bold text-lg md:text-xl mt-4">
                Fahim Al-Rashid
              </p>
              <p className="py-4 px-4 text-sm md:text-base dark:text-white dark:bg-black">
                Exceptional dental care! The staff was friendly, and my smile
                looks better than ever. Highly recommend!
              </p>
            </div>

            
            <div className="flex flex-col items-center mt-2 mb-9 py-6 bg-white  dark:bg-black h-auto text-center shadow-lg rounded-lg">
              <img
                src={Adilah}
                alt="Fahim Rashid"
                className="h-[80px] w-[80px] mx-auto rounded-full"
              />
              <p className="font-bold text-lg md:text-xl mt-4">Adilah Tanzim</p>
              <p className="py-4 px-4 text-sm md:text-base">
                Pain-free procedure with excellent results. The dentist
                explained everything clearly. A truly wonderful dental
                experience!
              </p>
            </div>

           
            <div className="flex flex-col items-center mt-2 mb-9 py-6 bg-white  dark:bg-black h-auto text-center shadow-lg rounded-lg">
              <img
                src={Suparna}
                alt="Jane Smith"
                className="h-[80px] w-[80px] mx-auto rounded-full"
              />
              <p className="font-bold text-lg md:text-xl mt-4">Foyzun Nahar</p>
              <p className="py-4 px-4 text-sm md:text-base">
                State-of-the-art equipment and professional staff made my
                treatment comfortable. My teeth feel amazing now. Great service
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </Layout>
  );
};

export default HomePage;
