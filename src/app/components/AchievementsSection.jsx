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
        duration: 3,
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
        staggerChildren: 0.2,
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
        stiffness: 100,
        damping: 10,
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
      {/* Subtle background waves - reduced for mobile */}
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
              rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
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
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
                className="relative group"
              >
                <motion.div
                  className={`absolute inset-0 rounded-2xl ${
                    isDarkMode
                      ? "bg-gradient-to-r from-indigo-500/5 to-indigo-500/5"
                      : "bg-gradient-to-r from-indigo-200/20 to-indigo-300/20"
                  }`}
                  animate={{
                    opacity: [0.5, 0.7, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                <div
                  className={`relative rounded-2xl p-5 sm:p-6 lg:p-7 border backdrop-blur-sm transition-all duration-300
                    ${
                      isDarkMode
                        ? "bg-slate-800/70 border-slate-700 text-white shadow-lg shadow-black/10"
                        : "bg-white/90 border-slate-200 text-slate-900 shadow-lg shadow-indigo-200/30"
                    } 
                    group-hover:border-indigo-500/30 h-full flex flex-col justify-between`}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className={`flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full ${colorClasses.bg} ${colorClasses.border} border`}>
                      <span className={colorClasses.icon}>{achievement.icon}</span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="flex flex-row items-center justify-center text-2xl sm:text-3xl md:text-4xl font-bold" aria-label={`${achievement.value} ${achievement.metric}`}>
                        {achievement.prefix && (
                          <span className={isDarkMode ? "text-indigo-300" : "text-indigo-600"}>{achievement.prefix}</span>
                        )}
                        <AnimatedNumbers
                          includeComma
                          animateToNumber={Number.parseInt(achievement.value.replace(/,/g, ""))}
                          locale="en-US"
                          className={isDarkMode ? "text-white" : "text-slate-800"}
                          configs={(_, index) => ({
                            mass: 1,
                            friction: 100,
                            tensions: 140 * (index + 1),
                          })}
                        />
                        {achievement.postfix && (
                          <span className={isDarkMode ? "text-indigo-300" : "text-indigo-600"}>
                            {achievement.postfix}
                          </span>
                        )}
                      </h3>
                      
                      <p className={`text-base sm:text-lg font-semibold ${isDarkMode ? "text-indigo-300" : "text-indigo-700"}`}>
                        {achievement.metric}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className={`text-sm ${isDarkMode ? "text-slate-400" : "text-slate-600"} text-center leading-relaxed`}>
                      {achievement.description}
                    </p>
                  </div>
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