import React from "react";
import { Link } from "react-router-dom";
import LogoText from "../../assets/dental-couple-text1.png";
const CreateAt = () => {
  return (
    <div className="bg-black text-gray-500 pb-7 pt-7">
      <div className="flex justify-center gap-5 px-6 sm:px-12 md:px-[100px] w-full">
        <div className="flex flex-col md:flex-row items-center text-center md:text-left">
          <p>
            ©{" "}
            <span className="font-bold">
              <span className="font-bold text-amber-800 italic">D</span>
              ental <span className="font-bold text-fuchsia-500 italic">C</span>
              ouple
            </span>{" "}
            2025, All Rights reserved | Developed by
          </p>
          <Link
            to="https://codewithfoyzun.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="mt-2 md:mt-0 hover:underline ml-1"> Suparna</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateAt;
