"use client"
import Image from "next/image"
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowDownRight, Download, Sparkles, Code, Boxes } from "lucide-react"

const HeroSection = () => {
  const floatingStars = Array(40).fill(null)

  const skillBadges = [
    { icon: <Code className="w-4 h-4" />, text: "Aspirant Full Stack Dev" },
    { icon: <Boxes className="w-4 h-4" />, text: "UI/UX Design" },
    { icon: <Sparkles className="w-4 h-4" />, text: "Problem Solving" },
  ]

  return (
    <section className="min-h-screen flex items-center py-8 lg:py-24 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {floatingStars.map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full"
            initial={{
              opacity: 0,
              x: Math.random() * 100 - 50 + "%",
              y: Math.random() * 100 - 50 + "%",
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              opacity: [0, 0.4, 0],
              y: ["0%", "-150%"],
              scale: [1, Math.random() * 0.5 + 1, 1],
            }}
            transition={{
              duration: Math.random() * 8 + 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}

        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute top-1/4 -left-1/4 w-[400px] sm:w-[600px] lg:w-[800px] h-[400px] sm:h-[600px] lg:h-[800px] bg-gradient-to-r from-primary-500/10 to-secondary-500/10 dark:from-primary-500/20 dark:to-secondary-500/20 rounded-full blur-[120px] sm:blur-[180px]"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative group">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-500 via-secondary-500 to-primary-500 blur-3xl opacity-30"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />

              <motion.div
                whileHover={{ rotateY: 8, rotateX: -8, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative rounded-full bg-gray-200 dark:bg-gray-800 w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] lg:w-[440px] lg:h-[440px] overflow-hidden shadow-2xl shadow-black/20 dark:shadow-black/50 border-2 border-gray-300/20 dark:border-white/10 backdrop-blur-xl mx-auto"
              >
                <Image
                  src="/images/junior.jpeg"
                  alt="Aristocrat Jnr"
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-all duration-700 group-hover:scale-110"
                  width={440}
                  height={440}
                  priority
                />
              </motion.div>

              <motion.div
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 hover:border-gray-300/50 dark:hover:border-white/20 transition-all duration-300 flex items-center gap-2 sm:gap-3"
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs sm:text-sm md:text-base font-medium bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-300 dark:via-white dark:to-secondary-300 bg-clip-text text-transparent whitespace-nowrap">
                  Available for work🧑‍💻
                </span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1"
          >
            <div className="space-y-4 sm:space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                <span className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gray-100/80 dark:bg-white/5 backdrop-blur-xl border border-primary-500/30 hover:border-primary-500/50 transition-all duration-300 group">
                  <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-full w-full bg-primary-400" />
                  </span>
                  <span className="text-xs sm:text-sm font-medium bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-300 dark:via-white dark:to-secondary-300 bg-clip-text text-transparent">
                    Welcome to my portfolio
                  </span>
                </span>
              </motion.div>

              <h1 className="text-gray-900 dark:text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-600">
                    Hello, I&apos;m{" "}
                  </span>
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
                  className="text-gray-900 dark:text-white inline-block bg-gradient-to-r from-primary-600 via-gray-900 to-secondary-600 dark:from-primary-400 dark:via-white dark:to-secondary-600 bg-clip-text text-transparent"
                />
              </h1>

              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
                {skillBadges.map((badge, index) => (
                  <motion.div
                    key={badge.text}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gray-100/80 dark:bg-white/5 backdrop-blur-lg border border-gray-200/50 dark:border-white/10 flex items-center gap-1.5 sm:gap-2"
                  >
                    {badge.icon}
                    <span className="text-xs sm:text-sm text-gray-700 dark:text-white/80">{badge.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.p
              className="text-gray-600 dark:text-gray-300/90 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Crafting <span className="text-primary-600 dark:text-primary-300 font-semibold">digital experiences</span>{" "}
              that blend innovation with functionality. Specializing in modern web development with a focus on{" "}
              <span className="text-secondary-600 dark:text-secondary-300 font-semibold">performance</span> and
              <span className="text-primary-600 dark:text-primary-300 font-semibold"> user-centric design</span>.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="mailto:ayimobuobi@gmail.com"
                  className="group relative overflow-hidden flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium text-sm sm:text-base transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/30 w-full"
                >
                  <span className="relative z-10">Hire Me</span>
                  <ArrowDownRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="https://profile.indeed.com/p/davido-z6ym5ng"
                  className="group relative flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gray-100/80 dark:bg-white/10 text-gray-900 dark:text-white font-medium text-sm sm:text-base backdrop-blur-xl transition-all duration-500 hover:bg-gray-200/80 dark:hover:bg-white/20 hover:scale-105 w-full"
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-500 group-hover:scale-125" />
                  <span className="relative z-10">Download CV</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-gray-300/20 dark:border-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection

