"use client";
import React from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail, ExternalLink, Heart } from "lucide-react";
import { useTheme } from "next-themes";

const socialLinks = [
  { icon: <Github className="w-4 h-4" />, href: "https://github.com/Aristocratjnr", label: "GitHub" },
  { icon: <Twitter className="w-4 h-4" />, href: "#", label: "Twitter" },
  { icon: <Linkedin className="w-4 h-4" />, href: "https://www.linkedin.com/in/obuobi-david-ayim", label: "LinkedIn" },
  { icon: <Mail className="w-4 h-4" />, href: "mailto:ayimobuobi@gmail.com", label: "Email" },
];

const Footer = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <footer className={`relative overflow-hidden border-t ${isDarkMode ? "border-white/10 bg-black" : "border-gray-300 bg-white"}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute inset-0 ${isDarkMode ? "bg-gradient-to-b from-black/50 via-black to-black/90" : "bg-gradient-to-b from-white via-gray-100 to-gray-200"}`} />
      </div>

      <div className="container relative mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className={`text-xl sm:text-2xl font-bold bg-gradient-to-r from-violet-400 via-blue-400 to-violet-400 bg-clip-text text-transparent`}>David Ayim Obuobi.</span>
              <p className={`mt-2 text-sm leading-relaxed max-w-md mx-auto md:mx-0 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                Crafting digital experiences with passion and precision. Building the future, one pixel at a time.
              </p>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className={`text-lg font-semibold text-center md:text-left ${isDarkMode ? "text-white" : "text-gray-800"}`}>Quick Links</h3>
            <ul className="space-y-2 flex flex-col items-center md:items-start">
              {["About", "Projects", "Blog", "Contact"].map((item, index) => (
                <motion.li key={item} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: index * 0.1 }}>
                  <Link href={`#${item.toLowerCase()}`} className={`text-sm flex items-center gap-1.5 group justify-center md:justify-start ${isDarkMode ? "text-gray-400 hover:text-violet-400" : "text-gray-600 hover:text-blue-500"}`}>
                    <ExternalLink className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className={`text-lg font-semibold text-center md:text-left ${isDarkMode ? "text-white" : "text-gray-800"}`}>Connect</h3>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {socialLinks.map((social, index) => (
                <motion.a key={social.label} href={social.href} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: index * 0.1 }} className={`p-2 rounded-lg border transition-all duration-300 group ${isDarkMode ? "bg-white/5 border-white/10 hover:border-white/20" : "bg-gray-100 border-gray-300 hover:border-gray-400"}`} aria-label={social.label}>
                  <div className="transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-8deg]">{social.icon}</div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

         {/* WhatsApp Button */}
         <Link
          href="https://wa.me/+233551784926?text=Hello%20Aristocrat"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-50"
          aria-label="Contact via WhatsApp"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative p-2.5 sm:p-3 lg:p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full 
              shadow-lg shadow-green-500/25 group transition-all duration-300"
          >
            <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 transition-transform duration-300 group-hover:rotate-[-8deg]" />
            <div className="absolute -right-1 -top-1 w-2 h-2 sm:w-3 sm:h-3">
              <div className="absolute inline-flex w-full h-full rounded-full bg-white opacity-75 animate-ping" />
              <div className="relative inline-flex w-full h-full rounded-full bg-white" />
            </div>
          </motion.div>
        </Link>

        {/* Bottom Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className={`mt-8 sm:mt-12 pt-6 sm:pt-8 border-t ${isDarkMode ? "border-white/10" : "border-gray-300"}`}>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <p className={`text-xs sm:text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
              © {new Date().getFullYear()} Aristocratjnr🧸🎈. Made with <Heart className="inline-block w-3 h-3 sm:w-4 sm:h-4 text-red-500 animate-pulse" /> in Ghana
            </p>
            <div className={`flex items-center gap-2 text-xs sm:text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
              <Link href="#" className={`hover:${isDarkMode ? "text-violet-400" : "text-blue-500"} transition-colors`}>Privacy Policy</Link>
              <span>•</span>
              <Link href="#" className={`hover:${isDarkMode ? "text-violet-400" : "text-blue-500"} transition-colors`}>Terms of Service</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;