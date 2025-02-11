import { motion } from "framer-motion"

const TabButton = ({ active, selectTab, children }) => {
  const buttonVariants = {
    default: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  }

  const underlineVariants = {
    default: {
      width: 0,
      opacity: 0,
    },
    active: {
      width: "100%",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  }

  return (
    <motion.button
      onClick={selectTab}
      variants={buttonVariants}
      initial="default"
      whileHover="hover"
      whileTap="tap"
      className={`
        relative py-2 px-4
        transition-colors duration-200
        ${
          active
            ? "text-primary-600 dark:text-white"
            : "text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-white"
        }
      `}
    >
      <div className="relative">
        {/* Main content */}
        <div className="flex items-center gap-2 font-medium">{children}</div>

        {/* Bottom line */}
        <div className="relative h-1 mt-2">
          {/* Background line */}
          <div className="absolute inset-x-0 h-full bg-gray-200 dark:bg-white/10 rounded-full" />

          {/* Animated highlight line */}
          <motion.div
            variants={underlineVariants}
            initial="default"
            animate={active ? "active" : "default"}
            className="absolute left-0 h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
          />
        </div>

        {/* Hover highlight */}
        <motion.div
          className="absolute inset-0 bg-gray-100 dark:bg-white/5 rounded-lg"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      </div>

      {/* Active indicator dot */}
      {active && (
        <motion.div
          layoutId="activeTabDot"
          className="absolute -right-1 -top-1 w-2 h-2 rounded-full bg-primary-500"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}

      {/* Border for light mode */}
      <div className="absolute inset-0 rounded-lg border border-gray-200 dark:border-transparent pointer-events-none" />
    </motion.button>
  )
}

export default TabButton

