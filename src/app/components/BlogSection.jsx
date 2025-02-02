"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Clock, Tag, ChevronRight, BookOpen } from 'lucide-react';

const articles = [
  {
    title: "Building Scalable React Applications",
    excerpt: "Learn essential patterns and practices for creating maintainable React applications that scale.",
    date: "2024-02-01",
    readTime: "8 min read",
    category: "Development",
    tags: ["React", "Architecture", "Performance"],
    imageUrl: "/images/react.jpg",
  },
  {
    title: "The Future of Web Development",
    excerpt: "Exploring upcoming trends and technologies that will shape the future of web development.",
    date: "2024-01-15",
    readTime: "6 min read",
    category: "Tech Trends",
    tags: ["Web3", "AI", "Future Tech"],
    imageUrl: "/images/next.png",
  },
  {
    title: "Mastering CSS Grid",
    excerpt: "Deep dive into CSS Grid with practical examples and advanced techniques.",
    date: "2024-01-01",
    readTime: "10 min read",
    category: "CSS",
    tags: ["CSS", "Layout", "Design"],
    imageUrl: "/images/develop.jpg",
  }
];

const categories = ["All", "Development", "Tech Trends", "CSS", "JavaScript", "Career"];

const BlogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="rounded-lg py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-[150px]"
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
              Tech Insights
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Exploring the latest in web development, design patterns, and technology trends
            </p>
          </motion.div>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 space-y-6">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl 
                focus:ring-2 focus:ring-blue-500 focus:border-transparent
                text-white placeholder-gray-400 transition-all duration-300 "
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                  ${selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                  }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gray-800/50 rounded-2xl overflow-hidden 
                border border-gray-700/50 hover:border-gray-600/50
                transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 backdrop-blur-sm"
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {article.readTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <Tag className="w-4 h-4" />
                    {article.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {article.title}
                </h3>

                <p className="text-gray-400 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap gap-2">
                  {article.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium rounded-md bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300">
                  Read More
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl
              hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-blue-500/25"
          >
            <BookOpen className="w-5 h-5" />
            View All Articles
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;