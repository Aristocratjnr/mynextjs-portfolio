"use client"
import { motion } from "framer-motion"
import { Filter, Check } from "lucide-react"

const ProjectTag = ({ name, onClick, isSelected }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(name)}
      className={`
        relative px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 lg:px-6 lg:py-3
        rounded-lg sm:rounded-xl text-xs sm:text-sm md:text-base font-medium
        transition-all duration-300 ease-out
        group overflow-hidden border
        min-w-[60px] sm:min-w-[80px] md:min-w-[100px]
        flex items-center justify-center gap-1 sm:gap-2
        ${
          isSelected
            ? "text-white dark:text-white shadow-lg shadow-cyan-500/25 dark:shadow-cyan-400/30 border-cyan-500/50 dark:border-cyan-400/50"
            : "text-slate-600 dark:text-slate-300 bg-white/70 dark:bg-slate-800/70 border-slate-200/80 dark:border-slate-700/80 hover:bg-slate-50 dark:hover:bg-slate-700/90 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-600"
        }
      `}
    >
      {/* Animated background */}
      {isSelected && (
        <motion.div
          layoutId="activeTagBackground"
          className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400"
          initial={false}
          transition={{ 
            type: "spring", 
            stiffness: 400, 
            damping: 30,
            mass: 0.8
          }}
        />
      )}

      {/* Glow effect */}
      {isSelected && (
        <motion.div
          className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-r from-cyan-500/50 via-blue-500/50 to-indigo-500/50 blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Icon indicator */}
      <span className="relative z-10 flex items-center gap-1 sm:gap-1.5">
        {isSelected ? (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Check className="w-3 h-3 sm:w-4 sm:h-4" />
          </motion.div>
        ) : (
          <Filter className="w-3 h-3 sm:w-4 sm:h-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
        )}
        
        {/* Tag name */}
        <span className="relative">
          {name}
          
          {/* Underline animation for non-selected tags */}
          {!isSelected && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </span>
      </span>

      {/* Hover shimmer effect */}
      <div className="absolute inset-0 rounded-lg sm:rounded-xl overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </div>

      {/* Selected tag particles */}
      {isSelected && (
        <div className="absolute inset-0 rounded-lg sm:rounded-xl overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/40 rounded-full"
              style={{
                left: `${20 + (i * 10)}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0],
                y: [-5, -15, -5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      )}

      {/* Pulse effect for selected tag */}
      {isSelected && (
        <motion.div
          className="absolute inset-0 rounded-lg sm:rounded-xl border-2 border-white/30"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}

      {/* Mobile touch feedback */}
      <motion.div
        className="absolute inset-0 rounded-lg sm:rounded-xl bg-slate-900/10 dark:bg-white/10 opacity-0"
        whileTap={{ opacity: 0.2 }}
        transition={{ duration: 0.1 }}
      />
    </motion.button>
  )
}

export default ProjectTag

