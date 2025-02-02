import React from "react";
import { motion } from "framer-motion";

const ProjectTag = ({ name, onClick, isSelected }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onClick(name)}
      className={`
        relative px-6 py-2.5 rounded-full text-md font-medium
        transition-all duration-300 ease-out
        ${isSelected 
          ? "text-white bg-gradient-to-r from-primary-500 to-secondary-500 shadow-lg shadow-primary-500/25" 
          : "text-gray-400 bg-white/5 hover:bg-white/10 hover:text-white"
        }
      `}
    >
      <span className="relative z-10">
        {name}
      </span>
      
      {isSelected && (
        <motion.span
          layoutId="activeTab"
          className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
          initial={false}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      
      {/* Shine effect */}
      <span className="absolute inset-0 rounded-full overflow-hidden">
        <span className={`
          absolute top-0 left-0 w-1/4 h-full
          bg-gradient-to-r from-transparent via-white/10 to-transparent
          transform -skew-x-45 translate-x-[-200%]
          group-hover:translate-x-[400%] transition-transform duration-1000
          ${isSelected ? 'opacity-30' : 'opacity-0'}
        `} />
      </span>
    </motion.button>
  );
};

export default ProjectTag;