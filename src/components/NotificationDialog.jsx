import React from "react";
import Notifi from "../assets/campain.jpg";
import logo from "../assets/logo-1.png";

const NotificationDialog = ({ isVisible, onClose }) => {
  if (!isVisible) return null; // Do not render the dialog if it's not visible

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 mt-[120px]">
      <div className="bg-white rounded-lg shadow-lg p-2 max-w-lg w-full relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-gray-200 text-gray-800 hover:bg-gray-300 rounded-full p-2 focus:outline-none"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="h-[420px] overflow-hidden">
          <img
            src={Notifi}
            alt="Notification"
            className="h-[450px] w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default NotificationDialog;
