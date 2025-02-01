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
    <div className="py-16 px-4 xl:gap-16 sm:py-24 xl:px-16 bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-950">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex items-center justify-center mb-16 relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute opacity-20"
          >
            <Sparkles size={120} className="text-purple-300" />
          </motion.div>
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300 text-center relative">
            Milestones & Achievements
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievementsList.map((achievement, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                <div className="relative bg-gray-900 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-purple-500/20">
                  <div className="flex flex-col items-center space-y-4">
                    <motion.span 
                      className="text-5xl mb-2"
                      whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {achievement.icon}
                    </motion.span>
                    
                    <h3 className="text-white text-4xl font-bold flex flex-row items-center bg-clip-text">
                      {achievement.prefix}
                      <AnimatedNumbers
                        includeComma
                        animateToNumber={parseInt(achievement.value.replace(/,/g, ''))}
                        locale="en-US"
                        className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300 text-4xl font-bold"
                        configs={(_, index) => ({
                          mass: 1,
                          friction: 100,
                          tensions: 140 * (index + 1),
                        })}
                      />
                      {achievement.postfix}
                    </h3>
                    
                    <div className="space-y-2 text-center">
                      <p className="text-purple-300 text-lg font-medium">
                        {achievement.metric}
                      </p>
                      <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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