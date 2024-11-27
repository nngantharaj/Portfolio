import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaJava, FaReact, FaAngular, FaHtml5, FaCss3Alt, FaNode, FaNodeJs, FaFigma } from "react-icons/fa";
import { BiLogoJavascript, BiLogoTypescript, BiLogoTailwindCss, BiLogoMongodb } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { LuDot } from "react-icons/lu";

const skills = [
  { category: 'Programming Languages', items: [{ icon: <FaJava />, name: 'Java' }, { icon: <LuDot />, name: 'C++' }, { icon: <BiLogoJavascript  />, name: 'JavaScript' }, { icon: <BiLogoTypescript  />, name: 'TypeScript' }] },
  { category: 'Frontend', items: [{ icon: <FaReact />, name: 'React' }, { icon: <FaAngular />, name: 'Angular' }, { icon: <FaHtml5 />, name: 'HTML' }, { icon: <FaCss3Alt />, name: 'CSS' }, { icon: <BiLogoTailwindCss />, name: 'Tailwind CSS' }] },
  { category: 'Backend', items: [{ icon: <FaNode />, name: 'Node.js' }, { icon: <FaNodeJs />, name: 'Express.js' }, { icon: <BiLogoMongodb  />, name: 'MongoDB' }, { icon: <GrMysql />, name: 'MySQL' }] },
  { category: 'Design', items: [{ icon: <FaFigma />, name: 'Figma' }, { icon: <LuDot />, name: 'UI / UX' }, { icon: <LuDot />, name: 'Responsive Design' }] },
];

const SkillsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Skills</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-900 p-6 rounded-xl"
              >
                <h3 className="text-xl font-semibold text-blue-400 mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, idx) => (
                    <li key={idx} className="text-gray-300 flex items-center">
                      <span className="mr-2 text-xl">{skill.icon}</span>
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;