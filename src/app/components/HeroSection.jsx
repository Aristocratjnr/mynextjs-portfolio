"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDownRight, Download } from "lucide-react";

const HeroSection = () => {
  const floatingStars = Array(30).fill(null);

  return (
    <section className="min-h-screen flex items-center py-12 lg:py-24 overflow-hidden relative isolate">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {/* Floating Particles */}
        {floatingStars.map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white/10 rounded-full"
            initial={{
              opacity: 0,
              x: Math.random() * 100 - 50 + "%",
              y: Math.random() * 100 - 50 + "%",
            }}
            animate={{
              opacity: [0, 0.3, 0],
              y: ["0%", "-100%"],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* Gradient Backgrounds */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-primary-500/15 to-secondary-500/15 rounded-full blur-[150px]"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="col-span-7 space-y-10"
          >
            <div className="space-y-6">
              {/* Welcome Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-lg border border-primary-500/30 hover:border-primary-500/50 transition-all group">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-400" />
                  </span>
                  <span className="text-sm font-medium bg-gradient-to-r from-primary-300 to-secondary-300 bg-clip-text text-transparent">
                    Welcome to my portfolio
                  </span>
                  <div className="ml-2 w-4 h-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </motion.div>

              {/* Main Heading */}
              <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 relative inline-block">
                  <span className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-20" />
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
                  className="text-white inline-block bg-gradient-to-r from-primary-400 to-secondary-600 bg-clip-text text-transparent"
                />
              </h1>
            </div>

            {/* Description */}
            <motion.p 
              className="text-gray-300/90 text-lg md:text-xl max-w-2xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Crafting <span className="text-primary-300">digital experiences</span> that 
              blend innovation with functionality. Specializing in modern web 
              development with a focus on performance and user-centric design.
            </motion.p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  href="/#contact"
                  className="group relative overflow-hidden flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/30"
                >
                  <span className="relative z-10">Hire Me</span>
                  <ArrowDownRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Link
                  href="https://profile.indeed.com/p/davido-z6ym5ng"
                  className="group relative flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-white/10 text-white font-medium backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105"
                >
                  <Download className="w-5 h-5 transition-transform group-hover:scale-110" />
                  <span className="relative z-10">Download CV</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="col-span-5 justify-self-center lg:justify-self-end relative"
          >
            <div className="relative group group-hover:[transform-style:preserve-3d]">
              {/* Floating Effect */}
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-500 to-secondary-500 blur-3xl opacity-30 animate-pulse"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Image Container */}
              <motion.div
                whileHover={{ 
                  rotateY: 5,
                  rotateX: -5,
                  scale: 1.05
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative rounded-full bg-[#181818] w-[280px] h-[280px] lg:w-[400px] lg:h-[400px] overflow-hidden shadow-2xl shadow-black/50 border-2 border-white/10 backdrop-blur-sm"
              >
                <Image
                  src="/images/aristocrat.png"
                  alt="Aristocrat Jnr"
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-all duration-500 group-hover:scale-110"
                  width={400}
                  height={400}
                  priority
                />
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all flex items-center gap-2"
                whileHover={{ y: -5 }}
              >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium bg-gradient-to-r from-primary-300 to-secondary-300 bg-clip-text text-transparent">
                  Available for work
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <div className="animate-bounce w-8 h-8 border-2 border-white/20 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;