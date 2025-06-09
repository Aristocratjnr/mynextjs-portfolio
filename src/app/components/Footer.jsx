"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"
import { Github, Twitter, Linkedin, Mail, ExternalLink, Heart, Send, ArrowUpRight } from "lucide-react"
import { useTheme } from "next-themes"

const socialLinks = [
  { 
    icon: <Github className="w-4 h-4 sm:w-5 sm:h-5" />, 
    href: "https://github.com/Aristocratjnr", 
    label: "GitHub",
    color: "hover:bg-gray-800 hover:text-white" 
  },
  { 
    icon: <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />, 
    href: "#", 
    label: "Twitter",
    color: "hover:bg-blue-500 hover:text-white" 
  },
  { 
    icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />, 
    href: "https://www.linkedin.com/in/obuobi-david-ayim", 
    label: "LinkedIn",
    color: "hover:bg-blue-700 hover:text-white" 
  },
  { 
    icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5" />, 
    href: "mailto:ayimobuobi@gmail.com", 
    label: "Email",
    color: "hover:bg-red-500 hover:text-white" 
  },
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
  const [email, setEmail] = useState("")

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const currentTheme = theme === "system" ? systemTheme : theme
  const isDarkMode = currentTheme === "dark"

  const handleSubscribe = (e) => {
    e.preventDefault()
    // Handle subscription logic here
    alert(`Thank you for subscribing with ${email}!`)
    setEmail("")
  }

  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative overflow-hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black transition-colors duration-300"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-100/40 to-violet-100/40 dark:from-indigo-900/10 dark:to-violet-900/10 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-100/40 to-cyan-100/40 dark:from-blue-900/10 dark:to-cyan-900/10 rounded-full blur-3xl opacity-70"></div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-7 lg:grid-cols-12">
          {/* Brand Section - Spans 3 cols on lg */}
          <motion.div variants={itemVariants} className="md:col-span-3 lg:col-span-5 space-y-4 md:space-y-6">
            <Link href="/" className="inline-block group">
              <motion.span
                className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent inline-block"
                whileHover={{ scale: 1.02 }}
              >
                David Ayim Obuobi
                <span className="ml-1 text-indigo-600 dark:text-indigo-400 group-hover:opacity-100 opacity-0 transition-opacity duration-300">.</span>
              </motion.span>
            </Link>
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base leading-relaxed max-w-md text-gray-600 dark:text-gray-400"
            >
              Crafting digital experiences with passion and precision. Building the future, one pixel at a time.
            </motion.p>
            
            {/* Newsletter Form */}
            <motion.div variants={itemVariants} className="mt-6 space-y-3">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                Join my newsletter
              </h3>
              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md">
                <div className="relative flex-grow">
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-2.5 rounded-lg text-sm bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 dark:focus:ring-indigo-400/50 transition-all duration-300"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="flex-shrink-0 px-4 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600/90 dark:hover:bg-indigo-700/90 text-white text-sm font-medium transition-colors duration-300"
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          {/* Quick Links - Spans 2 cols on lg */}
          <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-3 space-y-4 md:space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {["About", "Projects", "Blog", "Contact"].map((item, index) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-sm sm:text-base flex items-center gap-1.5 group text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-all duration-300"
                    onMouseEnter={() => setIsHovered(item)}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    <span className="relative">
                      <span className="absolute inset-0 w-full scale-x-0 h-[1px] bottom-0 bg-indigo-600 dark:bg-indigo-400 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                      {item}
                    </span>
                    <motion.div
                      animate={{ 
                        x: isHovered === item ? 3 : 0,
                        rotate: isHovered === item ? 45 : 0
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links - Spans 2 cols on lg */}
          <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-4 space-y-4 md:space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Connect
            </h3>
            <motion.div 
              className="flex flex-wrap gap-3"
              variants={containerVariants}
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2.5 rounded-lg border bg-white dark:bg-white/5 border-gray-200 dark:border-gray-800 ${social.color} transition-all duration-300`}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
            
            <div className="pt-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-800"
              >
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  &apos;Technology is best when it brings people together.&apos; <br />
                  <span className="text-gray-800 dark:text-gray-300 font-medium italic">— Matt Mullenweg</span>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

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
              whileHover={{ scale: 1.1, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              whileTap={{ scale: 0.9 }}
              className="relative p-3 sm:p-3.5 lg:p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full 
                shadow-lg shadow-green-500/25 group"
            >
              <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white transition-transform duration-300 group-hover:rotate-[-8deg]" />
              <motion.div 
                className="absolute -right-1 -top-1 w-3 h-3"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <div className="absolute inline-flex w-full h-full rounded-full bg-white opacity-75 animate-ping" />
                <div className="relative inline-flex w-full h-full rounded-full bg-white" />
              </motion.div>
            </motion.div>
          </Link>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <motion.p 
              variants={itemVariants}
              className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1.5"
            >
              © {new Date().getFullYear()} Aristocratjnr
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-flex items-center"
              >
                <span className="text-gray-400 dark:text-gray-600">•</span>
                <Heart className="mx-0.5 w-3 h-3 sm:w-4 sm:h-4 text-red-500" />
                <span className="text-gray-400 dark:text-gray-600">•</span>
              </motion.span>
              Ghana
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 text-xs sm:text-sm text-gray-500 dark:text-gray-400"
            >
              <Link href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                Privacy
              </Link>
              <span className="w-1 h-1 bg-gray-300 dark:bg-gray-700 rounded-full"></span>
              <Link href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                Terms
              </Link>
              <span className="w-1 h-1 bg-gray-300 dark:bg-gray-700 rounded-full"></span>
              <Link href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                Sitemap
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer