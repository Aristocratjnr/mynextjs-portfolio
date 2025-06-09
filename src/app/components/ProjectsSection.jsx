"use client";
import React, { useState, useRef, useMemo, lazy, Suspense } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Sparkles, ChevronRight, Filter, Grid3x3, List } from "lucide-react";

// Lazy load components
const ProjectCard = lazy(() => import("./ProjectCard"));
const ProjectTag = lazy(() => import("./ProjectTag"));

// Move projectsData outside component to prevent recreation
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

// Optimized animation variants
const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
};

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const [viewMode, setViewMode] = useState("grid");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "100px" });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  // Memoize filtered projects to prevent recalculation
  const filteredProjects = useMemo(() => 
    projectsData.filter((project) => project.tag.includes(tag)),
    [tag]
  );

  const featuredProjects = useMemo(() => 
    filteredProjects.filter(project => project.featured),
    [filteredProjects]
  );

  const regularProjects = useMemo(() => 
    filteredProjects.filter(project => !project.featured),
    [filteredProjects]
  );

  // Enhanced loading skeleton that matches your card design
  const ProjectCardSkeleton = () => (
    <div className="group relative h-full bg-gradient-to-br from-white to-slate-50 dark:from-slate-800/90 dark:to-slate-900/90 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm animate-pulse">
      {/* Image skeleton */}
      <div className="h-48 sm:h-52 md:h-56 bg-slate-200 dark:bg-slate-700 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-300/50 to-transparent dark:from-slate-600/50"></div>
      </div>
      
      {/* Content skeleton */}
      <div className="p-4 sm:p-5 md:p-6 space-y-3">
        <div className="h-5 bg-slate-200 dark:bg-slate-700 rounded w-3/4"></div>
        <div className="space-y-2">
          <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-full"></div>
          <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-2/3"></div>
        </div>
        
        {/* Tech stack skeleton */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="h-6 w-16 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
          ))}
        </div>
        
        {/* Buttons skeleton */}
        <div className="flex gap-3 pt-3">
          <div className="h-8 w-20 bg-slate-200 dark:bg-slate-700 rounded-lg"></div>
          <div className="h-8 w-20 bg-slate-200 dark:bg-slate-700 rounded-lg"></div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-3 sm:px-4 md:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-cyan-200/30 to-blue-200/30 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="max-w-[95%] mx-auto relative z-10">
        {/* Header section */}
        <motion.div 
          className="text-center space-y-6 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-2xl border border-indigo-200/50 dark:border-indigo-700/30 shadow-lg backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Code2 className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 dark:from-purple-400 dark:via-indigo-400 dark:to-blue-400">
            Featured Projects
          </h2>
          
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Explore my portfolio of web development projects, featuring modern e-commerce
            solutions and cutting-edge web applications.
          </p>
        </motion.div>

        {/* Filter controls */}
        <motion.div
          className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8 p-4 bg-white/70 dark:bg-slate-800/70 rounded-xl border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <div className="flex items-center gap-3">
            <Filter className="w-4 h-4" />
            <span className="text-sm font-medium">Filter:</span>
            <div className="flex gap-2">
              <Suspense fallback={<div className="h-8 w-16 bg-slate-200 rounded animate-pulse"></div>}>
                {["All", "Web", "E-commerce"].map((tagName) => (
                  <ProjectTag
                    key={tagName}
                    onClick={handleTagChange}
                    name={tagName}
                    isSelected={tag === tagName}
                  />
                ))}
              </Suspense>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-700 rounded-lg p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-md transition-all duration-200 ${
                viewMode === "grid"
                  ? "bg-white dark:bg-slate-600 text-indigo-600 dark:text-indigo-400"
                  : "text-slate-500 dark:text-slate-400"
              }`}
            >
              <Grid3x3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-md transition-all duration-200 ${
                viewMode === "list"
                  ? "bg-white dark:bg-slate-600 text-indigo-600 dark:text-indigo-400"
                  : "text-slate-500 dark:text-slate-400"
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Projects count */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-4 px-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-full border border-indigo-200/50 dark:border-indigo-700/30">
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
            </span>
            {featuredProjects.length > 0 && (
              <>
                <div className="w-1 h-1 bg-slate-400 rounded-full" />
                <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  {featuredProjects.length} featured
                </span>
              </>
            )}
          </div>
        </div>

        {/* Featured projects */}
        {featuredProjects.length > 0 && (
          <motion.div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-5 h-5 text-orange-500" />
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">Featured Projects</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-orange-500/50 to-transparent" />
            </div>
            
            <motion.ul
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="initial"
              animate="animate"
            >
              {featuredProjects.map((project, index) => (
                <motion.li
                  key={project.id}
                  variants={cardVariants}
                  className="group"
                  whileHover={{
                    scale: 1.02,
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="relative h-full bg-gradient-to-br from-white to-slate-50 dark:from-slate-800/90 dark:to-slate-900/90 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm">
                    <div className="absolute top-3 right-3 z-10">
                      <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-medium shadow-lg">
                        Featured
                      </div>
                    </div>
                    <Suspense fallback={<ProjectCardSkeleton />}>
                      <ProjectCard
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                        tech={project.tech}
                        className="h-full"
                      />
                    </Suspense>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    />
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}

        {/* Regular projects */}
        {regularProjects.length > 0 && (
          <motion.div>
            {featuredProjects.length > 0 && (
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="w-5 h-5 text-indigo-500" />
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">All Projects</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/50 to-transparent" />
              </div>
            )}

            <motion.ul
              ref={ref}
              className={`grid gap-6 ${
                viewMode === "grid" 
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
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
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="relative h-full bg-gradient-to-br from-white to-slate-50 dark:from-slate-800/90 dark:to-slate-900/90 rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm">
                    <Suspense fallback={<ProjectCardSkeleton />}>
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
                    </Suspense>
                    <motion.div
                      className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
                      whileHover={{ scale: 1.1, rotate: 180 }}
                    >
                      <div className="bg-indigo-500/20 dark:bg-indigo-400/30 p-1.5 rounded-full backdrop-blur-sm border border-indigo-500/30">
                        <Sparkles className="w-3 h-3 text-indigo-600 dark:text-indigo-400" />
                      </div>
                    </motion.div>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}

        {/* GitHub link */}
        {filteredProjects.length > 0 && (
          <motion.div
            className="mt-16 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <motion.a
              href="https://github.com/Aristocratjnr"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>View more projects on GitHub</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              <motion.div
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.a>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
