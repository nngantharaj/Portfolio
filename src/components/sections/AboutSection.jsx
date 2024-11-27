import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white mb-8 text-center">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate developer with a strong interest in creating beautiful and functional web applications. 
                As a fresher in the field of web development, I am eager to apply my skills and learn from real-world 
                challenges while contributing to meaningful projects.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing my knowledge through technical writing and mentoring.
              </p>
              {/* Button to view PDF Resume */}
              <a
                href="/Resume.pdf"  // Replace with the actual path to your PDF
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mt-6 bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors">
                  View My Resume
                </button>
              </a>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img 
                  src="/1.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;