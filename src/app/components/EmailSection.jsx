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

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <section id="contact" className="relative py-12 sm:py-16 lg:py-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-4 w-48 h-48 sm:w-72 sm:h-72 bg-purple-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-indigo-600/20 rounded-full blur-[100px]" />
      </div>

      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          <motion.div
            className="space-y-6 sm:space-y-8"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <div className="space-y-4 sm:space-y-6">
              <motion.div 
                className="inline-block"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-sm sm:text-base bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-purple-400 py-2 px-4 rounded-full">
                  Let&apos;s Talk
                </span>
              </motion.div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Get in Touch
              </h2>
              
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl">
                I&apos;m currently looking for new opportunities in tech industries. 
                Whether you have a question or just want to say hi, I&apos;ll try my 
                best to get back to you🧸🎈
              </p>
            </div>

            <div className="flex gap-4">
              <Link 
                href="https://github.com/Aristocratjnr" 
                target="_blank"
                className="group relative p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-110"
              >
                <Github className="w-6 h-6 text-white group-hover:text-purple-400 transition-colors" />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur" />
              </Link>
              <Link 
                href="https://www.linkedin.com/in/obuobi-david-ayim-b40a18241" 
                target="_blank"
                className="group relative p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-6 h-6 text-white group-hover:text-purple-400 transition-colors" />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 rounded-2xl -m-2 blur-xl" />
            
            {emailSubmitted ? (
              <motion.div 
                className="h-full min-h-[400px] flex items-center justify-center bg-gray-900/50 backdrop-blur-sm rounded-xl border border-white/10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="text-center space-y-4 p-8">
                  <motion.div 
                    className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto"
                    initial={{ rotate: -180, scale: 0.5 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  >
                    <Send className="w-8 h-8" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white">Message Sent!</h3>
                  <p className="text-gray-400">Thank you for your message. I&apos;ll get back to you soon!</p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 p-6 sm:p-8 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-white/10">
                <div>
                  <label htmlFor="email" className="flex gap-2 text-white text-sm font-medium mb-2">
                    <Mail className="w-4 h-4 text-purple-400" />
                    Your Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 
                      focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300
                      hover:border-white/20"
                    placeholder="your-mail@mail-provider.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="flex gap-2 text-white text-sm font-medium mb-2">
                    <MessageSquare className="w-4 h-4 text-purple-400" />
                    Subject
                  </label>
                  <input
                    name="subject"
                    type="text"
                    id="subject"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 
                      focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300
                      hover:border-white/20"
                    placeholder="type your message subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="flex gap-2 text-white text-sm font-medium mb-2">
                    <MessageSquare className="w-4 h-4 text-purple-400" />
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 
                      focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300
                      hover:border-white/20 resize-none"
                    placeholder="What's on your mind...?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full group relative flex items-center justify-center gap-2 py-3 px-6 rounded-lg 
                    bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium 
                    transition-all duration-300 hover:scale-[1.02] focus:scale-[0.98]
                    hover:shadow-lg hover:shadow-purple-500/25 active:shadow-none
                    overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Send Message
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
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