import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-8">
            <a href="https://github.com/nngantharaj" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/nngantharaj" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:nngantharaj@gmail.com" className="hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
          
          <p className="text-center text-sm">
            © {currentYear} <span className="text-blue-400">Gantharaj N N</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;