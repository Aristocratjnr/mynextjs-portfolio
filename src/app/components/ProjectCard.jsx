"use client"
import { Github, ExternalLink, Code2, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const ProjectCard = ({ 
  imgUrl, 
  title, 
  description, 
  gitUrl, 
  previewUrl, 
  tech = [], 
  className = "",
  viewMode = "grid"
}) => {
  const isListView = viewMode === "list"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`group relative bg-gradient-to-br from-white via-slate-50/50 to-white dark:from-slate-800/90 dark:via-slate-800/95 dark:to-slate-900/90 rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-200/60 dark:border-slate-700/60 backdrop-blur-sm ${
        isListView ? "flex flex-col md:flex-row" : "flex flex-col h-full"
      } ${className}`}
    >
      {/* Image Section */}
      <div className={`relative overflow-hidden ${
        isListView 
          ? "w-full md:w-80 lg:w-96 h-48 md:h-auto flex-shrink-0" 
          : "w-full h-48 sm:h-52 md:h-56 lg:h-60"
      }`}>
        <div className="relative w-full h-full">
          <Image
            src={imgUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
          
          {/* Hover overlay with buttons */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
          
          {/* Action buttons */}
          <div className="absolute inset-0 flex items-center justify-center gap-3 sm:gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={gitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group/btn flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                <span className="hidden sm:inline text-white text-sm font-medium">Code</span>
                
                {/* Tooltip for mobile */}
                <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs py-1.5 px-3 rounded-lg whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 pointer-events-none">
                  View Source Code
                </span>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group/btn flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-indigo-500/20 backdrop-blur-md border border-indigo-400/30 hover:bg-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                <span className="hidden sm:inline text-white text-sm font-medium">Live</span>
                
                {/* Tooltip for mobile */}
                <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs py-1.5 px-3 rounded-lg whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 pointer-events-none">
                  Live Preview
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Status indicator */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
            <div className="flex items-center gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-green-500/20 backdrop-blur-sm border border-green-400/30">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-xs font-medium">Active</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className={`p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4 flex-1 ${
        isListView ? "flex flex-col justify-between" : ""
      }`}>
        <div className="space-y-2 sm:space-y-3">
          {/* Title */}
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 line-clamp-2">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* Tech Stack */}
        {tech && tech.length > 0 && (
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {tech.slice(0, isListView ? 6 : 4).map((techItem, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.2 }}
                className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200/50 dark:border-indigo-700/30 hover:shadow-md transition-all duration-200"
              >
                {techItem}
              </motion.span>
            ))}
            {tech.length > (isListView ? 6 : 4) && (
              <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400">
                +{tech.length - (isListView ? 6 : 4)}
              </span>
            )}
          </div>
        )}

        {/* Footer with additional info */}
        <div className={`pt-3 sm:pt-4 border-t border-slate-200/50 dark:border-slate-700/50 ${
          isListView ? "mt-auto" : ""
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Web Project</span>
            </div>
            
            {/* Quick action buttons for non-hover devices */}
            <div className="flex items-center gap-2 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
              <Link
                href={gitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 sm:p-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors duration-200"
              >
                <Github className="w-3 h-3 sm:w-4 sm:h-4 text-slate-600 dark:text-slate-400" />
              </Link>
              <Link
                href={previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 sm:p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 hover:bg-indigo-200 dark:hover:bg-indigo-900 transition-colors duration-200"
              >
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-indigo-600 dark:text-indigo-400" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  )
}

export default ProjectCard

