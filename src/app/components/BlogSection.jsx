"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Clock, ChevronRight, BookOpen, Code2, TrendingUp, Palette, FileCode, Briefcase, Calendar } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import Link from 'next/link';

const articles = [
  // Development Articles
  {
    title: "Building Scalable React Applications",
    excerpt: "Learn essential patterns and practices for creating maintainable React applications that scale.",
    date: "2024-02-01",
    readTime: "8 min read",
    category: "Development",
    tags: ["React", "Architecture", "Performance"],
    imageUrl: "/images/react.jpg",
    link: "https://brainhub.eu/library/react-security-scalability", 
  },
  {
    title: "Advanced TypeScript Patterns",
    excerpt: "Deep dive into TypeScript's advanced features and design patterns for better code organization.",
    date: "2024-01-28",
    readTime: "12 min read",
    category: "Development",
    tags: ["TypeScript", "Patterns", "Development"],
    imageUrl: "/images/chart.jpg",
    link: "https://www.split.io/blog/advanced-typescript-patterns-for-enterprise-applications/", 
  },
  
  // Tech Trends Articles
  {
    title: "The Future of Web Development",
    excerpt: "Exploring upcoming trends and technologies that will shape the future of web development.",
    date: "2024-01-15",
    readTime: "6 min read",
    category: "Tech Trends",
    tags: ["Web3", "AI", "Future Tech"],
    imageUrl: "/images/typescript.png",
    link: "https://www.nividasoftware.com/blog/detail/how-the-future-of-web-development-will-change-till-2030", 
  },
  {
    title: "AI in Modern Web Applications",
    excerpt: "How artificial intelligence is transforming the way we build and interact with web applications.",
    date: "2024-01-12",
    readTime: "7 min read",
    category: "Tech Trends",
    tags: ["AI", "Innovation", "Web Dev"],
    imageUrl: "/images/web.jpg",
    link: "https://www.digitalocean.com/resources/articles/ai-tools-web-development", 
  },

  // CSS Articles
  {
    title: "Mastering CSS Grid",
    excerpt: "Deep dive into CSS Grid with practical examples and advanced techniques.",
    date: "2024-01-01",
    readTime: "10 min read",
    category: "CSS",
    tags: ["CSS", "Layout", "Design"],
    imageUrl: "/images/develop.jpg",
    link: "https://www.coltsteele.com/tutorials/mastering-css-grid", 
  },
  {
    title: "Modern CSS Animation Techniques",
    excerpt: "Create stunning animations using modern CSS features and best practices.",
    date: "2024-01-05",
    readTime: "9 min read",
    category: "CSS",
    tags: ["CSS", "Animation", "UI"],
    imageUrl: "/images/css.png",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS/animation", 
  },

  // JavaScript Articles
  {
    title: "Understanding JavaScript Promises",
    excerpt: "Master asynchronous programming with JavaScript Promises and async/await patterns.",
    date: "2024-01-20",
    readTime: "11 min read",
    category: "JavaScript",
    tags: ["JavaScript", "Async", "ES6"],
    imageUrl: "/images/future.jpg",
    link: "https://dev.to/alexmercedcoder/understanding-javascript-promises-in-depth-5ga9", 
  },
  {
    title: "JavaScript Performance Optimization",
    excerpt: "Tips and techniques for optimizing JavaScript code for better performance.",
    date: "2024-01-18",
    readTime: "8 min read",
    category: "JavaScript",
    tags: ["JavaScript", "Performance", "Optimization"],
    imageUrl: "/images/next.png",
    link: "https://romgrk.com/posts/optimizing-javascript", 
  },

  // Career Articles
  {
    title: "Breaking into Tech: A Guide",
    excerpt: "Comprehensive guide for beginners looking to start their career in tech.",
    date: "2024-01-25",
    readTime: "15 min read",
    category: "Career",
    tags: ["Career", "Guide", "Tech"],
    imageUrl: "/images/javascript.jpg",
    link: "https://www.allskilled.com/post/breaking-into-the-tech-industry-your-guide-to-success-and-growth", 
  },
  {
    title: "From Junior to Senior Developer",
    excerpt: "Key milestones and skills needed to progress from junior to senior developer role.",
    date: "2024-01-22",
    readTime: "13 min read",
    category: "Career",
    tags: ["Career", "Growth", "Skills"],
    imageUrl: "/images/senior.png",
    link: "https://zerotomastery.io/blog/dont-be-a-junior-developer-the-roadmap", 
  },
];

const categories = [
  { id: "All", icon: <BookOpen className="w-4 h-4" />, color: "indigo" },
  { id: "Development", icon: <Code2 className="w-4 h-4" />, color: "indigo" },
  { id: "Tech Trends", icon: <TrendingUp className="w-4 h-4" />, color: "purple" },
  { id: "CSS", icon: <Palette className="w-4 h-4" />, color: "purple" },
  { id: "JavaScript", icon: <FileCode className="w-4 h-4" />, color: "amber" },
  { id: "Career", icon: <Briefcase className="w-4 h-4" />, color: "indigo" },
];

const BlogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredArticle, setHoveredArticle] = useState(null);
  const { theme, systemTheme } = useTheme();
  
  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDarkMode = currentTheme === "dark";

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (categoryId) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.color : "indigo";
  };

  const getColorClasses = (color, isDarkMode) => {
    const colorMap = {
      indigo: {
        bg: isDarkMode ? "bg-indigo-900/30" : "bg-indigo-100",
        text: isDarkMode ? "text-indigo-300" : "text-indigo-700",
        border: isDarkMode ? "border-indigo-700/30" : "border-indigo-200",
        hover: isDarkMode ? "hover:bg-indigo-800/40" : "hover:bg-indigo-200",
        active: isDarkMode ? "bg-indigo-800/60" : "bg-indigo-300",
        icon: isDarkMode ? "text-indigo-400" : "text-indigo-600",
      },
      purple: {
        bg: isDarkMode ? "bg-purple-900/30" : "bg-purple-100",
        text: isDarkMode ? "text-purple-300" : "text-purple-700",
        border: isDarkMode ? "border-purple-700/30" : "border-purple-200",
        hover: isDarkMode ? "hover:bg-purple-800/40" : "hover:bg-purple-200",
        active: isDarkMode ? "bg-purple-800/60" : "bg-purple-300",
        icon: isDarkMode ? "text-purple-400" : "text-purple-600",
      },
      amber: {
        bg: isDarkMode ? "bg-amber-900/30" : "bg-amber-100",
        text: isDarkMode ? "text-amber-300" : "text-amber-700",
        border: isDarkMode ? "border-amber-700/30" : "border-amber-200",
        hover: isDarkMode ? "hover:bg-amber-800/40" : "hover:bg-amber-200",
        active: isDarkMode ? "bg-amber-800/60" : "bg-amber-300",
        icon: isDarkMode ? "text-amber-400" : "text-amber-600",
      },
    };
    
    return colorMap[color] || colorMap.indigo;
  };

  const waveVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  return (
    <section 
      className={`py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300 relative
        ${
          isDarkMode
            ? "bg-gradient-to-br from-slate-900 to-slate-800"
            : "bg-gradient-to-br from-slate-50 to-indigo-50/50"
        }`}
      id="blog"
    >
      {/* Background waves similar to AchievementsSection */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-full h-64 ${
              isDarkMode ? "bg-indigo-600/3" : "bg-indigo-300/5"
            }`}
            style={{
              top: `${i * 30}%`,
              left: 0,
              right: 0,
              maskImage: "linear-gradient(to bottom, transparent, black, transparent)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent, black, transparent)",
            }}
            variants={waveVariants}
            animate="animate"
            custom={i}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${isDarkMode ? "text-white" : "text-slate-800"}`}>
              <span className={isDarkMode ? "text-indigo-400" : "text-indigo-600"}>Tech</span> Insights
            </h2>
            <p className={`text-base sm:text-lg max-w-2xl mx-auto ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
              Exploring the latest in web development, design patterns, and technology trends
            </p>
          </motion.div>
        </div>

        {/* Search and Filter */}
        <div className="mb-10 sm:mb-14 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-lg mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDarkMode ? "text-slate-400" : "text-slate-500"}`} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-12 pr-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition-all duration-300
                  ${isDarkMode 
                    ? "bg-slate-800/70 border-slate-700 text-white placeholder-slate-500 focus:border-indigo-500/50 focus:ring-indigo-500/20" 
                    : "bg-white border-slate-200 text-slate-800 placeholder-slate-400 focus:border-indigo-500/50 focus:ring-indigo-500/20"
                  }`}
              />
            </motion.div>
          </div>

          {/* Categories */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map(({ id, icon, color }) => {
              const colorClasses = getColorClasses(color, isDarkMode);
              const isSelected = selectedCategory === id;
              
              return (
                <motion.button
                  key={id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(id)}
                  className={`
                    px-4 py-2 rounded-lg text-sm font-medium
                    flex items-center gap-2 transition-all duration-300 border
                    ${isSelected 
                      ? `${colorClasses.active} ${colorClasses.text} ${colorClasses.border} shadow-sm` 
                      : `${colorClasses.bg} ${colorClasses.text} ${colorClasses.border} ${colorClasses.hover}`
                    }
                  `}
                >
                  <span className={colorClasses.icon}>{icon}</span>
                  {id}
                </motion.button>
              );
            })}
          </motion.div>
        </div>

        {/* Articles Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article, index) => {
                const categoryColor = getCategoryColor(article.category);
                const colorClasses = getColorClasses(categoryColor, isDarkMode);
                
                return (
                  <motion.div
                    key={article.title}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link href={article.link} passHref>
                      <motion.article
                        onMouseEnter={() => setHoveredArticle(article.title)}
                        onMouseLeave={() => setHoveredArticle(null)}
                        whileHover={{ y: -5 }}
                        className={`group h-full flex flex-col rounded-xl overflow-hidden border transition-all duration-300 shadow-sm hover:shadow-md
                          ${isDarkMode 
                            ? "bg-slate-800/70 border-slate-700 hover:border-indigo-500/30" 
                            : "bg-white border-slate-200 hover:border-indigo-500/30"
                          }
                        `}
                      >
                        {/* Image Container */}
                        <div className="relative aspect-video overflow-hidden">
                          <Image
                            src={article.imageUrl}
                            alt={article.title}
                            width={800}
                            height={450}
                            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                          />
                          
                          {/* Category Badge */}
                          <div className="absolute top-3 right-3">
                            <span className={`px-2.5 py-1 text-xs font-medium rounded-md ${colorClasses.bg} ${colorClasses.text} ${colorClasses.border}`}>
                              {article.category}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex flex-col flex-grow p-5 space-y-4">
                          {/* Meta Info */}
                          <div className={`flex items-center gap-4 text-xs ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                            <span className="flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5" />
                              {new Date(article.date).toLocaleDateString('en-US', { 
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                              })}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5" />
                              {article.readTime}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className={`text-xl font-bold group-hover:text-indigo-500 transition-colors duration-300 ${isDarkMode ? "text-white" : "text-slate-800"}`}>
                            {article.title}
                          </h3>

                          {/* Excerpt */}
                          <p className={`text-sm flex-grow ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
                            {article.excerpt}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 pt-2">
                            {article.tags.map(tag => (
                              <span
                                key={tag}
                                className={`px-2 py-0.5 text-xs font-medium rounded-md
                                  ${isDarkMode 
                                    ? "bg-slate-700/70 text-slate-300 border border-slate-600" 
                                    : "bg-slate-100 text-slate-700 border border-slate-200"
                                  }
                                `}
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>

                          {/* Read More Button */}
                          <div className={`pt-2 flex items-center gap-1 text-sm font-medium ${colorClasses.icon} group-hover:translate-x-1 transition-transform duration-300`}>
                            Read Article
                            <ChevronRight className="w-4 h-4" />
                          </div>
                        </div>
                      </motion.article>
                    </Link>
                  </motion.div>
                );
              })
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-1 sm:col-span-2 lg:col-span-3 text-center py-16"
              >
                <p className={`text-lg ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
                  No articles found matching your search criteria.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        {filteredArticles.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 sm:mt-16 text-center"
          >
            <Link href="/blog" passHref>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300
                  ${isDarkMode 
                    ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-900/20" 
                    : "bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-500/20"
                  }
                `}
              >
                <BookOpen className="w-4 h-4" />
                Browse All Articles
              </motion.button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;