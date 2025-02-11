"use client"
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { motion } from "framer-motion"

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${imgUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <Link
            href={gitUrl}
            className="relative p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors duration-300 group/link"
          >
            <CodeBracketIcon className="w-6 h-6 text-white" />
            <span className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-sm py-1 px-3 rounded-full whitespace-nowrap opacity-0 group-hover/link:opacity-100 transition-opacity duration-300">
              View Code
            </span>
          </Link>

          <Link
            href={previewUrl}
            className="relative p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors duration-300 group/link"
          >
            <EyeIcon className="w-6 h-6 text-white" />
            <span className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-sm py-1 px-3 rounded-full whitespace-nowrap opacity-0 group-hover/link:opacity-100 transition-opacity duration-300">
              Live Preview
            </span>
          </Link>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{description}</p>
        </div>

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex gap-2">
            <span className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
              Web Development
            </span>
            <span className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
              React
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard

