import React from "react";
import Layout from "../components/layout/Layout";
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
            <div className="relative flex flex-col items-center ">
              <p className="text-center text-white text-7xl font-bold">
                Services we offer
              </p>
              <h1 className="text-xl pt-3 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore <br />
                molestias aliquid ullam ea doloremque officiis nobis quia
                officia cum eum
              </h1>
              <div className="w-12 h-1 bg-white mt-2 mb-6"></div>
            </div>
          </div>
          {/* services */}
          <div className="mt-9 container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              <div>
                <img
                  src="https://images.pexels.com/photos/3779694/pexels-photo-3779694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="image"
                  className="h-[350px] w-full object-cover"
                />
                <p className="text-2xl py-6 text-center font-bold uppercase font-bebas">
                  Servers
                </p>
                <p className="py-3 text-center">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officiis, consequatur? Laboriosam ex odio iure odit adipisci
                  aperiam officia at aspernatur? Laboriosam ex odio iure odit
                  adipisci aperiam officia
                </p>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/6529219/pexels-photo-6529219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="image"
                  className="h-[350px] w-full object-cover"
                />
                <p className="text-2xl py-6 text-center font-bold uppercase font-bebas">
                  Teeth Whitening
                </p>
                <p className="py-3 text-center">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officiis, consequatur? Laboriosam ex odio iure odit adipisci
                  aperiam officia at aspernatur? Laboriosam ex odio iure odit
                  adipisci aperiam officia
                </p>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/8727478/pexels-photo-8727478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="image"
                  className="h-[350px] w-full object-cover"
                />
                <p className="text-2xl py-6 text-center font-bold uppercase font-bebas">
                  Dental Implants
                </p>
                <p className="py-3 text-center">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officiis, consequatur? Laboriosam ex odio iure odit adipisci
                  aperiam officia at aspernatur? Laboriosam ex odio iure odit
                  adipisci aperiam officia
                </p>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/6627574/pexels-photo-6627574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="image"
                  className="h-[350px] w-full object-cover"
                />
                <p className="text-2xl py-6 text-center font-bold uppercase font-bebas">
                  Orthodontics (Braces and Invisalign)
                </p>
                <p className="py-3 text-center">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officiis, consequatur? Laboriosam ex odio iure odit adipisci
                  aperiam officia at aspernatur? Laboriosam ex odio iure odit
                  adipisci aperiam officia
                </p>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/4269694/pexels-photo-4269694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="image"
                  className="h-[350px] w-full object-cover"
                />
                <p className="text-2xl py-6 text-center font-bold uppercase font-bebas">
                  Root Canal Treatment
                </p>
                <p className="py-3 text-center">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officiis, consequatur? Laboriosam ex odio iure odit adipisci
                  aperiam officia at aspernatur? Laboriosam ex odio iure odit
                  adipisci aperiam officia
                </p>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/6627278/pexels-photo-6627278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="image"
                  className="h-[350px] w-full object-cover"
                />
                <p className="text-2xl py-6 text-center font-bold uppercase font-bebas">
                  Cosmetic Dentistry
                </p>
                <p className="py-3 text-center">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officiis, consequatur? Laboriosam ex odio iure odit adipisci
                  aperiam officia at aspernatur? Laboriosam ex odio iure odit
                  adipisci aperiam officia
                </p>
              </div>
            </div>
          </div>
          {/* TERMS */}

          <div className="container ">
            <p className="text-3xl font-bold">TERMS</p>
            <p className="py-1">
              1. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Officiis
            </p>
            <p className="py-1">
              2. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Officiis.consectetur adipisicing elit. Officiis
            </p>
            <p className="py-1">
              3. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Officiis.consectetur adipisicing elit. Officiis
            </p>
          </div>
          {/* Reviews */}
          <div className="container ">
            <p className="text-3xl font-bold uppercase mt-7">Reviews</p>
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
              {/* Testimonial Card */}
              <div className="flex flex-col items-center mt-2 mb-9 py-6 bg-white  dark:bg-black h-auto text-center shadow-lg rounded-lg">
                <img
                  src="https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="John Doe"
                  className="h-[80px] w-[80px] mx-auto rounded-full"
                />
                <p className="font-bold text-lg md:text-xl mt-4">John Doe</p>
                <p className="py-4 px-4 text-sm md:text-base dark:text-white dark:bg-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  quae aliquid molestiae sed illo aut earum alias aspernatur
                  iusto! Eveniet.
                </p>
              </div>

              {/* Testimonial Card */}
              <div className="flex flex-col items-center mt-2 mb-9 py-6 bg-white  dark:bg-black h-auto text-center shadow-lg rounded-lg">
                <img
                  src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Fahim Rashid"
                  className="h-[80px] w-[80px] mx-auto rounded-full"
                />
                <p className="font-bold text-lg md:text-xl mt-4">
                  Fahim Rashid
                </p>
                <p className="py-4 px-4 text-sm md:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  quae aliquid molestiae sed illo aut earum alias aspernatur
                  iusto! Eveniet.
                </p>
              </div>

              {/* Testimonial Card */}
              <div className="flex flex-col items-center mt-2 mb-9 py-6 bg-white  dark:bg-black h-auto text-center shadow-lg rounded-lg">
                <img
                  src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Jane Smith"
                  className="h-[80px] w-[80px] mx-auto rounded-full"
                />
                <p className="font-bold text-lg md:text-xl mt-4">Jane Smith</p>
                <p className="py-4 px-4 text-sm md:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  quae aliquid molestiae sed illo aut earum alias aspernatur
                  iusto! Eveniet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Services;
