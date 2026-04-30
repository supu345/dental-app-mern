import React from "react";
import Layout from "../components/layout/Layout";
import Dental from "../assets/dental5.jpg";
import Ortho from "../assets/orthodontic.png";
import Ortho1 from "../assets/orthodontic1.jpg";
import Ortho2 from "../assets/orthodontic2.jpg";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
import { GoDotFill } from "react-icons/go";

const RadiologyPage = () => {
  return (
    <div>
      <Layout>
        <div className="mt-[130px]">
          <div
            className="relative bg-fixed h-[400px] bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/4269696/pexels-photo-4269696.jpeg')",
            }}
          >
            <div className="relative flex flex-col items-center">
              <motion.p
                variants={SlideUp(0.5)}
                initial="hidden"
                whileInView={"visible"}
                className="text-white text-5xl md:text-7xl font-bold"
              >
                Dental Radiology
              </motion.p>
            </div>
          </div>
        </div>

        {/* Section One */}
        <div className="px-7 py-8 mt-6">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="md:w-1/2">
              <p className="text-3xl font-bold py-7">What Is Dental Radiology?</p>
              <p>
                Dental radiology involves the use of X-ray imaging to diagnose and monitor oral health conditions. It plays a critical role in detecting problems that are not visible during a standard dental exam.
              </p>
              <p>Types of dental radiographs include:</p>

              <div className="flex flex-row gap-3 items-center mt-8">
                <GoDotFill className="text-purple-400" />
                <p>Bitewing X-rays</p>
              </div>
              <div className="flex flex-row gap-3 items-center mt-2">
                <GoDotFill className="text-purple-400" />
                <p>Periapical X-rays</p>
              </div>
              <div className="flex flex-row gap-3 items-center mt-2">
                <GoDotFill className="text-purple-400" />
                <p>Panoramic X-rays (OPG)</p>
              </div>
              <div className="flex flex-row gap-3 items-center mt-2">
                <GoDotFill className="text-purple-400" />
                <p>3D Cone Beam CT (CBCT) scans</p>
              </div>
              <div className="flex flex-row gap-3 items-center mt-2">
                <GoDotFill className="text-purple-400" />
                <p>Cephalometric X-rays (for orthodontics)</p>
              </div>

              <div className="flex flex-row gap-3 items-center mt-2">
                <p>
                  These imaging tools help provide a clear and accurate view of teeth, bone, and surrounding structures.
                </p>
              </div>
            </div>

            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/4266943/pexels-photo-4266943.jpeg"
                alt="Dental Radiology"
                className="rounded-2xl mt-5 h-[400px] w-[600px] object-cover"
              />
            </div>
          </div>

          <div className="border my-8 border-gray-300"></div>

          {/* Section Two */}
          <div className="flex flex-col md:flex-row gap-5">
            <div className="md:w-1/2">
              <p className="text-3xl font-bold py-7">Benefits of Dental Radiology</p>

              <div className="flex flex-row gap-3 items-center mt-8">
                <p>
                  <span className="font-bold">1. Early Detection:</span> Helps identify issues like cavities, bone loss, infections, or tumors before symptoms appear.
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center mt-2">
                <p>
                  <span className="font-bold">2. Accurate Diagnosis:</span> Provides clear insight into hard-to-see areas like tooth roots, jawbone, and sinuses.
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center mt-2">
                <p>
                  <span className="font-bold">3. Treatment Planning:</span> Essential for planning surgeries, implants, orthodontics, and root canals.
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center mt-2">
                <p>
                  <span className="font-bold">4. Minimally Invasive:</span> Helps avoid unnecessary treatments by pinpointing the exact issue.
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center mt-2">
                <p>
                  <span className="font-bold">5. Monitoring Progress:</span> Used to track healing, growth, or disease progression over time.
                </p>
              </div>
            </div>

            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/3845735/pexels-photo-3845735.jpeg"
                alt="Dental X-ray"
                className="rounded-2xl mt-5 h-[400px] w-[600px] object-cover"
              />
            </div>
          </div>

          <div className="border my-8 border-gray-300"></div>

          {/* Section Three */}
          <div className="flex flex-col md:flex-row gap-5">
            <div className="md:w-1/2">
              <p className="text-3xl font-bold py-7">What Is a Diagnosis in Dental Radiology?</p>
              <p>
                A diagnosis in dental radiology is made by interpreting radiographic images to detect oral conditions that may not be visible during a clinical exam.
              </p>
              <p>This typically includes:</p>

              <div className="flex flex-row gap-3 items-center mt-2">
                <p>
                  <span className="font-bold">Tooth Decay:</span> Identifying cavities between teeth and under existing restorations.
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center mt-2">
                <p>
                  <span className="font-bold">Bone Loss:</span> Evaluating the health of bone supporting teeth (periodontal disease).
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center mt-2">
                <p>
                  <span className="font-bold">Impacted Teeth:</span> Detecting teeth that have not erupted properly (like wisdom teeth).
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center mt-2">
                <p>
                  <span className="font-bold">Cysts & Tumors:</span> Spotting abnormal growths within the jawbone or sinus area.
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center mt-2">
                <p>
                  These findings are used to form a precise treatment plan that ensures safe, effective dental care.
                </p>
              </div>
            </div>

            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/6812522/pexels-photo-6812522.jpeg"
                alt="Dental X-ray Diagnosis"
                className="rounded-2xl mt-5 h-[400px] w-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};


export default RadiologyPage;
