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
    title: "Furniture Service",
    description: "Built on HTML5, Vanilla CSS & JS",
    image: "/images/projects/work.png",
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

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="E-commerce"
          isSelected={tag === "E-commerce"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
