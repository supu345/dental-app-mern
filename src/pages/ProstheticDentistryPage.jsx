import React from "react";
import Layout from "../components/layout/Layout";
import Dental from "../assets/dental5.jpg";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
import { GoDotFill } from "react-icons/go";
const ProstheticDentistryPage = () => {
  return <div> <Layout>
       <div className="mt-[130px]">
               {" "}
               <div
                 className="relative bg-fixed h-[400px] bg-cover bg-center flex items-center justify-center"
                style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/6627277/pexels-photo-6627277.jpeg')",
            }}
               >
                 {/* Overlay */}
                 {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
     
                 {/* Content */}
                 <div className="relative flex flex-col items-center ">
                   <motion.p
                     variants={SlideUp(0.5)}
                     initial="hidden"
                     whileInView={"visible"}
                     className="text-white text-5xl md:text-7xl font-bold"
                   >
                    Prosthetic Dentistry
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
               <div className="flex flex-col md:flex-row gap-5">
                 <div className="md:w-1/2">  <p className="text-3xl font-bold py-7">Prosthetic Dentistry: What Is It?</p>
               <p>Prosthetic dentistry (also known as prosthodontics) is the dental specialty focused on restoring and replacing missing or damaged teeth with artificial devices. This includes crowns, bridges, dentures, veneers, and dental implants.</p>
               <p>Prosthetic dentists aim to restore:</p>
             <div className="flex flex-row gap-3 items-center mt-8">
     <GoDotFill className="text-purple-400" />
     <p>Function (chewing, speaking)</p>
               </div>
               <div className="flex flex-row gap-3 items-center mt-2">
     <GoDotFill className="text-purple-400" />
     <p>Aesthetics (appearance of the smile)</p>
               </div>
                <div className="flex flex-row gap-3 items-center mt-2">
     <GoDotFill className="text-purple-400" />
     <p>Oral health and structure</p>
               </div>
               
              
               <div className="flex flex-row gap-3 items-center mt-2">

     <p>They work with both fixed and removable prosthetics, often collaborating with dental labs to create custom restorations.</p>
               </div>
             </div>
                 <div className="md:w-1/2">
                 <img src="https://images.pexels.com/photos/6502343/pexels-photo-6502343.jpeg" alt="image" className="rounded-2xl mt-5"/>
                 </div>
               </div>
     
             <div className="border my-8 border-gray-300"></div>
              {/* two */}
             <div className="px-7 py-8 mt-6">
                <div className="flex flex-col md:flex-row gap-5">
                 <div className="md:w-1/2">  <p className="text-3xl font-bold py-7">Benefits of Prosthetic Dentistry</p>
              
             <div className="flex flex-row gap-3 items-center mt-8">
     
              <p><span className="font-bold">1.Restores Function:</span> Replaces missing or damaged teeth, making it easier to chew and speak properly.</p>
               </div>
               <div className="flex flex-row gap-3 items-center mt-2">
                 <p>  <span className="font-bold">2. Improves Aesthetics:</span> Enhances the appearance of your smile by filling gaps or correcting worn or discolored teeth.</p>
     
               </div>
                <div className="flex flex-row gap-3 items-center mt-2">
                 <p>  <span className="font-bold">3. Prevents Further Issues:</span> Helps maintain the alignment of surrounding teeth and prevents bone loss in the jaw.</p>
     
               </div>
                 <div className="flex flex-row gap-3 items-center mt-2">
                 <p>  <span className="font-bold">4. Boosts Confidence:</span> Patients often feel more confident socially and professionally after restoring their smile.</p>
     
               </div>
                
               <div className="flex flex-row gap-3 items-center mt-2">
                 <p>  <span className="font-bold">4. Long-Term Oral Health:</span> Supports the overall structure of the mouth and helps preserve oral health over time.</p>
     
               </div>
              
             </div>
                 <div className="md:w-1/2">
                 <img src="https://images.pexels.com/photos/5355838/pexels-photo-5355838.jpeg" alt="image" className="rounded-2xl mt-5"/>
                 </div>
               </div>
             </div>
              <div className="border my-8 border-gray-300"></div>
             </div>
              {/* three */}
               <div className="px-7 py-8 mt-6">
                    <div className="flex flex-col md:flex-row gap-5">
                 <div className="md:w-1/2">  <p className="text-3xl font-bold py-7">What Is a Diagnosis in Prosthetic Dentistry?</p>
               <p>A diagnosis in prosthetic dentistry involves identifying the need for tooth restoration or replacement. It includes:</p>
              
         
               <div className="flex flex-row gap-3 items-center mt-2">
               <p> <span className="font-bold">Clinical Examination:</span> Assessing the condition of existing teeth, gums, and jaw structure.</p>
               </div>
               <div className="flex flex-row gap-3 items-center mt-2">
               <p> <span className="font-bold">Diagnostic Imaging:</span> X-rays or 3D scans to evaluate bone density and placement options for implants or prosthetics.</p>
               </div>
                <div className="flex flex-row gap-3 items-center mt-2">
               <p> <span className="font-bold">Functional Analysis:</span> Reviewing bite alignment, speech, and chewing efficiency.</p>
               </div>
                  <div className="flex flex-row gap-3 items-center mt-2">
               <p> <span className="font-bold">Treatment Planning:</span> Based on the diagnosis, a tailored plan is created to restore function, aesthetics, and oral health.</p>
               </div>
               
              <div className="flex flex-row gap-3 items-center mt-2">
               <p>For example, a patient with several missing teeth may be diagnosed with partial edentulism and recommended for a removable partial denture or implant-supported bridge.</p>
               </div>
             </div>
                 <div className="md:w-1/2">
                 <img src="https://images.pexels.com/photos/5794073/pexels-photo-5794073.jpeg" alt="image" className="rounded-2xl mt-5"/>
                 </div>
               </div>
               </div>
  </Layout>
    </div>;
};

export default ProstheticDentistryPage;
