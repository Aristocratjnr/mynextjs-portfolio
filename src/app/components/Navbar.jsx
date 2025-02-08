"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, User, Mail, Menu, X, Home, ExternalLink } from "lucide-react";

const navLinks = [
  {
    title: "About",
    path: "#about",
    icon: User,
    description: "Learn more about me"
  },
  {
    title: "Projects",
    path: "#projects",
    icon: Code,
    description: "View my work"
  },
  {
    title: "Contact",
    path: "#contact",
    icon: Mail,
    description: "Get in touch"
  }
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isHovered, setIsHovered] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = navLinks.map(link => link.path.slice(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      setActiveSection(currentSection || "");
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    })
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed mx-auto top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between px-4 py-4">
          <motion.div
            variants={logoVariants}
            initial="hidden"
            animate="visible"
          >
            <Link
              href="/"
              className="relative group flex items-center"
              onMouseEnter={() => setIsHovered("logo")}
              onMouseLeave={() => setIsHovered("")}
            >
              <motion.div
                animate={{
                  scale: isHovered === "logo" ? 1.1 : 1
                }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
               
              </motion.div>
              <span className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-indigo-400 hover:from-purple-200 hover:to-indigo-300 transition-all duration-300">
                David.
              </span>
              <motion.div
                className="absolute inset-0 rounded-lg"
                animate={{
                  boxShadow: isHovered === "logo" 
                    ? "0 0 20px rgba(167, 139, 250, 0.3)" 
                    : "0 0 0px rgba(167, 139, 250, 0)"
                }}
              />
            </Link>
          </motion.div>

          <motion.button
            className="block md:hidden p-2 rounded-lg bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700 transition-colors duration-200"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={navbarOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {navbarOpen ? (
                  <X className="w-6 h-6 text-gray-200" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-200" />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.button>

          <div className="hidden md:block">
            <ul className="flex items-center space-x-2">
              {navLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <motion.li
                    key={index}
                    custom={index}
                    variants={navItemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      href={link.path}
                      className="relative group"
                      onMouseEnter={() => setIsHovered(link.title)}
                      onMouseLeave={() => setIsHovered("")}
                    >
                      <motion.div
                        className="px-4 py-2 rounded-lg flex items-center space-x-2"
                        animate={{
                          backgroundColor: isHovered === link.title 
                            ? "rgba(124, 58, 237, 0.1)" 
                            : "rgba(124, 58, 237, 0)"
                        }}
                      >
                        <motion.div
                          animate={{
                            scale: isHovered === link.title ? 1.2 : 1,
                            rotate: isHovered === link.title ? 360 : 0
                          }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                          <IconComponent className="w-5 h-5 text-purple-400" />
                        </motion.div>
                        <span className={`font-medium transition-colors duration-200 ${
                          activeSection === link.path.slice(1)
                            ? 'text-purple-400'
                            : 'text-gray-300 group-hover:text-white'
                        }`}>
                          {link.title}
                        </span>
                      </motion.div>
                      
                      <AnimatePresence>
                        {isHovered === link.title && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute left-1/2 -bottom-12 transform -translate-x-1/2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg whitespace-nowrap"
                          >
                            {link.description}
                            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>

        <AnimatePresence>
          {navbarOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800"
            >
              <ul className="px-4 py-4 space-y-3">
                {navLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.path}
                        onClick={() => setNavbarOpen(false)}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-200"
                      >
                        <div className="flex items-center space-x-3">
                          <IconComponent className="w-5 h-5 text-purple-400" />
                          <span className="font-medium text-gray-300">{link.title}</span>
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-500" />
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;