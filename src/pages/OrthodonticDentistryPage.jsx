import React from "react";
import Layout from "../components/layout/Layout";
import Dental from "../assets/dental5.jpg";
import Ortho from "../assets/orthodontic.png";
import Ortho1 from "../assets/orthodontic1.jpg";
import Ortho2 from "../assets/orthodontic2.jpg";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
import { GoDotFill } from "react-icons/go";
const OrthodonticDentistryPage = () => {
  return (
    <div>
      <Layout>
        <div className="mt-[130px]">
          <div
            className="relative bg-fixed h-[400px] bg-cover bg-center flex items-center justify-center"
           style={{
                         backgroundImage: `url(${Ortho})`,
                       }}
          >
            <div className="relative flex flex-col items-center">
              <motion.p
                variants={SlideUp(0.5)}
                initial="hidden"
                whileInView={"visible"}
                className="text-4xl md:text-7xl font-bold text-gray-700"
              >
                Orthodontic Dentistry
              </motion.p>
            </div>
          </div>
        </div>

        {/* Section One */}
        <div className="px-7 py-8 mt-6">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="md:w-1/2">
              <p className="text-3xl font-bold py-7">What Is Orthodontic Dentistry?</p>
              <p>
                Orthodontic dentistry is a specialized field of dentistry focused on diagnosing, preventing, and correcting misaligned teeth and jaws. The primary goal is to improve oral function, aesthetics, and overall dental health.
              </p>
              <p>Common orthodontic treatments include:</p>

              <div className="flex flex-row gap-3 items-center mt-8">
                <GoDotFill className="text-purple-400" />
                <p>Braces (metal, ceramic, lingual)</p>
              </div>
              <div className="flex flex-row gap-3 items-center mt-2">
                <GoDotFill className="text-purple-400" />
                <p>Clear aligners (e.g., Invisalign)</p>
              </div>
              <div className="flex flex-row gap-3 items-center mt-2">
                <GoDotFill className="text-purple-400" />
                <p>Retainers</p>
              </div>
              <div className="flex flex-row gap-3 items-center mt-2">
                <GoDotFill className="text-purple-400" />
                <p>Palatal expanders</p>
              </div>
              <div className="flex flex-row gap-3 items-center mt-2">
                <GoDotFill className="text-purple-400" />
                <p>Jaw alignment treatments</p>
              </div>

              <div className="flex flex-row gap-3 items-center mt-2">
                <p>
                  Orthodontic care is suitable for children, teens, and adults seeking straighter teeth and improved oral health.
                </p>
              </div>
            </div>

            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/6528908/pexels-photo-6528908.jpeg"
                alt="Orthodontic Treatment"
                className="rounded-2xl mt-5 h-[400px] w-[600px] object-cover"
              />
            </div>
          </div>

          <div className="border my-8 border-gray-300"></div>

          {/* Section Two */}
          <div className="flex flex-col md:flex-row gap-5">
            <div className="md:w-1/2">
              <p className="text-3xl font-bold py-7">Benefits of Orthodontic Dentistry</p>

              <div className="flex flex-row gap-3 items-center mt-8">
                <p>
                  <span className="font-bold">1. Straighter Teeth:</span> Improves the alignment of teeth for a more attractive and functional smile.
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center mt-2">
                <p>
                  <span className="font-bold">2. Better Oral Health:</span> Aligned teeth are easier to clean, reducing the risk of cavities and gum disease.
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center mt-2">
                <p>
                  <span className="font-bold">3. Improved Bite:</span> Corrects overbites, underbites, and crossbites to improve chewing and speech.
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center mt-2">
                <p>
                  <span className="font-bold">4. Prevents Wear and Tear:</span> Reduces pressure on teeth and jaw joints, preventing long-term damage.
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center mt-2">
                <p>
                  <span className="font-bold">5. Boosts Confidence:</span> A well-aligned smile can enhance self-esteem and social comfort.
                </p>
              </div>
            </div>

            <div className="md:w-1/2">
              <img
                 src={Ortho1}
                alt="Orthodontic Braces"
                className="rounded-2xl mt-5 h-[400px] w-[600px] object-cover"
              />
            </div>
          </div>

          <div className="border my-8 border-gray-300"></div>

          {/* Section Three */}
          <div className="flex flex-col md:flex-row gap-5">
            <div className="md:w-1/2">
              <p className="text-3xl font-bold py-7">What Is a Diagnosis in Orthodontic Dentistry?</p>
              <p>
                A diagnosis in orthodontic dentistry involves identifying alignment problems with teeth and jaws to create a personalized treatment plan.
              </p>
              <p>This typically includes:</p>

              <div className="flex flex-row gap-3 items-center mt-2">
                <p>
                  <span className="font-bold">Clinical Examination:</span> Assessing bite, jaw movement, and tooth positioning.
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center mt-2">
                <p>
                  <span className="font-bold">Imaging & X-Rays:</span> Taking panoramic X-rays, 3D scans, or impressions to evaluate internal structures.
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center mt-2">
                <p>
                  <span className="font-bold">Bite Analysis:</span> Reviewing how the upper and lower teeth come together.
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center mt-2">
                <p>
                  <span className="font-bold">Treatment Planning:</span> Creating a tailored plan using braces, aligners, or other appliances based on the diagnosis.
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center mt-2">
                <p>
                  For instance, a patient with crowding or an overbite may be diagnosed and recommended for clear aligners or braces.
                </p>
              </div>
            </div>

            <div className="md:w-1/2">
              <img
                src={Ortho2}
                alt="Orthodontic Diagnosis"
                className="rounded-2xl mt-5 h-[400px] w-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};


export default OrthodonticDentistryPage;
