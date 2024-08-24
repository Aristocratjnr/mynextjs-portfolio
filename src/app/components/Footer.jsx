import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between items-center">
        <span>My Portfolio</span>
        <p className="text-slate-600">@Aristocratjnr🧸🎈</p>
      </div>

      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/+233551784926?text=Hello%20Aristocrat" // 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 bg-green-500 p-3 rounded-full text-white hover:bg-green-600 transition-transform duration-300 transform hover:scale-110 shadow-lg"
      >
        <FaWhatsapp size={28} />
      </a>
    </footer>
  );
};

export default Footer;
