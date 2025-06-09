"use client"
import Image from "next/image"
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowDownRight, Download, Sparkles, Code, Boxes } from "lucide-react"
import { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"

const HeroSection = () => {
  const skillBadges = [
    { icon: <Code className="w-4 h-4" />, text: "Aspiring Full Stack Dev" },
    { icon: <Boxes className="w-4 h-4" />, text: "UI/UX Design" },
    { icon: <Sparkles className="w-4 h-4" />, text: "Problem Solving" },
  ]

  // Initialize tsParticles
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <section className="min-h-screen flex items-center py-8 lg:py-24 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 relative overflow-hidden">
      {/* Particles background - more visible in both themes */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0"
        options={{
          fpsLimit: 60,
          fullScreen: { enable: false },
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
                distance: 100,
              },
            },
            modes: {
              push: {
                quantity: 3,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: ["#6366f1", "#818cf8", "#4f46e5"], // Light mode: indigo shades
            },
            links: {
              color: "#818cf8",
              distance: 150,
              enable: true,
              opacity: 0.25, // Increased opacity for better visibility
              width: 1.2, // Slightly thicker lines
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1, // Slightly faster for better visibility
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800, // Decreased area = more particles
              },
              value: 50, // Increased number of particles
            },
            opacity: {
              value: 0.35, // More visible
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 }, // Slightly larger particles
            },
          },
          detectRetina: true,
        }}
      />

      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/30 to-white/10 dark:from-indigo-950/30 dark:to-slate-950/80 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Profile Image Section - Now with rounded image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Subtle glow effect - adjusted for circular shape */}
              <motion.div
                className="absolute inset-0 rounded-full bg-indigo-400/20 dark:bg-indigo-500/10 blur-2xl opacity-30"
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />

              {/* Profile image container - now fully rounded */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="relative rounded-full bg-white dark:bg-slate-800 w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] lg:w-[400px] lg:h-[400px] overflow-hidden shadow-lg shadow-slate-200/50 dark:shadow-black/30 border border-slate-200 dark:border-slate-700 mx-auto"
              >
                <Image
                  src="/images/junior.jpeg"
                  alt="Aristocrat Jnr"
                  className="object-cover transition-all duration-700 hover:scale-105"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 640px) 240px, (max-width: 1024px) 320px, 400px"
                  priority
                />
              </motion.div>

              {/* Available badge */}
              <motion.div
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full bg-white dark:bg-slate-800 shadow-md dark:shadow-black/20 border border-slate-200 dark:border-slate-700 flex items-center gap-2"
                whileHover={{ y: -3 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                  Available for work
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section - remaining code unchanged */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="col-span-7 space-y-7 text-center lg:text-left order-2 lg:order-1"
          >
            {/* Welcome badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 transition-all duration-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-full w-full bg-indigo-500" />
                </span>
                <span className="text-xs font-medium text-indigo-700 dark:text-indigo-300">
                  Welcome to my portfolio
                </span>
              </span>
            </motion.div>

            {/* Name and title */}
            <div className="space-y-3">
              <h1 className="text-slate-900 dark:text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-indigo-600 dark:text-indigo-400">
                  Hello, I&apos;m{" "}
                </span>
                <br />
                <TypeAnimation
                  sequence={[
                    "David A. Obuobi",
                    1200,
                    "Web Developer",
                    1200,
                    "Problem Solver",
                    1200,
                    "Tech Enthusiast",
                    1200,
                  ]}
                  wrapper="span"
                  speed={40}
                  repeat={Number.POSITIVE_INFINITY}
                  className="text-slate-800 dark:text-slate-200"
                />
              </h1>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start pt-2">
                {skillBadges.map((badge, index) => (
                  <motion.div
                    key={badge.text}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 flex items-center gap-2"
                  >
                    <span className="text-indigo-600 dark:text-indigo-400">{badge.icon}</span>
                    <span className="text-xs text-slate-700 dark:text-slate-300">{badge.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Description */}
            <motion.p
              className="text-slate-600 dark:text-slate-400 text-base lg:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              I transform ideas into <span className="text-indigo-600 dark:text-indigo-400 font-medium">elegant solutions</span>{" "}
              through clean, efficient code. Building <span className="text-indigo-600 dark:text-indigo-400 font-medium">responsive interfaces</span>{" "}
              and <span className="text-indigo-600 dark:text-indigo-400 font-medium">intuitive experiences</span> that make technology more human.
            </motion.p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="mailto:ayimobuobi@gmail.com"
                  className="group flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm transition-all duration-300 w-full"
                >
                  <span>Hire Me</span>
                  <ArrowDownRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="https://profile.indeed.com/p/davido-z6ym5ng"
                  className="group flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-medium text-sm transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-700 w-full"
                >
                  <Download className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span>Download CV</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-8 h-14 border-2 border-slate-300 dark:border-slate-700 rounded-full flex items-center justify-center"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              className="w-2 h-2 bg-indigo-500 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection

