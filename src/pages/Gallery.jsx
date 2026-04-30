import React from "react";
import Layout from "../components/layout/Layout";
import Shamima from "../assets/Shamima.png";
import Dental1 from "../assets/dental1.jpg";
import Dental2 from "../assets/dental2.jpg";
import Dental3 from "../assets/dental3.jpg";
import Dental4 from "../assets/dental4.jpg";
const Gallery = () => {
  return (
    <div>
      <Layout>
        <div className="dark:bg-black dark:text-white">
          <div className="container py-[80px] px-[40px] grid grid-cols-1 md:grid-cols-2  gap-[40px] mt-8">
            <div className="md:h-[500px]">
              <img
                src={Dental1}
                className="w-full h-full object-cover"
                alt="Image 1"
              />
            </div>
            <div className="md:h-[500px]">
              <img
                src={Dental2}
                className="w-full h-full object-cover"
                alt="Image 2"
              />
            </div>
            <div className="md:h-[500px]">
              <img
                src={Dental3}
                className="w-full h-full object-cover border p-1"
                alt="Image 3"
              />
            </div>
            <div className="md:h-[500px]">
              <img
                src={Dental4}
                className="w-full h-full object-cover border p-1"
                alt="Image 4"
              />
            </div>

            <div
              style={{
                position: "relative",
                width: "100%",
                height: "0",
                paddingBottom: "56.25%",
              }}
            >
              <iframe
                src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F61560829131740%2Fvideos%2F9292637924109029%2F&show_text=false&width=560&t=0"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                  overflow: "hidden",
                }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Gallery;
