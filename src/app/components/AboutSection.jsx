"use client";
import React, { useTransition, useState } from "react";
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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-2 gap-4"
      >
        <div className="space-y-4">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <FaHtml5 className="text-2xl text-orange-600" />
            <span>HTML</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <SiNextdotjs className="text-2xl text-white" />
            <span>Next.js</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <SiTailwindcss className="text-2xl text-blue-500" />
            <span>TailwindCSS</span>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <FaPython className="text-2xl text-yellow-500" />
            <span>Python</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <FaJsSquare className="text-2xl text-yellow-400" />
            <span>JavaScript</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <FaReact className="text-2xl text-blue-400" />
            <span>React</span>
          </div>
        </div>
      </motion.div>
    ),
  },
  {
    title: "Education",
    id: "education",
    icon: <BookOpen className="w-5 h-5" />,
    content: (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <div className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
          <h3 className="font-semibold text-lg">Information Technology Student</h3>
          <p className="text-gray-400">University of Ghana</p>
          <p className="text-sm text-gray-500 mt-2">2021 - Present</p>
        </div>
      </motion.div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    icon: <Award className="w-5 h-5" />,
    content: (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <div className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
          <h3 className="font-semibold">Intermediate Python in Data Science</h3>
          <p className="text-sm text-gray-400 mt-1">DataCamp</p>
        </div>
        <div className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
          <h3 className="font-semibold">Data Analysis with Python</h3>
          <p className="text-sm text-gray-400 mt-1">IBM</p>
        </div>
        <div className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
          <h3 className="font-semibold">Introduction to Artificial Intelligence with Honours</h3>
          <p className="text-sm text-gray-400 mt-1">IBM</p>
        </div>
      </motion.div>
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
    <section className="relative py-16 lg:py-24" id="about">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-4 w-72 h-72 bg-primary-600/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-secondary-600/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative rounded-lg overflow-hidden">
              <Image 
                src="/images/web.jpg" 
                width={500} 
                height={500} 
                alt="About Image"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div 
                className="inline-block"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-sm md:text-base bg-gradient-to-r from-primary-400/20 to-secondary-600/20 text-primary-400 py-2 px-4 rounded-full">
                  About Me
                </span>
              </motion.div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                Full Stack Developer 👨🏾‍💻
              </h2>
              
              <p className="text-gray-400 text-lg leading-relaxed">
                I am an aspiring full stack web developer with a passion for creating
                interactive and responsive web applications. I have experience
                working with JavaScript, React, Python, Next.js, SQL, HTML, CSS, and Git. 
                I am a quick learner and I am always looking to expand my knowledge 
                and skill set. I am a team player and I am excited to work with 
                others to create amazing applications.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex flex-wrap gap-4">
                {TAB_DATA.map((tabItem) => (
                  <TabButton
                    key={tabItem.id}
                    selectTab={() => handleTabChange(tabItem.id)}
                    active={tab === tabItem.id}
                  >
                    <div className="flex items-center gap-2">
                      {tabItem.icon}
                      {tabItem.title}
                    </div>
                  </TabButton>
                ))}
              </div>

              <div className="min-h-[250px]">
                {TAB_DATA.find((t) => t.id === tab).content}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;