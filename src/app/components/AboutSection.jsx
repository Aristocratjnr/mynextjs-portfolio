"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import { FaHtml5, FaReact, FaPython, FaJsSquare } from "react-icons/fa"; // Import icons
import { SiNextdotjs, SiTailwindcss } from "react-icons/si"; // Import icons
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li><FaHtml5 className="inline mr-2 text-orange-600" />HTML</li>
        <li><SiNextdotjs className="inline mr-2 text-black" />Next.js</li>
        <li><SiTailwindcss className="inline mr-2 text-blue-500" />TailwindCSS</li>
        <li><FaPython className="inline mr-2 text-yellow-500" />Python</li>
        <li><FaJsSquare className="inline mr-2 text-yellow-400" />JavaScript</li>
        <li><FaReact className="inline mr-2 text-blue-400" />React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Information Technology Student</li>
        <li>University of Ghana</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Intermediate Python in Data Science</li>
        <li>Data Analysis with Python, IBM</li>
        <li>Introduction to Artificial Intelligence with Honours, IBM</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/web.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am an aspiring full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Python, Next.js, SQL, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
