"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"
import { Github, Twitter, Linkedin, Mail, ExternalLink, Heart } from "lucide-react"
import { useTheme } from "next-themes"

const socialLinks = [
  { icon: <Github className="w-4 h-4" />, href: "https://github.com/Aristocratjnr", label: "GitHub" },
  { icon: <Twitter className="w-4 h-4" />, href: "#", label: "Twitter" },
  { icon: <Linkedin className="w-4 h-4" />, href: "https://www.linkedin.com/in/obuobi-david-ayim", label: "LinkedIn" },
  { icon: <Mail className="w-4 h-4" />, href: "mailto:ayimobuobi@gmail.com", label: "Email" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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
    },
  },
}

const Footer = () => {
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isHovered, setIsHovered] = useState(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const currentTheme = theme === "system" ? systemTheme : theme
  const isDarkMode = currentTheme === "dark"

  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative overflow-hidden border-t border-gray-300 dark:border-white/10 bg-white dark:bg-black transition-colors duration-300"
    >
      {/* Animated Background with Gradient Overlay */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: isDarkMode 
            ? "radial-gradient(circle at 50% 50%, rgba(30, 30, 30, 0.2) 0%, rgba(0, 0, 0, 0.4) 100%)"
            : "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.8) 0%, rgba(240, 240, 240, 0.9) 100%)"
        }}
        transition={{ duration: 0.5 }}
      />

      <div className="container relative mx-auto px-4 py-8 sm:py-12 md:py-16">
        <motion.div variants={containerVariants} className="grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.span
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-violet-400 via-blue-400 to-violet-400 bg-clip-text text-transparent inline-block"
              whileHover={{ scale: 1.02 }}
            >
              David Ayim Obuobi.
            </motion.span>
            <motion.p
              variants={itemVariants}
              className="mt-2 text-sm leading-relaxed max-w-md mx-auto md:mx-0 text-gray-600 dark:text-gray-400"
            >
              Crafting digital experiences with passion and precision. Building the future, one pixel at a time.
            </motion.p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-center md:text-left text-gray-800 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 flex flex-col items-center md:items-start">
              {["About", "Projects", "Blog", "Contact"].map((item, index) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full"
                >
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-sm flex items-center gap-1.5 group text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-violet-400 transition-all duration-300"
                    onMouseEnter={() => setIsHovered(item)}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    <motion.div
                      animate={{ rotate: isHovered === item ? 45 : 0 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <ExternalLink className="w-3 h-3" />
                    </motion.div>
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-center md:text-left text-gray-800 dark:text-white">
              Connect
            </h3>
            <motion.div 
              className="flex flex-wrap gap-3 justify-center md:justify-start"
              variants={containerVariants}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-lg border bg-gray-100 border-gray-300 hover:border-gray-400 dark:bg-white/5 dark:border-white/10 dark:hover:border-white/20 transition-colors duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* WhatsApp Button */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-50"
        >
          <Link
            href="https://wa.me/+233551784926?text=Hello%20Aristocrat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative p-2.5 sm:p-3 lg:p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full 
                shadow-lg shadow-green-500/25 group"
            >
              <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 transition-transform duration-300 group-hover:rotate-[-8deg]" />
              <motion.div 
                className="absolute -right-1 -top-1 w-2 h-2 sm:w-3 sm:h-3"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <div className="absolute inline-flex w-full h-full rounded-full bg-white opacity-75 animate-ping" />
                <div className="relative inline-flex w-full h-full rounded-full bg-gray-300" />
              </motion.div>
            </motion.div>
          </Link>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-300 dark:border-white/10"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <motion.p 
              variants={itemVariants}
              className="text-xs sm:text-sm text-gray-600 dark:text-gray-400"
            >
              © {new Date().getFullYear()} Aristocratjnr🧸🎈. Made with{" "}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block"
              >
                <Heart className="inline-block w-3 h-3 sm:w-4 sm:h-4 text-red-500" />
              </motion.span>{" "}
              in Ghana
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400"
            >
              <Link href="#" className="hover:text-blue-500 dark:hover:text-violet-400 transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="#" className="hover:text-blue-500 dark:hover:text-violet-400 transition-colors">
                Terms of Service
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer