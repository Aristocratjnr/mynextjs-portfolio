"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Send, Mail, MessageSquare, Github, Linkedin } from "lucide-react";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailSubmitted(true);

    setTimeout(() => {
      setEmailSubmitted(false);
      e.target.reset();
    }, 3000);
  };

  return (
    <section id="contact" className="relative py-12 sm:py-16 lg:py-24 overflow-hidden bg-white dark:bg-[#121212] transition-colors duration-300">
      <motion.div 
        className="container mx-auto px-6 sm:px-12 lg:px-16 max-w-6xl relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Section */}
          <motion.div className="space-y-6 sm:space-y-8">
            <span className="text-sm sm:text-base bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-purple-700 dark:text-purple-400 py-2 px-4 rounded-full">
              Let's Talk
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              Get in Touch
            </h2>
            <p className="text-gray-700 dark:text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl">
              I&apos;m currently looking for new opportunities in tech industries. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you! 🧸🎈
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <Link href="https://github.com/Aristocratjnr" target="_blank"
                className="p-3 bg-gray-100 dark:bg-white/5 rounded-lg hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-300"
              >
                <Github className="w-6 h-6 text-gray-900 dark:text-white transition-colors" />
              </Link>
              <Link href="https://www.linkedin.com/in/obuobi-david-ayim-b40a18241" target="_blank"
                className="p-3 bg-gray-100 dark:bg-white/5 rounded-lg hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-300"
              >
                <Linkedin className="w-6 h-6 text-gray-900 dark:text-white transition-colors" />
              </Link>
            </div>
          </motion.div>

          {/* Right Section (Form) */}
          <motion.div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 rounded-2xl blur-xl" />

            {emailSubmitted ? (
              <div className="h-full min-h-[400px] flex items-center justify-center bg-gray-100 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-300 dark:border-white/10">
                <div className="text-center space-y-4 p-8">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-500 rounded-full flex items-center justify-center mx-auto">
                    <Send className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Message Sent!</h3>
                  <p className="text-gray-700 dark:text-gray-400">Thank you for your message. I&apos;ll get back to you soon!</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 p-6 sm:p-8 bg-gray-50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-300 dark:border-white/10">
                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="flex gap-2 text-gray-900 dark:text-white text-sm font-medium mb-2">
                    <Mail className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    Your Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 
                      focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="your-email@example.com"
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="flex gap-2 text-gray-900 dark:text-white text-sm font-medium mb-2">
                    <MessageSquare className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    Subject
                  </label>
                  <input
                    name="subject"
                    type="text"
                    id="subject"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 
                      focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="Enter message subject"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="flex gap-2 text-gray-900 dark:text-white text-sm font-medium mb-2">
                    <MessageSquare className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 
                      focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                    placeholder="Write your message..."
                  />
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full py-3 rounded-lg bg-purple-600 dark:bg-indigo-500 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
                  Send Message <Send className="w-4 h-4 inline ml-2" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default EmailSection;
