import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer border-t border-[#33353F] bg-gradient-to-b from-[#0A0A0A] to-black/90">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          {/* Left Section */}
          <div className="flex flex-col items-center sm:items-start">
            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 hover:from-primary-300 hover:to-secondary-300 transition-all duration-300">
              My Portfolio
            </span>
            <p className="mt-2 text-center sm:text-left text-sm text-gray-400 hover:text-gray-300 transition-colors">
              Crafted with passion and precision
            </p>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-center sm:items-end mt-4 sm:mt-0">
            <p className="text-gray-400 text-sm hover:text-gray-300 transition-colors">
              © {new Date().getFullYear()} Aristocratjnr🧸🎈
            </p>
            <p className="text-gray-500 text-xs mt-1">✨ Building Digital Experiences</p>
          </div>
        </div>

        {/* WhatsApp Floating Button */}
        <Link
          href="https://wa.me/+233551784926?text=Hello%20Aristocrat"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 bg-green-500/90 hover:bg-green-400 p-3 rounded-full text-white transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-green-500/30 group"
          aria-label="Contact via WhatsApp"
        >
          <FaWhatsapp 
            className="size-6 sm:size-7 transition-transform group-hover:rotate-[-8deg]" 
          />
          <div className="absolute -right-1 -top-1 w-3 h-3 bg-white rounded-full animate-ping" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;