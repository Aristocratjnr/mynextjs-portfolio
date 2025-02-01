"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Send, Mail, MessageSquare, Github, Linkedin } from "lucide-react";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailSubmitted(true);
    
    // Reset form after 3 seconds
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
    <section id="contact" className="relative py-16 lg:py-24">
      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-4 w-72 h-72 bg-primary-600/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-secondary-600/20 rounded-full blur-3xl" />
      </div>

      <motion.div 
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 relative">
          <motion.div
            className="space-y-6"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <div className="space-y-4">
              <motion.div 
                className="inline-block"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-sm md:text-base bg-gradient-to-r from-primary-400/20 to-secondary-600/20 text-primary-400 py-2 px-4 rounded-full">
                  Get in Touch
                </span>
              </motion.div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                Let&apos;s Connect
              </h2>
              
              <p className="text-gray-400 text-lg leading-relaxed">
                I&apos;m currently looking for new opportunities in tech industries. 
                Whether you have a question or just want to say hi, I&apos;ll try my 
                best to get back to you! 🧸🎈
              </p>
            </div>

            <div className="flex gap-4">
              <Link 
                href="https://github.com/Aristocratjnr" 
                target="_blank"
                className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <Github className="w-6 h-6 text-white" />
              </Link>
              <Link 
                href="https://www.linkedin.com/in/obuobi-david-ayim-b40a18241" 
                target="_blank"
                className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <Linkedin className="w-6 h-6 text-white" />
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
            {emailSubmitted ? (
              <motion.div 
                className="h-full flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto">
                    <Send className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Message Sent!</h3>
                  <p className="text-gray-400">Thank you for your message. I'll get back to you soon!</p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="flex gap-2 text-white text-sm font-medium mb-2">
                    <Mail className="w-4 h-4" />
                    Your Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                    placeholder="your-mail@gmail.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="flex gap-2 text-white text-sm font-medium mb-2">
                    <MessageSquare className="w-4 h-4" />
                    Subject
                  </label>
                  <input
                    name="subject"
                    type="text"
                    id="subject"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                    placeholder="Just saying hello world!"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="flex gap-2 text-white text-sm font-medium mb-2">
                    <MessageSquare className="w-4 h-4" />
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors resize-none"
                    placeholder="What's on your mind...?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full group flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25"
                >
                  Send Message
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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