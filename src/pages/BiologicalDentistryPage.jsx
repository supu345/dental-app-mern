
import React from "react";
import Layout from "../components/layout/Layout";
import Dental from "../assets/dental5.jpg";
import Ortho from "../assets/orthodontic.png";
import Ortho1 from "../assets/orthodontic1.jpg";
import Ortho2 from "../assets/orthodontic2.jpg";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
import { GoDotFill } from "react-icons/go";
const BiologicalDentistryPage = () => {
  return (
    <div>
      <Layout>
        <div className="mt-[130px]">
          <div
            className="relative bg-fixed h-[400px] bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/5355692/pexels-photo-5355692.jpeg')",
            }}
          >
            <div className="relative flex flex-col items-center">
              <motion.p
                variants={SlideUp(0.5)}
                initial="hidden"
                whileInView={"visible"}
                className="text-white text-5xl md:text-7xl font-bold"
              >
                Biological Dentistry
              </motion.p>
            </div>
          </div>
        </div>

        {/* Section One */}
        <div className="px-7 py-8 mt-6">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="md:w-1/2">
              <p className="text-3xl font-bold py-7">What Is Biological Dentistry?</p>
              <p>
                Biological dentistry, also known as holistic dentistry, is an approach to oral health care that considers the connection between oral health and the overall health of the body. It emphasizes biocompatible materials and minimally invasive techniques.
              </p>
              <p>Key principles of biological dentistry include:</p>

              <div className="flex flex-row gap-3 items-center mt-8">
                <GoDotFill className="text-purple-400" />
                <p>Use of non-toxic, mercury-free materials</p>
              </div>
              <div className="flex flex-row gap-3 items-center mt-2">
                <GoDotFill className="text-purple-400" />
                <p>Focus on whole-body wellness and immune system support</p>
              </div>
              <div className="flex flex-row gap-3 items-center mt-2">
                <GoDotFill className="text-purple-400" />
                <p>Safe amalgam (metal filling) removal</p>
              </div>
              <div className="flex flex-row gap-3 items-center mt-2">
                <GoDotFill className="text-purple-400" />
                <p>Minimally invasive and conservative procedures</p>
              </div>
              <div className="flex flex-row gap-3 items-center mt-2">
                <GoDotFill className="text-purple-400" />
                <p>Emphasis on nutrition and detoxification</p>
              </div>

              <div className="flex flex-row gap-3 items-center mt-2">
                <p>
                  Biological dentists work to reduce toxicity, inflammation, and systemic effects of oral treatments.
                </p>
              </div>
            </div>

            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/5355709/pexels-photo-5355709.jpeg"
                alt="Biological Dentistry"
                className="rounded-2xl mt-5 h-[400px] w-[600px] object-cover"
              />
            </div>
          </div>

          <div className="border my-8 border-gray-300"></div>

          {/* Section Two */}
          <div className="flex flex-col md:flex-row gap-5">
            <div className="md:w-1/2">
              <p className="text-3xl font-bold py-7">Benefits of Biological Dentistry</p>

              <div className="flex flex-row gap-3 items-center mt-8">
                <p>
                  <span className="font-bold">1. Whole-Body Wellness:</span> Promotes health throughout the body by reducing oral toxicity and inflammation.
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center mt-2">
                <p>
                  <span className="font-bold">2. Non-Toxic Materials:</span> Uses biocompatible and mercury-free materials that are safe for long-term use.
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center mt-2">
                <p>
                  <span className="font-bold">3. Minimally Invasive Techniques:</span> Focuses on preserving natural teeth and tissues whenever possible.
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center mt-2">
                <p>
                  <span className="font-bold">4. Personalized Care:</span> Integrates individual health concerns, lifestyle, and medical history into dental treatment.
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center mt-2">
                <p>
                  <span className="font-bold">5. Mercury Removal Expertise:</span> Specialized protocols for safely removing amalgam fillings to avoid mercury exposure.
                </p>
              </div>
            </div>

            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/6812551/pexels-photo-6812551.jpeg"
                alt="Holistic Dental Benefits"
                className="rounded-2xl mt-5 h-[400px] w-[600px] object-cover"
              />
            </div>
          </div>

          <div className="border my-8 border-gray-300"></div>

          {/* Section Three */}
          <div className="flex flex-col md:flex-row gap-5">
            <div className="md:w-1/2">
              <p className="text-3xl font-bold py-7">What Is a Diagnosis in Biological Dentistry?</p>
              <p>
                A diagnosis in biological dentistry involves assessing the patient’s oral condition while considering systemic health factors, lifestyle, allergies, and toxic exposures.
              </p>
              <p>This typically includes:</p>

              <div className="flex flex-row gap-3 items-center mt-2">
                <p>
                  <span className="font-bold">Holistic Health Review:</span> Evaluating medical history, immune function, and environmental sensitivities.
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center mt-2">
                <p>
                  <span className="font-bold">Digital X-rays & Imaging:</span> Low-radiation imaging to identify decay, infection, or metal toxicity.
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center mt-2">
                <p>
                  <span className="font-bold">Oral-Systemic Risk Analysis:</span> Looking at how dental issues may affect cardiovascular, immune, or neurological systems.
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center mt-2">
                <p>
                  <span className="font-bold">Material Sensitivity Testing:</span> Ensuring that dental materials used are biocompatible with the patient.
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center mt-2">
                <p>
                  Based on this diagnosis, a biological dentist creates a treatment plan focused on safe, natural, and sustainable oral health.
                </p>
              </div>
            </div>

            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/5355720/pexels-photo-5355720.jpeg"
                alt="Biological Dental Diagnosis"
                className="rounded-2xl mt-5 h-[400px] w-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};


export default BiologicalDentistryPage;
