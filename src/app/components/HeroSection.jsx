"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDownRight, Download } from "lucide-react";

const HeroSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <section className="min-h-screen flex items-center py-12 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="col-span-7 space-y-8"
          >
            <motion.div 
              className="space-y-4"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              <div className="inline-block">
                <motion.span 
                  className="text-sm md:text-base bg-gradient-to-r from-primary-400/20 to-secondary-600/20 text-primary-400 py-2 px-4 rounded-full"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Welcome to my portfolio
                </motion.span>
              </div>
              
              <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                  Hello, I&apos;m{" "}
                </span>
                <br />
                <TypeAnimation
                  sequence={[
                    "Aristocrat",
                    1000,
                    "Web Developer",
                    1000,
                    "Problem Solver",
                    1000,
                    "Tech Enthusiast",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-white"
                />
              </h1>
            </motion.div>

            <motion.p 
              className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.4 }}
            >
              A skilled IT student with a strong foundation in technology, and
              expertise in diagnosing and fixing software problems.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.6 }}
            >
              <Link
                href="/#contact"
                className="group flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25"
              >
                Hire Me
                <ArrowDownRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link
                href="https://profile.indeed.com/p/davido-z6ym5ng"
                className="group flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white font-medium backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105"
              >
                <Download className="w-5 h-5" />
                Download CV
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="col-span-5 justify-self-center lg:justify-self-end"
          >
            <div className="relative">
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-500 to-secondary-500 blur-3xl opacity-30"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 45, 0]
                }}
                transition={{ 
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <div className="relative rounded-full bg-[#181818] w-[280px] h-[280px] lg:w-[400px] lg:h-[400px] overflow-hidden shadow-xl shadow-black/50">
                <Image
                  src="/images/aristocrat.png"
                  alt="hero image"
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-all duration-500 hover:scale-110"
                  width={300}
                  height={300}
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;