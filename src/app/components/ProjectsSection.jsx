"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { Code2, Sparkles, ChevronRight, Filter, Grid3x3, List } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "Furniture Project Website",
    description: "Modern e-commerce platform focused on furniture products with responsive design and intuitive user experience",
    image: "/images/projects/test.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Aristocratjnr/HCI.git",
    previewUrl: "https://aristocratjnr.github.io/HCI/",
    tech: ["HTML", "CSS", "JavaScript"],
    featured: true,
  },
  {
    id: 2,
    title: "G.C.B Kanieshie Website",
    description: "Professional banking website built for G.C.B Kanieshie Branch with modern design and enhanced functionality",
    image: "/images/projects/gcb.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/The-DevGenius/GCB-Kaneshie-Website.git",
    previewUrl: "http://the-devgenius.github.io/GCB-Kaneshie-Website/",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    featured: false,
  },
  {
    id: 3,
    title: "E-commerce Website",
    description: "Full-featured e-commerce solution with shopping cart, payment integration, and admin dashboard",
    image: "/images/projects/service.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Aristocratjnr/mywebtests.git",
    previewUrl: "https://aristocratjnr.github.io/mywebtests",
    tech: ["React", "Node.js", "MongoDB"],
    featured: true,
  },
  {
    id: 4,
    title: "Laundry Service Platform",
    description: "Modern laundry service platform built with Next.js, featuring booking system and real-time tracking",
    image: "/images/projects/laundry.png",
    tag: ["All", "E-commerce"],
    gitUrl: "https://github.com/DCIT-415/Consumer-dashboard",
    previewUrl: "https://tulundry.onrender.com",
    tech: ["Next.js", "React", "Tailwind CSS"],
    featured: true,
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing projects and skills, built with Next.js and modern animations",
    image: "/images/projects/next.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Aristocratjnr/mynextjs-portfolio.git",
    previewUrl: "https://mynextjs-portfolio-nu.vercel.app/",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    featured: false,
  },
  {
    id: 6,
    title: "My First Portfolio",
    description: "Initial portfolio website built with React and Chakra UI, demonstrating early development skills",
    image: "/images/projects/port.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Aristocratjnr/my-portfolio.git",
    previewUrl: "https://aristocratportfolio.vercel.app/",
    tech: ["React", "Chakra UI", "JavaScript"],
    featured: false,
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const [viewMode, setViewMode] = useState("grid");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const featuredProjects = filteredProjects.filter(project => project.featured);
  const regularProjects = filteredProjects.filter(project => !project.featured);

  const cardVariants = {
    initial: { y: 50, opacity: 0, scale: 0.9 },
    animate: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150, // Increased from 100
        damping: 15,    // Reduced from 20
        duration: 0.3   // Reduced from 0.6
      }
    },
  };

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    initial: { opacity: 0, y: -30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-3 sm:px-4 md:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950">
      {/* Enhanced responsive background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-12 sm:-top-16 md:-top-20 lg:-top-24 -right-12 sm:-right-16 md:-right-20 lg:-right-24 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-gradient-to-br from-indigo-200 to-purple-200 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-full blur-2xl sm:blur-3xl opacity-30 sm:opacity-40"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute -bottom-12 sm:-bottom-16 md:-bottom-20 lg:-bottom-24 -left-12 sm:-left-16 md:-left-20 lg:-left-24 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-gradient-to-tr from-cyan-200 to-blue-200 dark:from-cyan-900/30 dark:to-blue-900/30 rounded-full blur-2xl sm:blur-3xl opacity-30 sm:opacity-40"
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 sm:w-48 md:w-60 lg:w-72 h-36 sm:h-48 md:h-60 lg:h-72 bg-gradient-to-r from-orange-200 to-pink-200 dark:from-orange-900/20 dark:to-pink-900/20 rounded-full blur-2xl sm:blur-3xl opacity-20 sm:opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced responsive header section */}
        <motion.div 
          className="space-y-4 sm:space-y-6 md:space-y-8 mb-8 sm:mb-10 md:mb-12 lg:mb-16"
          variants={headerVariants}
          initial="initial"
          animate="animate"
        >
          <div className="flex justify-center mb-4 sm:mb-6">
            <motion.div
              className="relative inline-flex items-center justify-center p-2 sm:p-3 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-xl sm:rounded-2xl border border-indigo-200/50 dark:border-indigo-700/30 shadow-lg backdrop-blur-sm"
              whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <Code2 className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-indigo-600 dark:text-indigo-400 relative z-10" />
              <motion.div
                className="absolute -top-0.5 sm:-top-1 -right-0.5 sm:-right-1 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.div>
          </div>

          <div className="text-center space-y-3 sm:space-y-4">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 dark:from-purple-400 dark:via-indigo-400 dark:to-blue-400 leading-tight"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              Featured Projects
            </motion.h2>
            
            <motion.div
              className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mx-auto"
              initial={{ width: 0 }}
              animate={{ width: "6rem" }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>

          <motion.p
            className="text-center text-slate-600 dark:text-slate-400 max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-4 sm:px-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Explore my portfolio of web development projects, featuring modern e-commerce
            solutions and cutting-edge web applications built with the latest technologies
            and best practices.
          </motion.p>
        </motion.div>

        {/* Enhanced responsive filter and view controls */}
        <motion.div
          className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-10 lg:mb-12 p-3 sm:p-4 bg-white/70 dark:bg-slate-800/70 rounded-xl sm:rounded-2xl border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Responsive filter tags */}
          <div className="flex flex-col xs:flex-row xs:items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 whitespace-nowrap">
              <Filter className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Filter:</span>
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {["All", "Web", "E-commerce"].map((tagName) => (
                <ProjectTag
                  key={tagName}
                  onClick={handleTagChange}
                  name={tagName}
                  isSelected={tag === tagName}
                  className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 text-xs sm:text-sm transition-all duration-300 rounded-md sm:rounded-lg font-medium border"
                />
              ))}
            </div>
          </div>

          {/* Responsive view mode toggle */}
          <div className="flex items-center justify-center sm:justify-end">
            <div className="flex items-center gap-1 sm:gap-2 bg-slate-100 dark:bg-slate-700 rounded-lg p-0.5 sm:p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-1.5 sm:p-2 rounded-md transition-all duration-300 ${
                  viewMode === "grid"
                    ? "bg-white dark:bg-slate-600 text-indigo-600 dark:text-indigo-400 shadow-sm"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300"
                }`}
              >
                <Grid3x3 className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-1.5 sm:p-2 rounded-md transition-all duration-300 ${
                  viewMode === "list"
                    ? "bg-white dark:bg-slate-600 text-indigo-600 dark:text-indigo-400 shadow-sm"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300"
                }`}
              >
                <List className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Responsive projects count and stats */}
        <motion.div
          className="flex justify-center mb-6 sm:mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 sm:gap-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-full border border-indigo-200/50 dark:border-indigo-700/30">
            <span className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
            </span>
            {featuredProjects.length > 0 && (
              <>
                <div className="w-1 h-1 bg-slate-400 rounded-full" />
                <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400">
                  {featuredProjects.length} featured
                </span>
              </>
            )}
          </div>
        </motion.div>

        {/* Responsive featured projects section */}
        {featuredProjects.length > 0 && (
          <motion.div
            className="mb-8 sm:mb-10 md:mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
              <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-200">Featured Projects</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-orange-500/50 to-transparent" />
            </div>
            
            <motion.ul
              className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8"
              variants={containerVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
            >
              {featuredProjects.map((project, index) => (
                <motion.li
                  key={project.id}
                  variants={cardVariants}
                  className="group"
                  whileHover={{
                    scale: 1.02,
                    y: -5,
                    transition: { duration: 0.2 }, // Reduced from 0.3
                  }}
                >
                  <div className="relative h-full bg-gradient-to-br from-white to-slate-50 dark:from-slate-800/90 dark:to-slate-900/90 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm">
                    <div className="absolute top-2 sm:top-3 right-2 sm:right-3 z-10">
                      <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-medium shadow-lg">
                        Featured
                      </div>
                    </div>
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      imgUrl={project.image}
                      gitUrl={project.gitUrl}
                      previewUrl={project.previewUrl}
                      tech={project.tech}
                      className="h-full"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    />
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}

        {/* Responsive regular projects section */}
        {regularProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {featuredProjects.length > 0 && (
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-500" />
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-200">All Projects</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/50 to-transparent" />
              </div>
            )}

            <motion.ul
              ref={ref}
              className={`grid gap-4 sm:gap-6 md:gap-8 ${
                viewMode === "grid" 
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" 
                  : "grid-cols-1 max-w-4xl mx-auto"
              }`}
              variants={containerVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
            >
              {(featuredProjects.length > 0 ? regularProjects : filteredProjects).map((project, index) => (
                <motion.li
                  key={project.id}
                  variants={cardVariants}
                  className="group"
                  whileHover={{
                    scale: viewMode === "grid" ? 1.02 : 1.01,
                    y: -3,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="relative h-full bg-gradient-to-br from-white to-slate-50 dark:from-slate-800/90 dark:to-slate-900/90 rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm">
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      imgUrl={project.image}
                      gitUrl={project.gitUrl}
                      previewUrl={project.previewUrl}
                      tech={project.tech}
                      className="h-full"
                      viewMode={viewMode}
                    />
                    <motion.div
                      className="absolute top-2 sm:top-3 right-2 sm:right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
                      whileHover={{ scale: 1.1, rotate: 180 }}
                    >
                      <div className="bg-indigo-500/20 dark:bg-indigo-400/30 p-1.5 sm:p-2 rounded-full backdrop-blur-sm border border-indigo-500/30">
                        <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-indigo-600 dark:text-indigo-400" />
                      </div>
                    </motion.div>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}

        {/* Enhanced responsive GitHub link */}
        {filteredProjects.length > 0 && (
          <motion.div
            className="mt-10 sm:mt-12 md:mt-16 flex justify-center px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <motion.a
              href="https://github.com/Aristocratjnr"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg sm:rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center sm:justify-start"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-xs sm:text-sm md:text-base">View more projects on GitHub</span>
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
              <motion.div
                className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.a>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
