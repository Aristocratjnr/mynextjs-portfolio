"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { Code2, Sparkles, ChevronRight } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "Furniture Project Website",
    description: "Focused on furniture products",
    image: "/images/projects/test.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Aristocratjnr/HCI.git",
    previewUrl: "https://aristocratjnr.github.io/HCI/",
  },
  {
    id: 2,
    title: "G.C.B Kanieshie Website",
    description: "Built for a client in G.C.B Kanieshie Branch",
    image: "/images/projects/gcb.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/The-DevGenius/GCB-Kaneshie-Website.git",
    previewUrl: "http://the-devgenius.github.io/GCB-Kaneshie-Website/",
  },
  {
    id: 3,
    title: "E-commerce Website",
    description: "E-commerce Website for a client",
    image: "/images/projects/service.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Aristocratjnr/mywebtests.git",
    previewUrl: "https://aristocratjnr.github.io/mywebtests",
  },
  {
    id: 4,
    title: "Laundry Service",
    description: "Built on Nextjs",
    image: "/images/projects/laundry.png",
    tag: ["All", "E-commerce"],
    gitUrl: "https://github.com/DCIT-415/Consumer-dashboard",
    previewUrl: "https://tulundry.onrender.com",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Nextjs Application",
    image: "/images/projects/next.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Aristocratjnr/mynextjs-portfolio.git",
    previewUrl: "https://mynextjs-portfolio-nu.vercel.app/",
  },
  {
    id: 6,
    title: "My First Portfolio",
    description: "Built on React and Chakra UI",
    image: "/images/projects/port.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Aristocratjnr/my-portfolio.git",
    previewUrl: "https://aristocratportfolio.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 relative overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-100 dark:bg-cyan-900/20 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="space-y-6 sm:space-y-8 mb-12 sm:mb-16">
          <div className="flex justify-center mb-6">
            <motion.div
              className="inline-flex items-center justify-center p-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Code2 className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </motion.div>
          </div>

          <motion.h2
            className="text-center text-4xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-cyan-600 dark:from-indigo-400 dark:to-cyan-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Featured Projects
          </motion.h2>

          <motion.p
            className="text-center text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore my portfolio of web development projects, featuring e-commerce
            solutions and modern web applications built with the latest technologies.
          </motion.p>
        </div>

        <motion.div
          className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
            className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base transition-all duration-300"
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}
            className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base transition-all duration-300"
          />
          <ProjectTag
            onClick={handleTagChange}
            name="E-commerce"
            isSelected={tag === "E-commerce"}
            className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base transition-all duration-300"
          />
        </motion.div>

        <motion.ul
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          {filteredProjects.map((project, index) => (
            <motion.li
              key={project.id}
              variants={cardVariants}
              className="h-full group"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              <div className="h-full bg-white dark:bg-slate-800/70 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700/50 backdrop-blur-sm">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  imgUrl={project.image}
                  gitUrl={project.gitUrl}
                  previewUrl={project.previewUrl}
                  className="h-full"
                />
              </div>
              <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-indigo-500/10 dark:bg-indigo-400/20 p-1.5 rounded-full">
                  <Sparkles className="w-3 h-3 text-indigo-600 dark:text-indigo-400" />
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        {filteredProjects.length > 0 && (
          <motion.div
            className="mt-12 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href="https://github.com/Aristocratjnr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm sm:text-base text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors duration-300 group"
            >
              <span>View more projects on GitHub</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
