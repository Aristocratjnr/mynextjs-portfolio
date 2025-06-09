"use client"
import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { Sparkles, Rocket, Award, Globe, Clock } from "lucide-react"
import { useTheme } from "next-themes"

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
})

const achievementsList = [
  {
    metric: "Projects",
    value: "45",
    postfix: "+",
    icon: <Rocket className="w-6 h-6 sm:w-8 sm:h-8" />,
    description: "Completed projects across various domains",
    color: "indigo",
  },
  {
    prefix: "~",
    metric: "LinkedIn Connections",
    value: "500000",
    icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />,
    description: "Professional network reach",
    color: "purple",
  },
  {
    metric: "Awards",
    value: "3",
    icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />,
    description: "Recognition for excellence",
    color: "amber",
  },
  {
    metric: "Years",
    value: "2",
    icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8" />,
    description: "Years of dedicated experience",
    color: "indigo",
  },
]

const AchievementsSection = () => {
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const currentTheme = theme === "system" ? systemTheme : theme
  const isDarkMode = currentTheme === "dark"

  const waveVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 2, // Reduced from 3
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Reduced from 0.2
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200, // Increased from 100
        damping: 20,    // Increased from 10
        duration: 0.4   // Added explicit duration
      },
    },
  }

  const getColorClasses = (color, isDarkMode) => {
    const colorMap = {
      indigo: {
        icon: isDarkMode ? "text-indigo-400" : "text-indigo-600",
        bg: isDarkMode ? "bg-indigo-900/30" : "bg-indigo-100",
        border: isDarkMode ? "border-indigo-700/30" : "border-indigo-200",
      },
      purple: {
        icon: isDarkMode ? "text-purple-400" : "text-purple-600",
        bg: isDarkMode ? "bg-purple-900/30" : "bg-purple-100",
        border: isDarkMode ? "border-purple-700/30" : "border-purple-200",
      },
      amber: {
        icon: isDarkMode ? "text-amber-400" : "text-amber-600",
        bg: isDarkMode ? "bg-amber-900/30" : "bg-amber-100",
        border: isDarkMode ? "border-amber-700/30" : "border-amber-200",
      },
    }
    
    return colorMap[color] || colorMap.indigo
  }

  return (
    <section
      id="achievements"
      aria-labelledby="achievements-heading"
      className={`py-4 sm:py-6 lg:py-8 px-3 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300 relative
        ${
          isDarkMode
            ? "bg-gradient-to-br from-slate-900 to-slate-800"
            : "bg-gradient-to-br from-slate-50 to-indigo-50/50"
        }`}
    >
      {/* Subtle background waves - faster animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-full h-64 ${
              isDarkMode ? "bg-indigo-600/3" : "bg-indigo-300/5"
            }`}
            style={{
              top: `${i * 30}%`,
              left: 0,
              right: 0,
              maskImage: "linear-gradient(to bottom, transparent, black, transparent)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent, black, transparent)",
            }}
            variants={waveVariants}
            animate="animate"
            custom={i}
          />
        ))}
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="flex items-center justify-center mb-6 sm:mb-8 lg:mb-12 relative">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }, // Reduced from 20
              scale: { duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }, // Reduced from 2
            }}
            className="absolute opacity-10"
          >
            <Sparkles size={60} className={`sm:w-20 sm:h-20 lg:w-24 lg:h-24 ${isDarkMode ? "text-indigo-300" : "text-indigo-500"}`} />
          </motion.div>
          <div className="text-center space-y-2 sm:space-y-3">
            <motion.h2
              id="achievements-heading"
              variants={itemVariants}
              className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight
                ${isDarkMode ? "text-white" : "text-slate-800"}`}
            >
              Milestones & <span className={`${isDarkMode ? "text-indigo-400" : "text-indigo-600"}`}>Achievements</span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className={`text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}
            >
              Celebrating the journey of continuous growth and success
            </motion.p>
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {achievementsList.map((achievement, index) => {
            const colorClasses = getColorClasses(achievement.color, isDarkMode);
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  transition: { duration: 0.2, ease: "easeOut" }, // Reduced from 0.3
                }}
                whileTap={{
                  scale: 0.98,
                  transition: { duration: 0.1 }
                }}
                className="relative group cursor-pointer"
              >
                {/* Animated background glow - faster */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 ${
                    achievement.color === 'indigo' ? 'bg-indigo-500/40' :
                    achievement.color === 'purple' ? 'bg-purple-500/40' :
                    achievement.color === 'amber' ? 'bg-amber-500/40' : 'bg-indigo-500/40'
                  }`} // Reduced from duration-500
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 3, // Reduced from 4
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />

                {/* Card content */}
                <div
                  className={`relative rounded-2xl p-6 sm:p-7 lg:p-8 border-2 backdrop-blur-sm transition-all duration-200 h-full
                    ${
                      isDarkMode
                        ? "bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-slate-700/50 text-white shadow-xl shadow-black/20"
                        : "bg-gradient-to-br from-white/95 to-gray-50/95 border-gray-200/50 text-slate-900 shadow-xl shadow-gray-200/50"
                    } 
                    group-hover:border-opacity-80 group-hover:shadow-2xl
                    ${achievement.color === 'indigo' ? 'group-hover:border-indigo-500/50' :
                      achievement.color === 'purple' ? 'group-hover:border-purple-500/50' :
                      achievement.color === 'amber' ? 'group-hover:border-amber-500/50' : 'group-hover:border-indigo-500/50'
                    }`} // Reduced from duration-300
                >
                  {/* Icon section - faster animations */}
                  <div className="flex justify-center mb-6">
                    <motion.div 
                      className={`relative flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 rounded-full ${colorClasses.bg} ${colorClasses.border} border-2 shadow-lg`}
                      whileHover={{ 
                        rotate: [0, -10, 10, -10, 0],
                        scale: 1.1,
                        transition: { duration: 0.3 } // Reduced from 0.5
                      }}
                    >
                      <motion.span 
                        className={colorClasses.icon}
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.15 }} // Reduced from 0.2
                      >
                        {achievement.icon}
                      </motion.span>
                      
                      {/* Floating particles effect - faster */}
                      <motion.div
                        className={`absolute inset-0 rounded-full ${
                          achievement.color === 'indigo' ? 'bg-indigo-500/20' :
                          achievement.color === 'purple' ? 'bg-purple-500/20' :
                          achievement.color === 'amber' ? 'bg-amber-500/20' : 'bg-indigo-500/20'
                        }`}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0, 0.3, 0],
                        }}
                        transition={{
                          duration: 1.5, // Reduced from 2
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Number and metric - faster hover */}
                  <div className="text-center space-y-3 mb-6">
                    <motion.h3 
                      className="flex flex-row items-center justify-center text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight" 
                      aria-label={`${achievement.value} ${achievement.metric}`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.15 }} // Reduced from 0.2
                    >
                      {achievement.prefix && (
                        <span className={`mr-1 ${achievement.color === 'indigo' ? (isDarkMode ? 'text-indigo-400' : 'text-indigo-600') :
                          achievement.color === 'purple' ? (isDarkMode ? 'text-purple-400' : 'text-purple-600') :
                          achievement.color === 'amber' ? (isDarkMode ? 'text-amber-400' : 'text-amber-600') :
                          (isDarkMode ? 'text-indigo-400' : 'text-indigo-600')}`}>
                          {achievement.prefix}
                        </span>
                      )}
                      <AnimatedNumbers
                        includeComma
                        animateToNumber={Number.parseInt(achievement.value.replace(/,/g, ""))}
                        locale="en-US"
                        className={isDarkMode ? "text-white" : "text-slate-800"}
                        configs={(_, index) => ({
                          mass: 1,
                          friction: 120, // Increased from 100
                          tensions: 180 * (index + 1), // Increased from 140
                        })}
                      />
                      {achievement.postfix && (
                        <span className={`ml-1 ${achievement.color === 'indigo' ? (isDarkMode ? 'text-indigo-400' : 'text-indigo-600') :
                          achievement.color === 'purple' ? (isDarkMode ? 'text-purple-400' : 'text-purple-600') :
                          achievement.color === 'amber' ? (isDarkMode ? 'text-amber-400' : 'text-amber-600') :
                          (isDarkMode ? 'text-indigo-400' : 'text-indigo-600')}`}>
                          {achievement.postfix}
                        </span>
                      )}
                    </motion.h3>
                    
                    <p className={`text-lg sm:text-xl font-semibold tracking-wide ${
                      achievement.color === 'indigo' ? (isDarkMode ? 'text-indigo-300' : 'text-indigo-700') :
                      achievement.color === 'purple' ? (isDarkMode ? 'text-purple-300' : 'text-purple-700') :
                      achievement.color === 'amber' ? (isDarkMode ? 'text-amber-300' : 'text-amber-700') :
                      (isDarkMode ? 'text-indigo-300' : 'text-indigo-700')
                    }`}>
                      {achievement.metric}
                    </p>
                  </div>

                  {/* Description */}
                  <div className="text-center">
                    <p className={`text-sm sm:text-base leading-relaxed ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
                      {achievement.description}
                    </p>
                  </div>

                  {/* Bottom accent line - faster animation */}
                  <motion.div
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 rounded-full transition-all duration-200 ${
                      achievement.color === 'indigo' ? 'bg-indigo-500' :
                      achievement.color === 'purple' ? 'bg-purple-500' :
                      achievement.color === 'amber' ? 'bg-amber-500' : 'bg-indigo-500'
                    }`} // Reduced from duration-300
                    initial={{ width: '20%' }}
                    whileHover={{ width: '80%' }}
                    transition={{ duration: 0.2 }} // Reduced from 0.3
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default AchievementsSection