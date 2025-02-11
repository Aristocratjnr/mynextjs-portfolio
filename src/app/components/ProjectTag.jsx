"use client"
import { motion } from "framer-motion"

const ProjectTag = ({ name, onClick, isSelected }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onClick(name)}
      className={`
        relative px-7 py-3 rounded-full text-lg font-medium
        transition-all duration-300 ease-out
        group overflow-hidden
        ${
          isSelected
            ? "text-white dark:text-white shadow-lg shadow-primary-500/20 dark:shadow-primary-500/30"
            : "text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white"
        }
      `}
    >
      {/* Background layer */}
      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400 to-secondary-400 dark:from-primary-500 dark:to-secondary-500"
          initial={false}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
      )}

      {/* Border animation */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <motion.div
          className={`absolute inset-0 rounded-full border ${
            isSelected
              ? "border-primary-400/50 dark:border-primary-500/50"
              : "border-gray-300 dark:border-white/10 group-hover:border-gray-400 dark:group-hover:border-white/20"
          }`}
          initial={false}
        />
      </div>

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {name}
        {isSelected && (
          <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-2 h-2 bg-white rounded-full" />
        )}
      </span>

      {/* Shine effect */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <motion.div
          className={`
            absolute top-0 left-0 w-1/4 h-full 
            bg-gradient-to-r from-transparent via-white/20 to-transparent
            transform -skew-x-45 translate-x-[-200%]
            ${isSelected ? "opacity-40" : "opacity-0"}
          `}
          animate={{
            translateX: isSelected ? ["-200%", "400%"] : "400%",
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: isSelected ? 0 : 0.3,
          }}
        />
      </div>

      {/* Particles effect */}
      {isSelected && (
        <div className="absolute inset-0 rounded-full overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-0.5 bg-white/30 rounded-full"
              initial={{
                scale: 0,
                opacity: 0,
                x: Math.random() * 100 - 50 + "%",
                y: Math.random() * 100 - 50 + "%",
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 1.5,
              }}
            />
          ))}
        </div>
      )}
    </motion.button>
  )
}

export default ProjectTag

