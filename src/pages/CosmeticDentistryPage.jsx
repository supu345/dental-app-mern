import React from "react";
import Layout from "../components/layout/Layout";
import Dental from "../assets/dental5.jpg";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
import { GoDotFill } from "react-icons/go";

const CosmeticDentistryPage = () => {
  return <div> <Layout>
       <div className="mt-[130px]">
               {" "}
               <div
                 className="relative bg-fixed h-[400px] bg-cover bg-center flex items-center justify-center"
                style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/6627282/pexels-photo-6627282.jpeg')",
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
                   Cosmetic Dentistry
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
                 <div className="md:w-1/2">  <p className="text-3xl font-bold py-7">What Is Cosmetic Dentistry?</p>
            <p>Cosmetic dentistry focuses on improving the appearance of a person’s teeth, gums, and smile. While many cosmetic procedures also improve function, the primary goal is aesthetic enhancement.</p>
               <p>Common cosmetic dental treatments include:</p>
             <div className="flex flex-row gap-3 items-center mt-8">
     <GoDotFill className="text-purple-400" />
     <p>Teeth whitening</p>
               </div>
               <div className="flex flex-row gap-3 items-center mt-2">
     <GoDotFill className="text-purple-400" />
     <p>Veneers</p>
               </div>
                <div className="flex flex-row gap-3 items-center mt-2">
     <GoDotFill className="text-purple-400" />
     <p>Dental bonding</p>
               </div>
                <div className="flex flex-row gap-3 items-center mt-2">
     <GoDotFill className="text-purple-400" />
     <p>Tooth reshaping</p>
               </div>
              <div className="flex flex-row gap-3 items-center mt-2">
     <GoDotFill className="text-purple-400" />
     <p>Gum contouring</p>
               </div>
                <div className="flex flex-row gap-3 items-center mt-2">
     <GoDotFill className="text-purple-400" />
     <p>Clear aligners or braces for minor corrections</p>
               </div>
                <div className="flex flex-row gap-3 items-center mt-2">
     <GoDotFill className="text-purple-400" />
     <p>Cosmetic crowns or bridges</p>
               </div>
               <div className="flex flex-row gap-3 items-center mt-2">

     <p>These procedures are often tailored to individual needs and preferences to achieve a natural, attractive smile.</p>
               </div>
             </div>
                 <div className="md:w-1/2">
                 <img src="https://images.pexels.com/photos/6627572/pexels-photo-6627572.jpeg" alt="image" className="rounded-2xl mt-5 h-[400px] w-[600px] object-cover"/>
                 </div>
               </div>
     
             <div className="border my-8 border-gray-300"></div>
              {/* two */}
             <div className="px-7 py-8 mt-6">
                <div className="flex flex-col md:flex-row gap-5">
                 <div className="md:w-1/2">  <p className="text-3xl font-bold py-7">Benefits of Cosmetic Dentistry</p>
              
             <div className="flex flex-row gap-3 items-center mt-8">
     
              <p><span className="font-bold">1.Improves Smile Aesthetics:</span> Enhances the color, shape, alignment, and overall appearance of your teeth.</p>
               </div>
               <div className="flex flex-row gap-3 items-center mt-2">
                 <p>  <span className="font-bold">2. Boosts Self-Confidence:</span> A brighter, straighter smile often leads to greater confidence in social and professional settings.</p>
     
               </div>
                <div className="flex flex-row gap-3 items-center mt-2">
                 <p>  <span className="font-bold">3. Corrects Minor Functional Issues:</span> Some treatments (like bonding or aligning teeth) can also improve your bite and reduce wear.</p>
     
               </div>
                 <div className="flex flex-row gap-3 items-center mt-2">
                 <p>  <span className="font-bold">4. Long-Lasting Results:</span>Many cosmetic procedures provide durable improvements that can last for years with proper care.</p>
     
               </div>
                
               <div className="flex flex-row gap-3 items-center mt-2">
                 <p>  <span className="font-bold">5. Minimally Invasive Options:</span> Many treatments are quick, painless, and require little to no downtime.</p>
     
               </div>
              
             </div>
                 <div className="md:w-1/2">
                 <img src="https://images.pexels.com/photos/11928561/pexels-photo-11928561.jpeg" alt="image" className="rounded-2xl mt-5 h-[400px] w-[600px] object-cover"/>
                 </div>
               </div>
             </div>
              <div className="border my-8 border-gray-300"></div>
             </div>
              {/* three */}
               <div className="px-7 py-8 mt-6">
                    <div className="flex flex-col md:flex-row gap-5">
                 <div className="md:w-1/2">  <p className="text-3xl font-bold py-7">What Is a Diagnosis in Cosmetic Dentistry?</p>
               <p>A diagnosis in cosmetic dentistry involves evaluating a patient’s smile to identify aesthetic concerns and develop a treatment plan that meets their cosmetic goals.</p>
               <p>This typically includes:</p>
              
         
               <div className="flex flex-row gap-3 items-center mt-2">
               <p> <span className="font-bold">Smile Assessment:</span> Examining tooth color, shape, size, alignment, and gum appearance.</p>
               </div>
               <div className="flex flex-row gap-3 items-center mt-2">
               <p> <span className="font-bold">Photographic Analysis:</span> Taking digital images or impressions to evaluate your smile from different angles.</p>
               </div>
                <div className="flex flex-row gap-3 items-center mt-2">
               <p> <span className="font-bold">Functional Check:</span> Ensuring that cosmetic improvements will not interfere with bite function or oral health.</p>
               </div>
                  <div className="flex flex-row gap-3 items-center mt-2">
               <p> <span className="font-bold">Personal Consultation:</span> Understanding the patient’s expectations, preferences, and desired outcomes.</p>
               </div>
               
              <div className="flex flex-row gap-3 items-center mt-2">
               <p>For example, if a patient is unhappy with stained or uneven teeth, the dentist may diagnose discoloration or enamel wear and recommend whitening, bonding, or veneers.</p>
               </div>
             </div>
                 <div className="md:w-1/2">
                 <img src="https://images.pexels.com/photos/12934843/pexels-photo-12934843.jpeg" alt="image" className="rounded-2xl mt-5 md:h-[400px] md:w-[600px] object-cover"/>
                 </div>
               </div>
               </div>
  </Layout>
    </div>;
};

export default CosmeticDentistryPage;
