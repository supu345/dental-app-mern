import React from "react";
import Layout from "../components/layout/Layout";
const Gallery = () => {
  return (
    <div>
      <Layout>
        <div className="dark:bg-black dark:text-white">
          <div className="container py-[80px] px-[40px] grid grid-cols-1 md:grid-cols-2  gap-[40px] mt-8">
            <div className="h-[500px]">
              <img
                src="https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/471153927_122111934140619517_7465351566970535529_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=20qssr0LDzsQ7kNvgF_tUaU&_nc_oc=AdjUjf8dtnfRHCWZjkGyEoxzgj_SRByggcdWtczHtrvXkS9a9L7fjapqHUuXw6xYfpCHZJ1jx1mbaQijXEi4SRjB&_nc_zt=23&_nc_ht=scontent.fdac99-1.fna&_nc_gid=A34YBntisEIb2rH8K0vZ7il&oh=00_AYGy3vlCBqZ4-Xv_yppxup52vb2VH2dmL7NG1u0G5yazsg&oe=67D63488"
                className="w-full h-full object-cover"
                alt="Image 1"
              />
            </div>
            <div className="h-[500px]">
              <img
                src="https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/471151942_122111934122619517_1719611978698082031_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ngxxQnvST6cQ7kNvgElI3zR&_nc_oc=AdhRF9E_GY5uEPL5Nm7Z_eXpckt4Wdim6h9D5Q7MQIIi6XHXQgTfMo4AjYhoZHJMowH66SDOOmhIdxfgh9jOtVH_&_nc_zt=23&_nc_ht=scontent.fdac99-1.fna&_nc_gid=A6AP_PVfjkc2vBprToOK0Ts&oh=00_AYFV2KTpjc0wrqUx3te4O0XksQ7GVZZg0DGdbJ4kFTU9IQ&oe=67D634A7"
                className="w-full h-full object-cover"
                alt="Image 2"
              />
            </div>
            <div className="h-[500px]">
              <img
                src="https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/476778786_122156644100360971_5388991158254592093_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=JWKEbQuawxcQ7kNvgF3w4AN&_nc_oc=AdiZLglCCxIRI6MtnnTp4KG_W_XBmZprXiD3wiZMPM1GuUhnh_EgBBshwuUkP5QCjtTLxOYm5TAseQ9AWqfPuW0w&_nc_zt=23&_nc_ht=scontent.fdac99-1.fna&_nc_gid=A49xGpwBn5wBwaDC_VoPrcX&oh=00_AYFBWX9BU-FWj5tRUFs3ZbnKi3vnH8Bjaw0OdzUQfZHuIw&oe=67D64E78"
                className="w-full h-full object-cover border p-1"
                alt="Image 3"
              />
            </div>
            <div className="h-[500px]">
              <img
                src="https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/477782269_122156900210360971_3604448716082390891_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Nj3UKH9epqEQ7kNvgG1_BIO&_nc_oc=AdiP1B1ksWZ5wZ1tmcvsZJ-Lei9iriwnM0Xcq3CEctsrK1forykcpj12RzmdB-JEtMA30WI6DAKi6BtcxVUSby5m&_nc_zt=23&_nc_ht=scontent.fdac99-1.fna&_nc_gid=AVX5I2Z-DbJojnQObpJhNXa&oh=00_AYHLyV_p9bjV3PqgCmg82jwJ9JylNHKZVNnqMbIe1MRcvg&oe=67D61FA0"
                className="w-full h-full object-cover border p-1"
                alt="Image 4"
              />
            </div>
            {/* <div className="h-[500px]">
              <img
                src="https://images.pexels.com/photos/4045552/pexels-photo-4045552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="w-full h-full object-cover"
                alt="Image 3"
              />
            </div>
            <div className="h-[500px]">
              <img
                src="https://images.pexels.com/photos/28248500/pexels-photo-28248500/free-photo-of-toothbrushes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="w-full h-full object-cover"
                alt="Image 4"
              />
            </div> */}

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
