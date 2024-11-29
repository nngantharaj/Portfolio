import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 shadow-lg transition-colors duration-300">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo / Title */}
          <div className="text-2xl font-bold text-gray-900 dark:text-white">Portfolio</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white  transition-colors">Home</a>
            <a href="#about" className="text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">About</a>
            <a href="#skills" className="text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">Skills</a>
            <a href="#education" className="text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">Education</a>
            <a href="#projects" className="text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">Experience</a>

            <div className="flex items-center space-x-4">
              <a href="https://github.com/nngantharaj" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/nngantharaj" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:nngantharaj@gmail.com" className="text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-900 dark:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#home" className="block text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">Home</a>
            <a href="#about" className="block text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">About</a>
            <a href="#skills" className="block text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">Skills</a>
            <a href="#education" className="block text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">Education</a>
            <a href="#projects" className="block text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="block text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">Experience</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;