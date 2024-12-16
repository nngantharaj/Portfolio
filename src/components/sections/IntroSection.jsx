import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sun, Moon } from 'lucide-react';

const IntroSection = () => {
  const [theme, setTheme] = useState(
    typeof window !== 'undefined' && window.localStorage.getItem('theme') === 'dark'
      ? 'dark'
      : 'light'
  );

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      window.localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      window.localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300" />

      {/* Light/Dark Mode Toggle */}
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 shadow-md transition-colors duration-300"
      >
        {theme === 'dark' ? <Sun className="w-3 h-3" /> : <Moon className="w-3 h-3" />}
      </button>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10 px-4"
      >
        {/* Heading */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Hello, I'm <span className="text-blue-600 dark:text-blue-400">GANTHARAJ</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 transition-colors duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Full Stack Developer | UI/UX Designer | Tech Enthusiast
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="space-x-4"
        >
          {/* Projects Button */}
          <a href="#projects">
            <button className="bg-blue-600 dark:bg-blue-500 text-white dark:text-white px-8 py-3 rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors">
              View Projects
            </button>
          </a>

          {/* Contact Me Button */}
          <a
            href="mailto:nngantharaj@gmail.com"
            className="text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <button className="border-2 border-gray-800 dark:border-white text-gray-800 dark:text-white px-8 py-3 rounded-full hover:bg-gray-800 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-colors">
              Contact Me
            </button>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDown className="text-gray-900 dark:text-white w-8 h-8 transition-colors duration-300" />
      </motion.div>
    </section>
  );
};

export default IntroSection;