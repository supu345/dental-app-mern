import React from "react";
import Layout from "../components/layout/Layout";
import Dental from "../assets/dental5.jpg";
import Ortho from "../assets/orthodontic.png";
import Ortho1 from "../assets/orthodontic1.jpg";
import Ortho2 from "../assets/orthodontic2.jpg";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
import { GoDotFill } from "react-icons/go";

const SterilizationPage = () => {
  return (
    <div>
      <Layout>
        <div className="mt-[130px]">
          <div
            className="relative bg-fixed h-[400px] bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/3845683/pexels-photo-3845683.jpeg')",
            }}
          >
            <div className="relative flex flex-col items-center">
              <motion.p
                variants={SlideUp(0.5)}
                initial="hidden"
                whileInView={"visible"}
                className="text-blue-500 text-5xl md:text-7xl font-bold"
              >
                Sterilization & Hygiene
              </motion.p>
            </div>
          </div>
        </div>

        {/* Section One */}
        <div className="px-7 py-8 mt-6">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="md:w-1/2">
              <p className="text-3xl font-bold py-7">What Is Dental Sterilization?</p>
              <p>
                Dental sterilization is the process of eliminating all forms of microbial life — including bacteria, viruses, fungi, and spores — from instruments and surfaces used during treatment. It is a critical component of infection control and patient safety in every dental practice.
              </p>
              <p>Core sterilization practices include:</p>

              <div className="flex flex-row gap-3 items-center mt-8">
                <GoDotFill className="text-purple-400" />
                <p>Autoclaving instruments (steam under pressure)</p>
              </div>
              <div className="flex flex-row gap-3 items-center mt-2">
                <GoDotFill className="text-purple-400" />
                <p>Using disposable items where possible</p>
              </div>
              <div className="flex flex-row gap-3 items-center mt-2">
                <GoDotFill className="text-purple-400" />
                <p>Surface disinfection of chairs and counters</p>
              </div>
              <div className="flex flex-row gap-3 items-center mt-2">
                <GoDotFill className="text-purple-400" />
                <p>Wearing PPE (gloves, masks, eyewear)</p>
              </div>
              <div className="flex flex-row gap-3 items-center mt-2">
                <GoDotFill className="text-purple-400" />
                <p>Proper waste disposal systems</p>
              </div>

              <div className="flex flex-row gap-3 items-center mt-2">
                <p>
                  Sterilization protects both patients and dental staff from cross-contamination and disease transmission.
                </p>
              </div>
            </div>

            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/4269362/pexels-photo-4269362.jpeg"
                alt="Sterilization Process"
                className="rounded-2xl mt-5 h-[400px] w-[600px] object-cover"
              />
            </div>
          </div>

          <div className="border my-8 border-gray-300"></div>

          {/* Section Two */}
          <div className="flex flex-col md:flex-row gap-5">
            <div className="md:w-1/2">
              <p className="text-3xl font-bold py-7">Benefits of Sterilization in Dentistry</p>

              <div className="flex flex-row gap-3 items-center mt-8">
                <p>
                  <span className="font-bold">1. Prevents Infections:</span> Reduces the risk of transmitting pathogens between patients and staff.
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center mt-2">
                <p>
                  <span className="font-bold">2. Ensures Patient Safety:</span> Patients are treated with clean, sanitized tools every time.
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center mt-2">
                <p>
                  <span className="font-bold">3. Builds Trust:</span> Patients feel confident in a hygienic and professional environment.
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center mt-2">
                <p>
                  <span className="font-bold">4. Meets Legal Standards:</span> Complies with health regulations and infection control protocols.
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center mt-2">
                <p>
                  <span className="font-bold">5. Improves Practice Reputation:</span> Clean, sterile environments leave a lasting impression.
                </p>
              </div>
            </div>

            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/6812528/pexels-photo-6812528.jpeg"
                alt="Sterilized Equipment"
                className="rounded-2xl mt-5 h-[400px] w-[600px] object-cover"
              />
            </div>
          </div>

          <div className="border my-8 border-gray-300"></div>

          {/* Section Three */}
          <div className="flex flex-col md:flex-row gap-5">
            <div className="md:w-1/2">
              <p className="text-3xl font-bold py-7">What Is a Diagnosis in Sterilization?</p>
              <p>
                While sterilization itself doesn’t involve diagnosing a patient condition, regular **diagnostic checks** are performed on the sterilization process and environment to ensure effectiveness.
              </p>
              <p>These include:</p>

              <div className="flex flex-row gap-3 items-center mt-2">
                <p>
                  <span className="font-bold">Biological Monitoring:</span> Using spore tests to verify autoclave performance.
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center mt-2">
                <p>
                  <span className="font-bold">Chemical Indicators:</span> Color-changing strips confirm sterilization cycles were completed.
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center mt-2">
                <p>
                  <span className="font-bold">Mechanical Monitoring:</span> Checking time, temperature, and pressure gauges during cycles.
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center mt-2">
                <p>
                  <span className="font-bold">Visual Inspection:</span> Ensuring instruments are free of debris before sterilizing.
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center mt-2">
                <p>
                  These checks ensure that sterilization procedures are functioning properly and consistently.
                </p>
              </div>
            </div>

            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/3845652/pexels-photo-3845652.jpeg"
                alt="Sterilization Testing"
                className="rounded-2xl mt-5 h-[400px] w-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};


export default SterilizationPage;
