import React from "react";
import Layout from "../components/layout/Layout";
import Fahim from "../assets/fahim.jpg";
import Suparna from "../assets/Foyzun.png";
import Adilah from "../assets/nidhi.jpeg";
import { TbDental, TbDentalBroken } from "react-icons/tb";
import { FaTeeth, FaTooth } from "react-icons/fa";
import { LiaTeethOpenSolid } from "react-icons/lia";
import { MdOutlineMedicationLiquid } from "react-icons/md";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
import Tesstimonials from "../components/Tesstimonials";
import doctor from "../assets/doctor.png";
import doctor1 from "../assets/shamima3.png";
import { BsStars } from "react-icons/bs";
const Services = () => {
  return (
    <div>
      <Layout>
        <div className=" py-[80px] dark:bg-black dark:text-white px-6">
          {/* parallex */}
          <div
            className="relative bg-fixed h-[500px] bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/3845807/pexels-photo-3845807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Content */}
            <div className="relative flex flex-col items-center text-center px-4">
              <p className="text-center text-white text-7xl font-bold">
                Services we offer
              </p>
              <p className="text-xl pt-3 text-white w-full md:w-[800px]">
                Modern Dentistry Machineries and Equipment, Modern Clinical
                practices dedicated for your dental health, Professional and
                Experienced Doctors and their team, Reasonable price and high
                quality service.
                <br />
              </p>
              <div className="w-12 h-1 bg-white mt-2 mb-6"></div>
            </div>
          </div>
          <motion.div
            variants={SlideUp(0.5)}
            initial="hidden"
            whileInView={"visible"}
            className="py-[100px] px-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-8"
          >
            {" "}
            {/*1 */}
            <div className=" bg-teal-100 p-8 rounded-2xl">
              <LiaTeethOpenSolid className="text-6xl text-teal-700" />
              <p className="py-6 text-3xl font-bold text-gray-600">
                Complete Dental & Medical Care
              </p>
              <p className="md:w-[480px]">
                We offer complete dental and medical services in one
                place—combining expert care, modern technology, and a
                patient-first approach to ensure your total health, comfort, and
                long-term wellness.
              </p>
            </div>
            {/*2 */}
            <div className=" bg-teal-100 p-8 rounded-2xl">
              <FaTooth className="text-6xl text-teal-700" />
              <p className="py-6 text-3xl font-bold text-gray-600">
                Healthy Smiles & Healthy Lives
              </p>
              <p className="md:w-[480px]">
                We believe a healthy smile is the foundation of a healthy life.
                Our dedicated team provides compassionate, comprehensive care to
                support your overall well-being—one smile at a time.
              </p>
            </div>
            {/*3 */}
            <div className=" bg-teal-100 p-8 rounded-2xl">
              <MdOutlineMedicationLiquid className="text-6xl text-teal-700" />
              <p className="py-6 text-3xl font-bold text-gray-600">
                Advanced Healthcare Solutions
              </p>
              <p className="md:w-[480px]">
                Delivering cutting-edge healthcare with modern technology,
                expert professionals, and personalized treatment plans—designed
                to meet your unique needs and ensure the highest standards of
                care for every patient.
              </p>
            </div>
            {/*4 */}
            <div className=" bg-teal-100 p-8 rounded-2xl">
              <LiaTeethOpenSolid className="text-6xl text-teal-700" />
              <p className="py-6 text-3xl font-bold text-gray-600">
                Compassionate Care, Trusted Experts
              </p>
              <p className="md:w-[480px]">
                Our dedicated team combines expertise with empathy to provide
                personalized dental and medical care, ensuring each patient
                feels valued, comfortable, and confident in their health
                journey.
              </p>
            </div>
            {/*5 */}
            <div className=" bg-teal-100 p-8 rounded-2xl">
              <FaTeeth className="text-6xl text-teal-700" />
              <p className="py-6 text-3xl font-bold text-gray-600">
                Innovative Treatments, Lasting Results
              </p>
              <p className="md:w-[480px]">
                Using the latest technology and proven methods, we deliver
                effective dental and medical solutions that improve your health,
                restore your smile, and enhance your quality of life.
              </p>
            </div>
            {/*6 */}
            <div className=" bg-teal-100 p-8 rounded-2xl">
              <TbDentalBroken className="text-6xl text-teal-700" />
              <p className="py-6 text-3xl font-bold text-gray-600">
                Your Health, Our Priority
              </p>
              <p className="md:w-[480px]">
                Committed to holistic wellness, we offer comprehensive care
                plans that address both dental and medical needs, helping you
                achieve optimal health with convenience and compassion.
              </p>
            </div>
          </motion.div>
          {/* services */}
          {/* <div className="mt-9 container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              <div>
                <img
                  src="https://images.pexels.com/photos/3779694/pexels-photo-3779694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="image"
                  className="h-[350px] w-full object-cover"
                />
                <p className="text-2xl py-6 text-center font-bold uppercase font-bebas">
                  General Dentistry
                </p>
                <p className="py-3 text-center">
                  • Scaling and Polishing • Light Cure Filing (Composite) • Root
                  canal Treatment • Single Visit Root canal Treatment •
                  Extraction • Inlays and onlays • Surgical Removal of Teeth
                </p>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/6529219/pexels-photo-6529219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="image"
                  className="h-[350px] w-full object-cover"
                />
                <p className="text-2xl py-6 text-center font-bold uppercase font-bebas">
                  Prosthetic Dentistry
                </p>
                <p className="py-3 text-center">
                  • Crown and bridges • Fiber post • Dental Implant • Complete
                  and Partial Denture • Zirconia Crown
                </p>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/8727478/pexels-photo-8727478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="image"
                  className="h-[350px] w-full object-cover"
                />
                <p className="text-2xl py-6 text-center font-bold uppercase font-bebas">
                  Pediatric Dentistry
                </p>
                <p className="py-3 text-center">
                  • Light Cure Filing (Composite) • Flouride treatment •
                  Pulpotomy and pulpectomy • Extraction • Space Maintainer
                </p>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/6627574/pexels-photo-6627574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="image"
                  className="h-[350px] w-full object-cover"
                />
                <p className="text-2xl py-6 text-center font-bold uppercase font-bebas">
                  Cosmetic Dentistry
                </p>
                <p className="py-3 text-center">
                  • Veneers (Hollywood smile) • Smile design • E-max Crowns •
                  Tooth Whitening
                </p>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/4269694/pexels-photo-4269694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="image"
                  className="h-[350px] w-full object-cover"
                />
                <p className="text-2xl py-6 text-center font-bold uppercase font-bebas">
                  Orthodontic Dentistry
                </p>
                <p className="py-3 text-center">
                  • Fixed Orthodontic treatment (Braces) • Removable Orthodontic
                  treatment • Retainers after braces • Clear aligners
                </p>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/6627278/pexels-photo-6627278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="image"
                  className="h-[350px] w-full object-cover"
                />
                <p className="text-2xl py-6 text-center font-bold uppercase font-bebas">
                  Biological Dentistry
                </p>
                <p className="py-3 text-center">
                  • Safe Removal of Amalgam filling (SMART) • Note: All our
                  Materials Bio-compatible Materials.
                </p>
              </div>
            </div>
          </div> */}
          {/* Radiology & Sterilization */}

          {/* <div className="container ">
            <p className="text-3xl font-bold">Radiology & Sterilization</p>
            <p className="py-1">• Periapical X-ray • Cephalometric X-ray</p>
            <p className="py-1">• Orthopantomogram (OPG X-ray) • RVG X-ray</p>
            <p className="py-1">
              • Autoclave, Chemical, UV Light Box are used for Sterilization
            </p>
          </div> */}

          {/* Testimonial */}
          <Tesstimonials />
        </div>
        {/*doctor */}
        <div className="flex flex-col md:flex-row">
          <div className="text-black bg-teal-900">
            {" "}
            <div className="flex flex-row gap-2 item-center  text-white px-7 py-9">
              <BsStars className="" />
              <p className="uppercase font-bold">About Us</p>
              <TbDental className="mt-1 font-bold" />
            </div>
            <p className="text-5xl text-white px-9">
              Become a Member of the Club and Start Riding
            </p>
          </div>
          <div className="bg-teal-900 w-full">
            <img
              src={doctor1}
              alt="photo"
              className="md:-mt-[50px] md:ml-[300px]"
            />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Services;
