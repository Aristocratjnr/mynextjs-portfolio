"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

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
    image: "/images/projects/work.png",
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
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Nextjs Appication",
    image: "/images/projects/next.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Aristocratjnr/mynextjs-portfolio.git",
    previewUrl: "https://mynextjs-portfolio-nu.vercel.app/",
  },
  {
    id: 6,
    title: " My First Portfolio",
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
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="space-y-8 mb-16">
        <motion.h2 
          className="text-center text-5xl font-bold text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <motion.p 
          className="text-center text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Explore my portfolio of web development projects, featuring e-commerce solutions and modern web applications.
        </motion.p>
      </div>

      <motion.div 
        className="flex flex-wrap justify-center items-center gap-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
          className="px-6 py-3 text-lg"
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
          className="px-6 py-3 text-lg"
        />
        <ProjectTag
          onClick={handleTagChange}
          name="E-commerce"
          isSelected={tag === "E-commerce"}
          className="px-6 py-3 text-lg"
        />
      </motion.div>

      <motion.ul 
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            className="h-full"
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              className="h-full transition-transform duration-300 hover:scale-105"
            />
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default ProjectsSection;