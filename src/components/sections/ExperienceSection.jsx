import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "Software Analyst Trainee",
    company: "Aspire Systems Pvt Ltd, Chennai",
    period: "April 2024 - Present",
    description: [
      "Gained hands-on experience with a diverse range of technologies, including HTML, CSS, Angular, React, AWS, Azure, Node.js, Express.js, MongoDB, MySQL, PL-SQL, and DevOps.",
      "Specialized in full-stack development, focusing on both the MEAN and MERN stacks.",
      "Successfully completed individual projects leveraging MEAN and MERN stacks, showcasing strong problem-solving and implementation skills."
    ]
  },
];

const ExperienceSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="experience"
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
            Experience
          </h2>

          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                {/* Timeline Line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-[15px] top-0 h-full w-px bg-blue-600 dark:bg-blue-500" />
                )}

                {/* Timeline Dot */}
                <div className="absolute left-0 top-0 w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center">
                  <Briefcase className="text-white w-4 h-4" />
                </div>

                {/* Experience Card */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl ml-8 shadow-md transition-colors">
                  <h3
                    className="text-xl font-semibold text-gray-900 dark:text-white mb-2"
                  >
                    {exp.role}
                  </h3>
                  <p
                    className="text-blue-600 dark:text-blue-400 mb-2"
                  >
                    {exp.company}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {exp.period}
                  </p>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-gray-700 dark:text-gray-300 flex items-start"
                      >
                        <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2 mt-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;