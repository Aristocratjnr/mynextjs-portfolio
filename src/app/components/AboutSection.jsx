"use client";

import React, { useState, useEffect, useTransition } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaHtml5, FaReact, FaPython, FaJsSquare } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { BookOpen, Award, Code2, ExternalLink, Github } from "lucide-react";
import TabButton from "./TabButton";
import { useTheme } from "next-themes";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    icon: <Code2 className="w-5 h-5" />,
    content: (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4"
      >
        {[
          { icon: <FaHtml5 className="text-2xl sm:text-3xl text-orange-400" />, name: "HTML", level: 90 },
          { icon: <SiNextdotjs className="text-2xl sm:text-3xl" />, name: "Next.js", level: 85 },
          { icon: <SiTailwindcss className="text-2xl sm:text-3xl text-cyan-400" />, name: "Tailwind", level: 95 },
          { icon: <FaPython className="text-2xl sm:text-3xl text-amber-300" />, name: "Python", level: 80 },
          { icon: <FaJsSquare className="text-2xl sm:text-3xl text-yellow-300" />, name: "JavaScript", level: 88 },
          { icon: <FaReact className="text-2xl sm:text-3xl text-sky-400" />, name: "React", level: 92 },
        ].map((skill, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="group relative p-4 sm:p-5 rounded-xl bg-background/50 dark:bg-white/[0.03] backdrop-blur-lg hover:bg-muted/80 dark:hover:bg-white/[0.06] border border-border dark:border-white/10 transition-all duration-300"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/20 via-transparent to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="transform group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <span className="font-medium text-base sm:text-lg text-foreground">{skill.name}</span>
              <div className="w-full bg-muted/50 dark:bg-white/10 rounded-full h-1.5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-orange-400"
                />
              </div>
            </div>
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
        className="space-y-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-background/50 to-transparent dark:from-white/[0.05] backdrop-blur-lg border border-border dark:border-white/10 hover:border-primary/20 dark:hover:border-white/20 transition-all duration-300"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-transparent to-orange-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-cyan-500" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold bg-gradient-to-r from-cyan-500 to-orange-500 bg-clip-text text-transparent">
                Information Technology
              </h3>
              <p className="text-muted-foreground mt-1">University of Ghana</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 text-sm rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20">
                  2021 - Present
                </span>
                <span className="px-3 py-1 text-sm rounded-full bg-orange-500/10 text-orange-700 dark:text-orange-300 border border-orange-500/20">
                  GPA: 2.93/4.0
                </span>
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                Specializing in Software Engineering and Data Science
              </div>
            </div>
          </div>
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
        className="grid gap-4 sm:gap-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {[
          { 
            title: "Python Data Science",
            issuer: "DataCamp",
            date: "2023",
            link: "#",
            color: "orange",
            skills: ["Data Analysis", "Machine Learning", "Visualization"]
          },
          { 
            title: "Data Analysis",
            issuer: "IBM",
            date: "2023",
            link: "#",
            color: "cyan",
            skills: ["SQL", "Statistics", "Excel"]
          },
          { 
            title: "AI Fundamentals",
            issuer: "IBM",
            date: "2022",
            link: "#",
            color: "purple",
            skills: ["Neural Networks", "Deep Learning", "TensorFlow"]
          },
        ].map((cert, index) => (
          <motion.div
            key={index}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.01 }}
            className="group relative p-5 sm:p-6 rounded-2xl bg-background/50 dark:bg-white/[0.03] backdrop-blur-lg hover:bg-muted/80 dark:hover:bg-white/[0.06] border border-border dark:border-white/10 transition-all duration-300"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-transparent to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                  {cert.title}
                </h3>
                <div className="mt-2 flex items-center gap-3">
                  <span className="px-3 py-1 text-sm rounded-full bg-muted/50 dark:bg-white/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20">
                    {cert.issuer}
                  </span>
                  <span className="text-sm text-muted-foreground">{cert.date}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-2 py-1 text-xs rounded-full bg-muted/30 dark:bg-white/5 text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <a 
                href={cert.link}
                className="flex-shrink-0 p-2 rounded-full bg-muted/30 dark:bg-white/5 hover:bg-muted dark:hover:bg-white/10 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4 text-cyan-600 dark:text-cyan-300" />
              </a>
            </div>
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
  const { theme } = useTheme();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden" id="about">
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
          className="absolute top-1/3 left-1/4 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-cyan-500/10 rounded-full blur-[100px] sm:blur-[120px]"
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
          className="absolute bottom-1/4 right-1/4 w-[250px] sm:w-[350px] lg:w-[450px] h-[250px] sm:h-[350px] lg:h-[450px] bg-orange-500/10 rounded-full blur-[100px] sm:blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative group max-w-[600px] mx-auto lg:mx-0"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/30 via-transparent to-orange-500/30 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden border border-border dark:border-white/10 backdrop-blur-sm"
            >
              <Image 
                src="/images/web.jpg" 
                width={800}
                height={800}
                alt="About Image"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent dark:from-black/80 dark:via-black/20 opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-0 left-0 right-0 p-6 sm:p-8"
              >
                <h3 className="text-2xl font-bold text-foreground mb-2">David Ayim Obuobi</h3>
                <p className="text-lg text-cyan-600 dark:text-cyan-300 mb-4 font-semibold">Aspirant Full Stack Developer</p>
                <div className="flex gap-4">
                  <a 
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 hover:bg-background/20 dark:bg-white/10 dark:hover:bg-white/20 backdrop-blur-sm border border-border dark:border-white/10 hover:border-primary/20 dark:hover:border-white/20 transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">GitHub</span>
                  </a>
                  <a 
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 hover:bg-cyan-500/30 backdrop-blur-sm border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Portfolio</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8 sm:space-y-10"
          >
            {/* Header Section */}
            <div className="space-y-6 sm:space-y-8">
              <motion.div 
                className="inline-block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-muted/50 dark:bg-white/5 backdrop-blur-sm border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400" />
                  </span>
                  <span className="text-sm font-medium bg-gradient-to-r from-cyan-500 to-orange-500 bg-clip-text text-transparent">
                    About Me
                  </span>
                </span>
              </motion.div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                <span className="bg-gradient-to-r from-cyan-500 to-orange-500 bg-clip-text text-transparent">
                  Crafting Digital
                </span>
                <br />
                <span className="text-foreground">Experiences</span>
              </h2>

              <div className="text-muted-foreground text-lg leading-relaxed space-y-6">
                <p>
                  Passionate developer specializing in modern web technologies, 
                  dedicated to creating <span className="text-cyan-600 dark:text-cyan-300">immersive digital solutions</span> that 
                  blend technical excellence with intuitive design.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {['Next.js', 'React', 'TypeScript', 'Python', 'TailwindCSS'].map((tech, index) => (
                    <motion.span 
                      key={tech}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="px-4 py-2 text-sm rounded-full bg-muted/50 dark:bg-white/5 backdrop-blur-sm border border-border dark:border-white/10 hover:border-cyan-500/30 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all duration-300"
                    >
                      {tech}
                    </motion.span>
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
                    <div className="flex items-center gap-2.5 px-4 py-2.5 text-base">
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

              <div className="min-h-[400px]">
                {isClient && (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={tab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {TAB_DATA.find((t) => t.id === tab).content}
                    </motion.div>
                  </AnimatePresence>
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