import React from "react";
import Layout from "../components/layout/Layout";
import Dental from "../assets/dental5.jpg";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
import { TbDental } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
const GeneralDentistryPage = () => {
  return (
    <div>
      <Layout>
        <div className="mt-[130px]">
          {" "}
          <div
            className="relative bg-fixed h-[400px] bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: `url(${Dental})`,
            }}
          >
            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}

            {/* Content */}
            <div className="relative flex flex-col md:items-center ">
              <motion.p
                variants={SlideUp(0.5)}
                initial="hidden"
                whileInView={"visible"}
                className="text-white text-5xl md:text-7xl font-bold"
              >
                General Dentistry
              </motion.p>
              {/* <p className="text-center text-white text-7xl font-bold ">
                General Dentistry
              </p> */}
              {/* <div className="relative flex flex-row gap-2 items-center mt-5">
                       <p className="text-center text-white text-xl ">Financing</p>
                       <p className="text-center text-white text-xl ">/ About Us</p>
                     </div> */}
              {/* <div className="w-16 h-1 bg-white mt-6 mb-6"></div> */}
            </div>
          </div>
        </div>
        {/* one */}
        <div className="px-7 py-8 mt-6">
          <div className="flex  flex-col md:flex-row gap-5">
            <div className="md:w-1/2">  <p className="text-3xl font-bold py-7">General Dentistry: What Is It?</p>
          <p>General dentistry is the branch of dentistry focused on the prevention, diagnosis, and treatment of a wide range of conditions affecting the teeth, gums, and mouth. General dentists are primary dental care providers who manage your overall oral health.</p>
          <p className="mt-4">They perform routine services like:</p>
        <div className="flex flex-row gap-3 items-center mt-8">
<GoDotFill className="text-purple-400" />
<p>Dental exams and cleanings</p>
          </div>
          <div className="flex flex-row gap-3 items-center mt-2">
<GoDotFill className="text-purple-400" />
<p>Fillings and crowns</p>
          </div>
           <div className="flex flex-row gap-3 items-center mt-2">
<GoDotFill className="text-purple-400" />
<p>Root canals</p>
          </div>
           <div className="flex flex-row gap-3 items-center mt-2">
<GoDotFill className="text-purple-400" />
<p>Extractions</p>
          </div>
            <div className="flex flex-row gap-3 items-center mt-2">
<GoDotFill className="text-purple-400" />
<p>Preventive education</p>
          </div>
          <div className="flex flex-row gap-3 items-center mt-2">
<GoDotFill className="text-purple-400" />
<p>Gum care</p>
          </div>
          <div className="flex flex-row gap-3 items-center mt-2">
<GoDotFill className="text-purple-400" />
<p>X-rays and diagnostics</p>
          </div>
        </div>
            <div className="md:w-1/2">
            <img src="https://images.pexels.com/photos/3779693/pexels-photo-3779693.jpeg" alt="image" className="rounded-2xl mt-5"/>
            </div>
          </div>

        <div className="border my-8 border-gray-300"></div>
         {/* two */}
        <div className="px-7 py-8 mt-6">
           <div className="flex flex-col md:flex-row gap-5">
            <div className="md:w-1/2">  <p className="text-3xl font-bold py-7">Benefits of General Dentistry</p>
         
        <div className="flex flex-row gap-3 items-center mt-8">

         <p><span className="font-bold">1.Preventive Care:</span>  Helps catch problems early before they become serious or costly.</p>
          </div>
          <div className="flex flex-row gap-3 items-center mt-2">
            <p>  <span className="font-bold">2. Early Detection:</span> Through regular exams and X-rays, dentists can detect cavities, gum disease, and even oral cancer early.</p>

          </div>
           <div className="flex flex-row gap-3 items-center mt-2">
            <p>  <span className="font-bold">3. Improved Oral Health:</span> Regular cleanings remove plaque and tartar, reducing the risk of decay and gum disease.</p>

          </div>
            <div className="flex flex-row gap-3 items-center mt-2">
            <p>  <span className="font-bold">4. Comprehensive Treatment:</span> General dentists handle a variety of procedures and can refer you to specialists if needed.</p>

          </div>
           
          <div className="flex flex-row gap-3 items-center mt-2">
            <p>  <span className="font-bold">4. Customized Advice:</span> Receive professional guidance on brushing, flossing, diet, and habits like grinding or smoking.</p>

          </div>
         
        </div>
            <div className="md:w-1/2">
            <img src="https://images.pexels.com/photos/6627577/pexels-photo-6627577.jpeg" alt="image" className="rounded-2xl mt-5"/>
            </div>
          </div>
        </div>
         <div className="border my-8 border-gray-300"></div>
        </div>
         {/* three */}
          <div className="px-7 py-8 mt-6">
               <div className="flex flex-col md:flex-row gap-5">
            <div className="md:w-1/2">  <p className="text-3xl font-bold py-7">What Is a Diagnosis in General Dentistry??</p>
          <p>A diagnosis in general dentistry is the process of identifying a dental condition based on symptoms, clinical examination, and diagnostic tools (like X-rays or intraoral cameras).</p>
          <p> It helps the dentist understand:</p>
        <div className="flex flex-row gap-3 items-center mt-8">
<GoDotFill className="text-purple-400" />
<p>The nature of the problem (e.g., cavity, infection, gum disease)</p>
          </div>
          <div className="flex flex-row gap-3 items-center mt-2">
<GoDotFill className="text-purple-400" />
<p>The severity and stage of the condition</p>
          </div>
           <div className="flex flex-row gap-3 items-center mt-2">
<GoDotFill className="text-purple-400" />
<p>The appropriate treatment plan</p>
          </div>
          
            
          
          <div className="flex flex-row gap-3 items-center mt-2">

<p>For example, if you have tooth pain, a dentist will examine the area, possibly take an X-ray, and diagnose whether it's due to a cavity, cracked tooth, or something more serious like an abscess.</p>
          </div>
        </div>
            <div className="md:w-1/2">
            <img src="https://images.pexels.com/photos/6627533/pexels-photo-6627533.jpeg" alt="image" className="rounded-2xl mt-5"/>
            </div>
          </div>
          </div>
      </Layout>
    </div>
  );
};

export default GeneralDentistryPage;
