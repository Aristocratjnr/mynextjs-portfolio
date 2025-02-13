"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Clock, ChevronRight, BookOpen, Code2, TrendingUp, Palette, FileCode, Briefcase, Calendar } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import Link from 'next/link'; // Import the Link component

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
    imageUrl: "/images/develop.jpg",
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
    imageUrl: "/images/next.png",
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
    imageUrl: "/images/web.jpg",
    link: "/articles/modern-css-animation-techniques", // Add link
  },

  // JavaScript Articles
  {
    title: "Understanding JavaScript Promises",
    excerpt: "Master asynchronous programming with JavaScript Promises and async/await patterns.",
    date: "2024-01-20",
    readTime: "11 min read",
    category: "JavaScript",
    tags: ["JavaScript", "Async", "ES6"],
    imageUrl: "/images/react.jpg",
    link: "/articles/understanding-javascript-promises", // Add link
  },
  {
    title: "JavaScript Performance Optimization",
    excerpt: "Tips and techniques for optimizing JavaScript code for better performance.",
    date: "2024-01-18",
    readTime: "8 min read",
    category: "JavaScript",
    tags: ["JavaScript", "Performance", "Optimization"],
    imageUrl: "/images/next.png",
    link: "/articles/javascript-performance-optimization", // Add link
  },

  // Career Articles
  {
    title: "Breaking into Tech: A Guide",
    excerpt: "Comprehensive guide for beginners looking to start their career in tech.",
    date: "2024-01-25",
    readTime: "15 min read",
    category: "Career",
    tags: ["Career", "Guide", "Tech"],
    imageUrl: "/images/develop.jpg",
    link: "/articles/breaking-into-tech-guide", // Add link
  },
  {
    title: "From Junior to Senior Developer",
    excerpt: "Key milestones and skills needed to progress from junior to senior developer role.",
    date: "2024-01-22",
    readTime: "13 min read",
    category: "Career",
    tags: ["Career", "Growth", "Skills"],
    imageUrl: "/images/web.jpg",
    link: "/articles/from-junior-to-senior-developer", // Add link
  },
];

const categories = [
  { id: "All", icon: <BookOpen className="w-4 h-4" />, color: "from-blue-500 to-indigo-500" },
  { id: "Development", icon: <Code2 className="w-4 h-4" />, color: "from-emerald-500 to-teal-500" },
  { id: "Tech Trends", icon: <TrendingUp className="w-4 h-4" />, color: "from-violet-500 to-purple-500" },
  { id: "CSS", icon: <Palette className="w-4 h-4" />, color: "from-pink-500 to-rose-500" },
  { id: "JavaScript", icon: <FileCode className="w-4 h-4" />, color: "from-amber-500 to-orange-500" },
  { id: "Career", icon: <Briefcase className="w-4 h-4" />, color: "from-cyan-500 to-sky-500" },
];

const BlogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredArticle, setHoveredArticle] = useState(null);
  const { theme } = useTheme();

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (categoryId) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.color : "from-blue-500 to-indigo-500";
  };

  return (
    <div className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
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
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 1.3, 1],
          }}
          transition={{ 
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-blue-400">
                Tech Insights
              </span>
            </h2>
            <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto">
              Exploring the latest in web development, design patterns, and technology trends
            </p>
          </motion.div>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 sm:mb-16 space-y-6 sm:space-y-8">
          {/* Search Bar */}
          <div className="relative max-w-lg mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-muted/50 dark:bg-white/5 backdrop-blur-xl border border-border
                  focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50
                  text-foreground placeholder-muted-foreground transition-all duration-300 rounded-2xl"
              />
              <motion.div
                className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-violet-500/20 to-blue-500/20 opacity-0 transition-opacity duration-300 blur-xl"
                animate={{ opacity: searchQuery ? 0.5 : 0 }}
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
            {categories.map(({ id, icon, color }) => (
              <motion.button
                key={id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(id)}
                className={`
                  px-4 py-2.5 rounded-xl text-sm font-medium
                  flex items-center gap-2 transition-all duration-300
                  ${selectedCategory === id
                    ? `bg-gradient-to-r ${color} text-white shadow-lg shadow-violet-500/25`
                    : 'bg-muted/50 dark:bg-white/5 hover:bg-muted dark:hover:bg-white/10 backdrop-blur-lg text-foreground'
                  }
                `}
              >
                {icon}
                {id}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Articles Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredArticles.map((article, index) => (
              <Link href={article.link} key={article.title} passHref> {/* Add Link here */}
                <motion.article
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group relative bg-card/50 dark:bg-white/[0.02] backdrop-blur-xl rounded-2xl overflow-hidden
                    border border-border hover:border-primary/20
                    transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/10"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={article.imageUrl}
                      alt={article.title}
                      width={800}
                      height={450}
                      className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {new Date(article.date).toLocaleDateString('en-US', { 
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-muted-foreground line-clamp-2">
                      {article.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-medium rounded-lg
                            bg-muted/50 dark:bg-white/5 text-foreground border border-border
                            hover:bg-muted dark:hover:bg-white/10 transition-colors duration-300"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More Button */}
                    <motion.button 
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-sm font-medium text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors duration-300"
                    >
                      Read Article
                      <ChevronRight className="w-4 h-4" />
                    </motion.button>
                  </div>

                  {/* Hover Overlay */}
                  <motion.div
                    initial={false}
                    animate={{ opacity: hoveredArticle === article.title ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-violet-950/50 via-transparent to-transparent pointer-events-none"
                  />
                </motion.article>
              </Link>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 
              bg-gradient-to-r from-violet-500 to-blue-500 
              hover:from-violet-600 hover:to-blue-600
              text-white rounded-xl font-medium
              shadow-lg shadow-violet-500/25 transition-all duration-300"
          >
            <BookOpen className="w-5 h-5" />
            Browse All Articles
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogSection;