import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: "Bachelor's in Computer Science Engineering",
    school: "Sri Krishna College Of Engineering And Technology",
    year: "2020-2024",
    description: "Graduated with a CGPA of 8.0 / 10",
  },
  {
    degree: "Higher Secondary",
    school: "Maharishi Vidya Mandir CBSE",
    year: "2020",
    description: "Secured 80% in CBSE board examinations",
  },
  {
    degree: "Secondary School",
    school: "Geethaanjali All India Sr. Sec. School",
    year: "2018",
    description: "Secured 70% in CBSE board examinations",
  },
];

const EducationSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="education"
      className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          >
            Education
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl flex gap-6 shadow-md transition-colors"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center">
                    <GraduationCap className="text-white dark:text-white w-6 h-6" />
                  </div>
                </div>
                
                <div>
                  <h3
                    className="text-xl font-semibold text-gray-900 dark:text-white mb-2"
                  >
                    {edu.degree}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-2">
                    {edu.school}
                  </p>
                  <p className="text-gray-700 dark:text-gray-400 mb-2">
                    {edu.year}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;