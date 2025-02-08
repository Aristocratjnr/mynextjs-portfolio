"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail, ExternalLink, Heart } from "lucide-react";

const socialLinks = [
  { icon: <Github className="w-4 h-4" />, href: "#", label: "GitHub" },
  { icon: <Twitter className="w-4 h-4" />, href: "#", label: "Twitter" },
  { icon: <Linkedin className="w-4 h-4" />, href: "#", label: "LinkedIn" },
  { icon: <Mail className="w-4 h-4" />, href: "#", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black to-black/90" />
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-violet-500/5 to-blue-500/5 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-r from-blue-500/5 to-violet-500/5 rounded-full blur-[100px]"
        />
      </div>

      <div className="container relative mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-left"
            >
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-violet-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                David Ayim Obuobi.
              </span>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed max-w-md mx-auto md:mx-0">
                Crafting digital experiences with passion and precision. Building the future, one pixel at a time.
              </p>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white text-center md:text-left">Quick Links</h3>
            <ul className="space-y-2 flex flex-col items-center md:items-start">
              {['About', 'Projects', 'Blog', 'Contact'].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="w-full max-w-[200px] md:max-w-none"
                >
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-violet-400 transition-colors duration-300 text-sm flex items-center gap-1.5 group justify-center md:justify-start"
                  >
                    <ExternalLink className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white text-center md:text-left">Connect</h3>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 
                    transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <div className="transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-8deg]">
                    {social.icon}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white text-center md:text-left">Newsletter</h3>
            <div className="relative max-w-md mx-auto md:mx-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg
                  focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50
                  text-white placeholder-gray-400 text-sm transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-3 w-full px-4 py-2.5 bg-gradient-to-r from-violet-500 to-blue-500 
                  hover:from-violet-600 hover:to-blue-600 rounded-lg text-white text-sm font-medium
                  transition-all duration-300 shadow-lg shadow-violet-500/25"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <p className="text-gray-400 text-xs sm:text-sm order-2 sm:order-1">
              © {new Date().getFullYear()} Aristocratjnr🧸🎈. Made with{" "}
              <Heart className="inline-block w-3 h-3 sm:w-4 sm:h-4 text-red-500 animate-pulse" /> in Ghana
            </p>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 order-1 sm:order-2">
              <Link href="#" className="hover:text-violet-400 transition-colors">Privacy Policy</Link>
              <span>•</span>
              <Link href="#" className="hover:text-violet-400 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </motion.div>

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
      </div>
    </footer>
  );
};

export default Footer;