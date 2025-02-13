"use client"
import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import { useTheme } from "next-themes"

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
})

const achievementsList = [
  {
    metric: "Projects",
    value: "45",
    postfix: "+",
    icon: "🚀",
    description: "Completed projects across various domains",
  },
  {
    prefix: "~",
    metric: "LinkedIn Connections",
    value: "500000",
    icon: "🌐",
    description: "Professional network reach",
  },
  {
    metric: "Awards",
    value: "3",
    icon: "🏆",
    description: "Recognition for excellence",
  },
  {
    metric: "Years",
    value: "2",
    icon: "⭐",
    description: "Years of dedicated experience",
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
        duration: 2,
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

  return (
    <div
      className={`rounded-lg py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300 relative
        ${
          isDarkMode
            ? "bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-950"
            : "bg-gradient-to-br from-indigo-100 via-purple-200 to-indigo-100"
        }`}
    >
      {/* Animated background waves */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-full h-64 ${
              isDarkMode ? "bg-purple-600/5" : "bg-purple-300/5"
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
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="flex items-center justify-center mb-10 sm:mb-16 relative">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            }}
            className="absolute opacity-20"
          >
            <Sparkles size={120} className={isDarkMode ? "text-purple-300" : "text-purple-500"} />
          </motion.div>
          <div className="text-center space-y-2">
            <motion.h2
              variants={itemVariants}
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent 
                ${
                  isDarkMode
                    ? "bg-gradient-to-r from-purple-300 to-indigo-300"
                    : "bg-gradient-to-r from-purple-600 to-indigo-700"
                }`}
            >
              Milestones & Achievements
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className={`text-sm sm:text-base max-w-2xl mx-auto ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
            >
              Celebrating the journey of continuous growth and success
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {achievementsList.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                rotate: [0, -1, 1, -1, 0],
                transition: { duration: 0.3 },
              }}
              className="relative group"
            >
              <motion.div
                className={`absolute inset-0 rounded-2xl blur-xl transition-all duration-300 
                  ${
                    isDarkMode
                      ? "bg-gradient-to-r from-purple-500/20 to-indigo-500/20"
                      : "bg-gradient-to-r from-purple-200/30 to-indigo-300/30"
                  }`}
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <div
                className={`relative rounded-2xl p-6 sm:p-8 border backdrop-blur-sm transition-all duration-300
                  ${
                    isDarkMode
                      ? "bg-gray-900/80 border-purple-500/10 text-white"
                      : "bg-white border-gray-200 text-gray-900"
                  } 
                  group-hover:border-purple-500/20`}
              >
                <div className="flex flex-col items-center space-y-4">
                  <motion.div
                    className="relative"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: [0, -10, 10, -10, 0],
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-4xl sm:text-5xl relative z-10">{achievement.icon}</span>
                    <motion.div 
                      className="absolute inset-0 blur-xl rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    />
                  </motion.div>

                  <h3 className="flex flex-row items-center justify-center gap-1 text-3xl sm:text-4xl font-bold">
                    {achievement.prefix && (
                      <span className={isDarkMode ? "text-purple-300" : "text-purple-500"}>{achievement.prefix}</span>
                    )}
                    <AnimatedNumbers
                      includeComma
                      animateToNumber={Number.parseInt(achievement.value.replace(/,/g, ""))}
                      locale="en-US"
                      className={`bg-clip-text text-transparent ${
                        isDarkMode
                          ? "bg-gradient-to-r from-purple-300 to-indigo-300"
                          : "bg-gradient-to-r from-purple-500 to-indigo-700"
                      }`}
                      configs={(_, index) => ({
                        mass: 1,
                        friction: 100,
                        tensions: 140 * (index + 1),
                      })}
                    />
                    {achievement.postfix && (
                      <span className={isDarkMode ? "text-purple-300" : "text-purple-500"}>
                        {achievement.postfix}
                      </span>
                    )}
                  </h3>

                  <div className="space-y-2 text-center">
                    <p className={`text-base sm:text-lg font-medium ${isDarkMode ? "text-purple-300" : "text-purple-500"}`}>
                      {achievement.metric}
                    </p>
                    <p
                      className={`text-xs sm:text-sm transition-all duration-300 max-h-0 group-hover:max-h-20 overflow-hidden 
                        ${
                          isDarkMode
                            ? "text-gray-400 opacity-0 group-hover:opacity-100"
                            : "text-gray-600 opacity-0 group-hover:opacity-100"
                        }`}
                    >
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default AchievementsSection