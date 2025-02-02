"use client";
import React, { useState, useEffect, useTransition } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaHtml5, FaReact, FaPython, FaJsSquare } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { BookOpen, Award, Code2 } from "lucide-react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    icon: <Code2 className="w-5 h-5" />,
    content: (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-2 gap-3 sm:gap-4"
      >
        {[
          { icon: <FaHtml5 className="text-2xl text-orange-400" />, name: "HTML" },
          { icon: <SiNextdotjs className="text-2xl text-white/90" />, name: "Next.js" },
          { icon: <SiTailwindcss className="text-2xl text-cyan-400" />, name: "Tailwind" },
          { icon: <FaPython className="text-2xl text-amber-300" />, name: "Python" },
          { icon: <FaJsSquare className="text-2xl text-yellow-300" />, name: "JavaScript" },
          { icon: <FaReact className="text-2xl text-sky-400" />, name: "React" },
        ].map((skill, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ y: -4 }}
            className="group relative p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-gradient-to-br from-white/10 to-transparent border border-white/10 transition-all"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            {skill.icon}
            <span className="ml-3 text-sm sm:text-base font-medium">{skill.name}</span>
            <div className="absolute inset-0 rounded-xl border border-white/5 group-hover:border-white/10 transition-all" />
          </motion.div>
        ))}
      </motion.div>
    ),
  },
  {
    title: "Education",
    id: "education",
    icon: <BookOpen className="w-5 h-5" />,
    content: (
      <motion.div 
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          whileHover={{ x: 5 }}
          className="relative p-5 rounded-2xl bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all"
        >
          <div className="absolute -right-4 -top-4 w-12 h-12 bg-cyan-500/20 rounded-full blur-xl" />
          <h3 className="font-semibold text-lg text-cyan-300">Information Technology</h3>
          <p className="text-gray-300 mt-1">University of Ghana</p>
          <div className="mt-3 flex items-center gap-2 text-sm text-cyan-400/80">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            2021 - Present
          </div>
          <div className="absolute -left-4 -bottom-4 w-12 h-12 bg-orange-500/20 rounded-full blur-xl" />
        </motion.div>
      </motion.div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    icon: <Award className="w-5 h-5" />,
    content: (
      <motion.div 
        className="grid gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {[
          { title: "Python Data Science", issuer: "DataCamp", color: "orange" },
          { title: "Data Analysis", issuer: "IBM", color: "cyan" },
          { title: "AI Fundamentals", issuer: "IBM", color: "purple" },
        ].map((cert, index) => (
          <motion.div
            key={index}
            whileHover={{ x: 5 }}
            className={`relative p-5 rounded-2xl bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-${cert.color}-500/20 hover:border-${cert.color}-500/40 transition-all`}
          >
            <div className={`absolute inset-0 rounded-2xl bg-${cert.color}-500/5 opacity-0 hover:opacity-20 transition-opacity`} />
            <h3 className="font-medium text-gray-200">{cert.title}</h3>
            <div className="mt-3 flex items-center gap-3">
              <span className={`px-2 py-1 text-xs rounded-full bg-${cert.color}-500/10 text-${cert.color}-300`}>
                {cert.issuer}
              </span>
              <span className="text-sm text-gray-400/80">ID: #{Math.floor(1000 + Math.random() * 9000)}</span>
            </div>
            <div className={`absolute -right-4 -top-4 w-8 h-8 bg-${cert.color}-500/20 rounded-full blur-xl`} />
          </motion.div>
        ))}
      </motion.div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden" id="about">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-orange-500/10 rounded-full blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative group"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/30 to-orange-500/30 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity" />
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative rounded-2xl overflow-hidden border border-white/10 backdrop-blur-sm"
            >
              <Image 
                src="/images/web.jpg" 
                width={600}
                height={600}
                alt="About Image"
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-xl font-bold text-white">Aristocrat Jnr</h3>
                <p className="text-cyan-300/90">Full Stack Developer</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            {/* Header Section */}
            <div className="space-y-8">
              <motion.div 
                className="inline-block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-cyan-500/30 hover:border-cyan-500/50 transition-all">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
                  </span>
                  <span className="text-sm font-medium bg-gradient-to-r from-cyan-300 to-orange-300 bg-clip-text text-transparent">
                    About Me
                  </span>
                </span>
              </motion.div>

              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-300 to-orange-300 bg-clip-text text-transparent leading-tight">
                Crafting Digital<br />
                <span className="text-white">Experiences</span>
              </h2>

              <div className="text-gray-300/90 text-lg leading-relaxed space-y-6">
                <p>
                  Passionate developer specializing in modern web technologies, 
                  dedicated to creating <span className="text-cyan-300">immersive digital solutions</span> that 
                  blend technical excellence with intuitive design.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {['Next.js', 'React', 'TypeScript', 'Python', 'Tailwind'].map((tech) => (
                    <span key={tech} className="px-4 py-2 text-sm rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-300/30 hover:text-cyan-300 transition-all">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Tabs Section */}
            <div className="space-y-8">
              <div className="flex flex-wrap gap-3">
                {TAB_DATA.map((tabItem) => (
                  <TabButton
                    key={tabItem.id}
                    selectTab={() => handleTabChange(tabItem.id)}
                    active={tab === tabItem.id}
                  >
                    <div className="flex items-center gap-2.5 px-4 py-2.5">
                      {tabItem.icon}
                      {tabItem.title}
                      {tab === tabItem.id && (
                        <motion.div 
                          layoutId="activeTabIndicator"
                          className="ml-1 w-2 h-2 bg-cyan-400 rounded-full"
                          transition={{ type: "spring", stiffness: 500 }}
                        />
                      )}
                    </div>
                  </TabButton>
                ))}
              </div>

              <div className="min-h-[320px]">
                {isClient && (
                  <motion.div
                    key={tab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {TAB_DATA.find((t) => t.id === tab).content}
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;