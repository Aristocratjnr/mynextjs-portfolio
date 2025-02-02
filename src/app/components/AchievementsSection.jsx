"use client";
import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const AnimatedNumbers = dynamic(
  () => import("react-animated-numbers"),
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "45",
    postfix: "+",
    icon: "🚀",
    description: "Completed projects across various domains"
  },
  {
    prefix: "~",
    metric: "LinkedIn Connections",
    value: "500000",
    icon: "🌐",
    description: "Professional network reach"
  },
  {
    metric: "Awards",
    value: "3",
    icon: "🏆",
    description: "Recognition for excellence"
  },
  {
    metric: "Years",
    value: "2",
    icon: "⭐",
    description: "Years of dedicated experience"
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-950 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex items-center justify-center mb-10 sm:mb-16 relative">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute opacity-20"
          >
            <Sparkles size={120} className="text-purple-300" />
          </motion.div>
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300 relative">
              Milestones & Achievements
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
              Celebrating the journey of continuous growth and success
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {achievementsList.map((achievement, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="relative group"
              >
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-2xl blur-xl 
                    group-hover:from-purple-500/30 group-hover:to-indigo-500/30 transition-all duration-300" 
                />
                <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 
                  hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all duration-300 
                  border border-purple-500/10 group-hover:border-purple-500/20">
                  <div className="flex flex-col items-center space-y-4">
                    <motion.div 
                      className="relative"
                      whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className="text-4xl sm:text-5xl relative z-10">{achievement.icon}</span>
                      <div className="absolute inset-0 bg-purple-500/10 blur-xl rounded-full scale-150" />
                    </motion.div>
                    
                    <h3 className="text-white text-3xl sm:text-4xl font-bold flex flex-row items-center justify-center gap-1">
                      {achievement.prefix && (
                        <span className="text-purple-300">{achievement.prefix}</span>
                      )}
                      <AnimatedNumbers
                        includeComma
                        animateToNumber={parseInt(achievement.value.replace(/,/g, ''))}
                        locale="en-US"
                        className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300"
                        configs={(_, index) => ({
                          mass: 1,
                          friction: 100,
                          tensions: 140 * (index + 1),
                        })}
                      />
                      {achievement.postfix && (
                        <span className="text-purple-300">{achievement.postfix}</span>
                      )}
                    </h3>
                    
                    <div className="space-y-2 text-center">
                      <p className="text-purple-300 text-base sm:text-lg font-medium">
                        {achievement.metric}
                      </p>
                      <p className="text-gray-400 text-xs sm:text-sm 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300
                        max-h-0 group-hover:max-h-20 overflow-hidden">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default AchievementsSection;