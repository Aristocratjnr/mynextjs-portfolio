"use client"

import { useState, useEffect, useTransition } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { FaHtml5, FaReact, FaPython, FaJsSquare } from "react-icons/fa"
import { SiNextdotjs, SiTailwindcss } from "react-icons/si"
import { BookOpen, Award, Code2, ExternalLink, Github, Briefcase, Code, Laptop } from "lucide-react"
import TabButton from "./TabButton"
import { useTheme } from "next-themes"

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    icon: <Code2 className="w-5 h-5" />,
    content: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4"
      >
        {[
          {
            icon: <FaHtml5 className="text-lg sm:text-xl text-orange-400" />,
            name: "HTML",
            level: 90,
          },
          {
            icon: <SiNextdotjs className="text-lg sm:text-xl" />,
            name: "Next.js",
            level: 85,
          },
          {
            icon: <SiTailwindcss className="text-lg sm:text-xl text-cyan-400" />,
            name: "Tailwind",
            level: 95,
          },
          {
            icon: <FaPython className="text-lg sm:text-xl text-amber-300" />,
            name: "Python",
            level: 80,
          },
          {
            icon: <FaJsSquare className="text-lg sm:text-xl text-yellow-300" />,
            name: "JavaScript",
            level: 88,
          },
          {
            icon: <FaReact className="text-lg sm:text-xl text-sky-400" />,
            name: "React",
            level: 92,
          },
        ].map((skill, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="group relative overflow-hidden p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white dark:bg-gray-800/50 backdrop-blur-lg border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-md transition-all duration-200"
          >
            {/* Simplified gradient hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            
            {/* Reduced decorative elements */}
            <div className="absolute top-0 left-0 w-8 h-8 overflow-hidden">
              <div className="absolute top-0 left-0 w-8 h-8 bg-gradient-to-br from-cyan-500/15 to-transparent -translate-y-1/2 -translate-x-1/2 rounded-full blur-sm" />
            </div>
            
            <div className="flex flex-col items-center text-center space-y-2 sm:space-y-3">
              {/* Smaller icon container */}
              <motion.div 
                whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-700/50 shadow-sm group-hover:shadow-md transition-all duration-200"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-orange-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <div className="transform group-hover:scale-105 transition-transform duration-200">
                  {skill.icon}
                </div>
              </motion.div>
              
              {/* Smaller skill name */}
              <h3 className="font-semibold text-sm sm:text-base text-gray-800 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
                {skill.name}
              </h3>
              
              {/* Compact progress bar */}
              <div className="w-full space-y-1 sm:space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500 dark:text-gray-400">Level</span>
                  <span className="text-xs font-medium text-cyan-600 dark:text-cyan-400">{skill.level}%</span>
                </div>
                <div className="w-full h-1.5 sm:h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ 
                      duration: 1, 
                      delay: index * 0.1,
                      ease: "easeOut" 
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-orange-400"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    icon: <Briefcase className="w-5 h-5" />,
    content: (
      <motion.div className="space-y-3 sm:space-y-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
        {[
          {
            role: "Intern",
            company: "Automation Ghana",
            duration: "February 2024 - March 2024",
            location: "Spintex-Accra",
            description: "Expanded technical knowledge by learning Access Control Systems and developing an Alexa-based project for a non-smart system.",
            icon: <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />,
            color: "cyan",
            type: "On-site"
          },
          {
            role: "Quality Assurance Engineer",
            company: "Inkris CA",
            duration: "March 2024 - August 2024",
            location: "Remote",
            description: "Developed and executed test cases to ensure a high-quality user experience and improved client visibility.",
            icon: <Code className="w-4 h-4 sm:w-5 sm:h-5" />,
            color: "purple",
            type: "Remote"
          },
          {
            role: "Web Developer",
            company: "University of Ghana Actuarial and Statistical Society",
            duration: "August 2022 - October 2023",
            location: "Legon, Accra",
            description: "Implemented updates and improvements to enhance user experience and ensure website accessibility.",
            icon: <Laptop className="w-4 h-4 sm:w-5 sm:h-5" />,
            color: "green",
            type: "On-site"
          }
        ].map((experience, index) => (
          <motion.div
            key={index}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.05, type: "spring", stiffness: 200, damping: 20 }}
            whileHover={{ scale: 1.01, y: -2 }}
            className="group relative overflow-hidden"
          >
            <div className={`relative p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 hover:border-${experience.color}-500/50 shadow-sm hover:shadow-md transition-all duration-200`}>
              
              <motion.div
                className={`absolute inset-0 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gradient-to-r ${
                  experience.color === 'cyan' ? 'from-cyan-500/5 via-cyan-500/3 to-transparent' :
                  experience.color === 'purple' ? 'from-purple-500/5 via-purple-500/3 to-transparent' :
                  'from-green-500/5 via-green-500/3 to-transparent'
                }`}
              />
              
              <div className="relative flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg ${
                    experience.color === 'cyan' ? 'bg-cyan-500/15 text-cyan-600 dark:text-cyan-400' :
                    experience.color === 'purple' ? 'bg-purple-500/15 text-purple-600 dark:text-purple-400' :
                    'bg-green-500/15 text-green-600 dark:text-green-400'
                  } flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-200`}
                >
                  {experience.icon}
                </motion.div>
                
                <div className="flex-1 space-y-2 sm:space-y-3">
                  <div className="space-y-1">
                    <motion.h3 
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.1 }}
                      className={`text-base sm:text-lg font-bold bg-gradient-to-r ${
                        experience.color === 'cyan' ? 'from-cyan-600 to-cyan-500' :
                        experience.color === 'purple' ? 'from-purple-600 to-purple-500' :
                        'from-green-600 to-green-500'
                      } bg-clip-text text-transparent`}
                    >
                      {experience.role}
                    </motion.h3>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium">
                      {experience.company}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    <motion.span
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.1 }}
                      className={`inline-flex items-center gap-1.5 px-2 py-1 text-xs rounded-full font-medium border ${
                        experience.color === 'cyan' ? 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/30' :
                        experience.color === 'purple' ? 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/30' :
                        'bg-green-500/10 text-green-700 dark:text-green-300 border-green-500/30'
                      } backdrop-blur-sm`}
                    >
                      <div className={`w-1 h-1 rounded-full ${
                        experience.color === 'cyan' ? 'bg-cyan-500' :
                        experience.color === 'purple' ? 'bg-purple-500' :
                        'bg-green-500'
                      }`} />
                      {experience.duration}
                    </motion.span>
                    
                    <motion.span
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.1 }}
                      className="inline-flex items-center gap-1.5 px-2 py-1 text-xs rounded-full bg-gray-500/10 text-gray-700 dark:text-gray-300 border border-gray-500/30 font-medium backdrop-blur-sm"
                    >
                      <div className="w-1 h-1 rounded-full bg-gray-500" />
                      {experience.location}
                    </motion.span>
                    
                    <motion.span
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.1 }}
                      className={`inline-flex items-center px-2 py-1 text-xs rounded-full font-medium ${
                        experience.type === 'Remote' ? 'bg-blue-500/10 text-blue-700 dark:text-blue-300' : 'bg-orange-500/10 text-orange-700 dark:text-orange-300'
                      }`}
                    >
                      {experience.type}
                    </motion.span>
                  </div>
                  
                  <motion.p 
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.1 }}
                    className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
                  >
                    {experience.description}
                  </motion.p>
                </div>
              </div>
              
              <motion.div
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 rounded-full transition-all duration-200 ${
                  experience.color === 'cyan' ? 'bg-cyan-500' :
                  experience.color === 'purple' ? 'bg-purple-500' :
                  'bg-green-500'
                }`}
                initial={{ width: '15%' }}
                whileHover={{ width: '60%' }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),
  },
  
  {
    title: "Education",
    id: "education",
    icon: <BookOpen className="w-5 h-5" />,
    content: (
      <motion.div className="space-y-3 sm:space-y-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          whileHover={{ scale: 1.01, y: -3 }}
          className="group relative overflow-hidden"
        >
          <div className="relative p-4 sm:p-5 rounded-lg sm:rounded-xl bg-gradient-to-br from-white/95 to-indigo-50/95 dark:from-gray-800/95 dark:to-indigo-900/20 backdrop-blur-lg border border-indigo-200/50 dark:border-indigo-700/50 hover:border-indigo-500/50 shadow-sm hover:shadow-md transition-all duration-200">
            
            <motion.div
              className="absolute inset-0 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gradient-to-r from-indigo-500/5 via-purple-500/3 to-transparent"
            />
            
            <div className="relative flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-indigo-500/15 to-purple-500/15 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-200"
              >
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.div>
              
              <div className="flex-1 space-y-3">
                <div className="space-y-1">
                  <motion.h3 
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.1 }}
                    className="text-base sm:text-lg font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
                  >
                    Bachelor of Science in Information Technology
                  </motion.h3>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium">
                    University of Ghana
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    Specializing in Software Engineering and Web Development
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <motion.span
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.1 }}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-full bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/30 font-medium backdrop-blur-sm"
                  >
                    <div className="w-1 h-1 rounded-full bg-indigo-500" />
                    2021 - Present
                  </motion.span>
                  
                  <motion.span
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.1 }}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-full bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/30 font-medium backdrop-blur-sm"
                  >
                    <div className="w-1 h-1 rounded-full bg-purple-500" />
                    GPA: 2.93/4.0
                  </motion.span>
                  
                  <motion.span
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.1 }}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-full bg-green-500/10 text-green-700 dark:text-green-300 border border-green-500/30 font-medium backdrop-blur-sm"
                  >
                    <div className="w-1 h-1 rounded-full bg-green-500" />
                    Expected 2025
                  </motion.span>
                </div>
                
                <div className="space-y-1.5">
                  <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300">Key Areas of Study:</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {["Software Engineering", "Web Development", "Database Systems", "Data Structures", "Computer Networks"].map((subject, index) => (
                      <motion.span
                        key={subject}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.02, duration: 0.2 }}
                        whileHover={{ scale: 1.02 }}
                        className="px-2 py-0.5 text-xs rounded-full bg-gray-200/70 dark:bg-gray-700/70 text-gray-600 dark:text-gray-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors duration-150"
                      >
                        {subject}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <motion.div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-200"
              initial={{ width: '20%' }}
              whileHover={{ width: '70%' }}
            />
          </div>
        </motion.div>
      </motion.div>
    ),
  },
  
  {
    title: "Certifications",
    id: "certifications",
    icon: <Award className="w-5 h-5" />,
    content: (
      <motion.div className="space-y-3 sm:space-y-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
        {[
          {
            title: "Python Data Science",
            issuer: "DataCamp",
            date: "2023",
            link: "#",
            color: "orange",
            skills: ["Data Analysis", "Machine Learning", "Visualization"],
            level: "Intermediate"
          },
          {
            title: "Data Analysis",
            issuer: "IBM",
            date: "2023", 
            link: "#",
            color: "cyan",
            skills: ["SQL", "Statistics", "Excel"],
            level: "Professional"
          },
          {
            title: "AI Fundamentals",
            issuer: "IBM",
            date: "2022",
            link: "#",
            color: "purple",
            skills: ["Neural Networks", "Deep Learning", "TensorFlow"],
            level: "Beginner"
          }
        ].map((cert, index) => (
          <motion.div
            key={index}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.05, type: "spring", stiffness: 200, damping: 20 }}
            whileHover={{ scale: 1.01, y: -2 }}
            className="group relative overflow-hidden cursor-pointer"
          >
            <div className={`relative p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gradient-to-br from-white/95 to-gray-50/95 dark:from-gray-800/95 dark:to-gray-900/95 backdrop-blur-lg border ${
              cert.color === 'orange' ? 'border-orange-200/50 hover:border-orange-500/50' :
              cert.color === 'cyan' ? 'border-cyan-200/50 hover:border-cyan-500/50' :
              'border-purple-200/50 hover:border-purple-500/50'
            } shadow-sm hover:shadow-md transition-all duration-200`}>
              
              <motion.div
                className={`absolute inset-0 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
                  cert.color === 'orange' ? 'bg-gradient-to-r from-orange-500/5 via-orange-500/3 to-transparent' :
                  cert.color === 'cyan' ? 'bg-gradient-to-r from-cyan-500/5 via-cyan-500/3 to-transparent' :
                  'bg-gradient-to-r from-purple-500/5 via-purple-500/3 to-transparent'
                }`}
              />
              
              <div className="relative flex items-start justify-between gap-3">
                <div className="flex-1 space-y-2.5">
                  <div className="flex items-start gap-3">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 45 }}
                      transition={{ duration: 0.15 }}
                      className="text-lg sm:text-xl"
                    >
                      {cert.icon}
                    </motion.div>
                    
                    <div className="flex-1 space-y-1">
                      <motion.h3
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.1 }}
                        className={`text-sm sm:text-base font-bold ${
                          cert.color === 'orange' ? 'text-orange-600 dark:text-orange-400' :
                          cert.color === 'cyan' ? 'text-cyan-600 dark:text-cyan-400' :
                          'text-purple-600 dark:text-purple-400'
                        }`}
                      >
                        {cert.title}
                      </motion.h3>
                      <div className="flex flex-wrap items-center gap-2">
                        <motion.span
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.1 }}
                          className={`px-2 py-0.5 text-xs rounded-full font-medium border backdrop-blur-sm ${
                            cert.color === 'orange' ? 'bg-orange-500/10 text-orange-700 dark:text-orange-300 border-orange-500/30' :
                            cert.color === 'cyan' ? 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/30' :
                            'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/30'
                          }`}
                        >
                          {cert.issuer}
                        </motion.span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{cert.date}</span>
                        <motion.span
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.1 }}
                          className="px-1.5 py-0.5 text-xs rounded-full bg-gray-200/70 dark:bg-gray-700/70 text-gray-600 dark:text-gray-400 font-medium"
                        >
                          {cert.level}
                        </motion.span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300">Skills:</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: skillIndex * 0.02, duration: 0.2 }}
                          whileHover={{ scale: 1.02 }}
                          className="px-2 py-0.5 text-xs rounded-full bg-gray-200/70 dark:bg-gray-700/70 text-gray-600 dark:text-gray-400 hover:bg-gray-300/70 dark:hover:bg-gray-600/70 transition-colors duration-150"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <motion.a
                  href={cert.link}
                  whileHover={{ scale: 1.05, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.1 }}
                  className={`flex-shrink-0 p-1.5 rounded-full ${
                    cert.color === 'orange' ? 'bg-orange-500/10 hover:bg-orange-500/20 text-orange-600 dark:text-orange-400' :
                    cert.color === 'cyan' ? 'bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400' :
                    'bg-purple-500/10 hover:bg-purple-500/20 text-purple-600 dark:text-purple-400'
                  } transition-colors duration-150`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                </motion.a>
              </div>
              
              <motion.div
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 rounded-full transition-all duration-200 ${
                  cert.color === 'orange' ? 'bg-orange-500' :
                  cert.color === 'cyan' ? 'bg-cyan-500' :
                  'bg-purple-500'
                }`}
                initial={{ width: '20%' }}
                whileHover={{ width: '60%' }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),
  },
]

// Update the main section animations too
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Reduced from 0.1
      delayChildren: 0.1      // Reduced from 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,  // Increased from 100
      damping: 20      // Added for faster settling
    }
  }
}

const AboutSection = () => {
  const [tab, setTab] = useState("skills")
  const [isPending, startTransition] = useTransition()
  const [isClient, setIsClient] = useState(false)
  const [hoveredTech, setHoveredTech] = useState(null)
  const { theme } = useTheme()

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id)
    })
  }

  const backgroundAnimation = {
    initial: {
      borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%"
    },
    animate: {
      borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "70% 30% 30% 70% / 70% 70% 30% 30%"],
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  }

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-gray-50 dark:bg-gray-900" id="about">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          variants={backgroundAnimation}
          initial="initial"
          animate="animate"
          className="absolute top-1/3 left-1/4 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-gradient-to-br from-cyan-500/5 via-transparent to-orange-500/5 dark:from-cyan-500/10 dark:to-orange-500/10 blur-[100px] sm:blur-[120px]"
        />
        <motion.div
          variants={backgroundAnimation}
          initial="initial"
          animate="animate"
          className="absolute bottom-1/4 right-1/4 w-[250px] sm:w-[350px] lg:w-[450px] h-[250px] sm:h-[350px] lg:h-[450px] bg-gradient-to-bl from-orange-500/5 via-transparent to-cyan-500/5 dark:from-orange-500/10 dark:to-cyan-500/10 blur-[100px] sm:blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Enhanced Image Section */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative group max-w-[600px] mx-auto lg:mx-0"
          >
            <motion.div
              animate={{
                opacity: [0.4, 0.6, 0.4],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-transparent to-orange-500/20 dark:from-cyan-500/30 dark:to-orange-500/30 rounded-3xl blur-2xl"
            />
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <Image
                  src="/images/web.jpg"
                  width={900}
                  height={1200}
                  alt="About Image"
                  className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover"
                  priority
                />
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
              >
                <motion.h3 
                  whileHover={{ scale: 1.05 }}
                  className="text-2xl font-bold text-white mb-2"
                >
                  David Ayim Obuobi
                </motion.h3>
                <motion.p
                  animate={{
                    color: ["#67e8f9", "#94a3b8", "#67e8f9"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="text-lg mb-4 font-semibold"
                >
                 
                </motion.p>
                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 text-white"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">GitHub</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 hover:bg-cyan-500/30 backdrop-blur-sm border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300 text-white"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Portfolio</span>
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Content Section */}
          <motion.div
            variants={containerVariants}
            className="space-y-8 sm:space-y-10"
          >
            <div className="space-y-6 sm:space-y-8">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="inline-block"
              >
                <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gray-200/50 dark:bg-white/5 backdrop-blur-sm border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300">
                  <motion.span
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="relative flex h-2.5 w-2.5"
                  >
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400" />
                  </motion.span>
                  <span className="text-sm font-medium bg-gradient-to-r from-cyan-500 to-orange-500 bg-clip-text text-transparent">
                    About Me
                  </span>
                </span>
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold"
              >
                <span className="bg-gradient-to-r from-cyan-500 to-orange-500 bg-clip-text text-transparent">
                  Crafting Digital
                </span>
                <br />
                <span className="text-gray-900 dark:text-white">Experiences</span>
              </motion.h2>

              <motion.div variants={itemVariants} className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed space-y-6">
                <p>
                  Passionate developer specializing in modern web technologies, dedicated to creating{" "}
                  <motion.span
                    animate={{
                      color: ["#0891b2", "#c2410c", "#0891b2"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    immersive digital solutions
                  </motion.span>{" "}
                  that blend technical excellence with intuitive design.
                </p>

                <div className="flex flex-wrap gap-3">
                  {["Next.js", "React", "TypeScript", "Python", "TailwindCSS"].map((tech, index) => (
                    <motion.span
                      key={tech}
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: "rgba(6, 182, 212, 0.1)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      onHoverStart={() => setHoveredTech(tech)}
                      onHoverEnd={() => setHoveredTech(null)}
                      className="px-4 py-2 text-sm rounded-full bg-gray-200/50 dark:bg-white/5 backdrop-blur-sm border border-gray-300 dark:border-gray-700 hover:border-cyan-500/30 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all duration-300"
                    >
                      {tech}
                      {hoveredTech === tech && (
                        <motion.div
                          layoutId="techHighlight"
                          className="absolute inset-0 -z-10 rounded-full bg-cyan-500/10"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Enhanced Tabs Section */}
            <motion.div variants={containerVariants} className="space-y-8">
              <div className="flex flex-wrap gap-3">
                {TAB_DATA.map((tabItem) => (
                  <TabButton 
                    key={tabItem.id} 
                    selectTab={() => handleTabChange(tabItem.id)} 
                    active={tab === tabItem.id}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2.5 px-4 py-2.5 text-base"
                    >
                      {tabItem.icon}
                      {tabItem.title}
                      {tab === tabItem.id && (
                        <motion.div
                          layoutId="activeTabIndicator"
                          className="ml-1 w-2 h-2 bg-cyan-400 rounded-full"
                          transition={{ type: "spring", stiffness: 500 }}
                        />
                      )}
                    </motion.div>
                  </TabButton>
                ))}
              </div>

              <div className="min-h-[400px]">
                {isClient && (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={tab}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    >
                      {TAB_DATA.find((t) => t.id === tab).content}
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection