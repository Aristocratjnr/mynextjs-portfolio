"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Send, Mail, MessageSquare, Github, Linkedin } from "lucide-react";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailSubmitted(true);

    setTimeout(() => {
      setEmailSubmitted(false);
      e.target.reset();
    }, 3000);
  };
  const glowVariants = {
    initial: { 
      opacity: 0,
      scale: 1
    },
    hover: { 
      opacity: 1,
      scale: 1.5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };
  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.15,
      rotate: [0, -10, 10, -10, 0],
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      }
    },
    tap: { 
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };

  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const formFieldVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const socialIconVariant = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.2,
      rotate: [0, -10, 10, -10, 0],
      transition: {
        duration: 0.3
      }
    }
  };

  const successMessageVariant = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  const socialLinks = [
    {
      id: "github",
      icon: Github,
      href: "https://github.com/Aristocratjnr",
      color: "hover:text-[#333] dark:hover:text-white",
      bgHover: "hover:bg-[#333]/10 dark:hover:bg-white/20",
      label: "GitHub Profile"
    },
    {
      id: "linkedin",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/obuobi-david-ayim-b40a18241",
      color: "hover:text-[#0077b5] dark:hover:text-[#0077b5]",
      bgHover: "hover:bg-[#0077b5]/10 dark:hover:bg-[#0077b5]/20",
      label: "LinkedIn Profile"
    }
  ];

  return (
    <section id="contact" className="relative py-12 sm:py-16 lg:py-24 overflow-hidden bg-white dark:bg-[#121212] transition-colors duration-300">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-64 bg-gradient-to-r from-purple-500/5 to-indigo-500/5"
            style={{
              top: `${i * 30}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div 
        className="container mx-auto px-6 sm:px-12 lg:px-16 max-w-6xl relative z-10"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Section */}
          <motion.div 
            className="space-y-6 sm:space-y-8"
            variants={containerVariant}
          >
            <motion.span 
              variants={fadeInUpVariant}
              className="inline-block text-sm sm:text-base bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-purple-700 dark:text-purple-400 py-2 px-4 rounded-full"
            >
              Let&apos;s Talk
            </motion.span>
            
            <motion.h2 
              variants={fadeInUpVariant}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white"
            >
              Get in Touch
            </motion.h2>
            
            <motion.p 
              variants={fadeInUpVariant}
              className="text-gray-700 dark:text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl"
            >
              I&apos;m currently looking for new opportunities in tech industries. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you! 🧸🎈
            </motion.p>

            {/* Enhanced Social Links */}
            <motion.div 
              className="flex gap-6"
              variants={socialIconVariant}
            >
              {socialLinks.map(({ id, icon: Icon, href, color, bgHover, label }) => (
                <motion.div
                  key={id}
               
                  className="relative"
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  onHoverStart={() => setHoveredIcon(id)}
                  onHoverEnd={() => setHoveredIcon(null)}
                >
                  {/* Glow effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/30 to-indigo-500/30 blur-lg`}
                    variants={glowVariants}
                  />
                  
                  {/* Icon container */}
                  <motion.div
                    variants={iconVariants}
                    className="relative"
                  >
                    <Link 
                      href={href} 
                      target="_blank"
                      aria-label={label}
                      className={`relative block p-4 bg-gray-100 dark:bg-white/5 rounded-xl
                        ${color} ${bgHover}
                        transition-all duration-300 
                        shadow-lg hover:shadow-xl
                        border border-transparent hover:border-purple-500/20
                        backdrop-blur-sm`}
                    >
                      <Icon className="w-6 h-6 transition-all duration-300" />
                      
                      {/* Ripple effect on hover */}
                      {hoveredIcon === id && (
                        <motion.div
                          className="absolute inset-0 rounded-xl bg-white/20 dark:bg-white/5"
                          initial={{ scale: 0, opacity: 0.5 }}
                          animate={{ 
                            scale: 1.5, 
                            opacity: 0,
                          }}
                          transition={{ 
                            duration: 0.8,
                            repeat: Infinity,
                          }}
                        />
                      )}
                    </Link>
                  </motion.div>

                  {/* Tooltip */}
                  <motion.div
                    className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-none"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ 
                      opacity: hoveredIcon === id ? 1 : 0,
                      y: hoveredIcon === id ? 0 : -10
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap bg-white dark:bg-gray-800 px-2 py-1 rounded-md shadow-md">
                      {label}
                    </span>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Section (Form) */}
          <motion.div 
            className="relative"
            variants={fadeInUpVariant}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 rounded-2xl"
              animate={{
                scale: [1, 1.02, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />

            {emailSubmitted ? (
              <motion.div 
                variants={successMessageVariant}
                initial="hidden"
                animate="visible"
                className="h-full min-h-[400px] flex items-center justify-center bg-gray-100 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-300 dark:border-white/10"
              >
                <div className="text-center space-y-4 p-8">
                  <motion.div 
                    className="w-16 h-16 bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-500 rounded-full flex items-center justify-center mx-auto"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                  >
                    <Send className="w-8 h-8" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Message Sent!</h3>
                  <p className="text-gray-700 dark:text-gray-400">Thank you for your message. I&apos;ll get back to you soon!</p>
                </div>
              </motion.div>
            ) : (
              <motion.form 
                onSubmit={handleSubmit} 
                className="space-y-6 p-6 sm:p-8 bg-gray-50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-300 dark:border-white/10"
                variants={containerVariant}
              >
                {/* Form fields */}
                {[
                  {
                    type: "email",
                    label: "Your Email",
                    icon: Mail,
                    placeholder: "your-email@example.com"
                  },
                  {
                    type: "text",
                    label: "Subject",
                    icon: MessageSquare,
                    placeholder: "Enter message subject"
                  }
                ].map((field, index) => (
                  <motion.div
                    key={field.type}
                    variants={formFieldVariant}
                    custom={index}
                  >
                    <label htmlFor={field.type} className="flex gap-2 text-gray-900 dark:text-white text-sm font-medium mb-2">
                      <field.icon className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      {field.label}
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      name={field.type}
                      type={field.type}
                      id={field.type}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 
                        focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      placeholder={field.placeholder}
                    />
                  </motion.div>
                ))}

                {/* Message textarea */}
                <motion.div variants={formFieldVariant}>
                  <label htmlFor="message" className="flex gap-2 text-gray-900 dark:text-white text-sm font-medium mb-2">
                    <MessageSquare className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    name="message"
                    id="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 
                      focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                    placeholder="Write your message..."
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 rounded-lg bg-purple-600 dark:bg-indigo-500 text-white font-medium transition-all duration-300 hover:shadow-lg"
                >
                  Send Message <Send className="w-4 h-4 inline ml-2" />
                </motion.button>
              </motion.form>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default EmailSection;