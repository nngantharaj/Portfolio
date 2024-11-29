import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';
import { RiGitRepositoryPrivateFill } from "react-icons/ri";

const projects = [
  {
    title: "E-Commerce Platform for a Bangle Store",
    description: "The project involved creating a full-stack E-commerce website where users can browse products, add them to the cart, and proceed with online payment. Implemented features like user authentication, product management, and order tracking.",
    image: "/Valayal.png",
    technologies: ["Angular", "Json-server"],
    github: "#",
    live: "https://valayal.vercel.app"
  },
  {
    title: "Cable and Internet Service Provider Web Application",
    description: " Built a full-stack web application with separate user and admin interfaces. The user interface allows customers to explore plans, subscribe to services, and manage their accounts. The admin interface includes features for managing users, plans, and tracking subscriptions. ",
    image: "/sKc.png",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    github: "#",
    live: "https://skc-f7rm.onrender.com/"
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio website with animations and responsive design",
    image: "/Portfolio.png",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/nngantharaj/Portfolio",
    live: "https://nngantharaj.vercel.app/"
  }
];

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
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
            Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden shadow-md transition-colors"
              >
                {/* Project Image */}
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <h3
                    className="text-xl font-semibold text-gray-900 dark:text-white mb-2"
                  >
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-600 dark:bg-blue-500 text-white text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.github && project.github !== "#" ? (
                      <a
                        href={project.github}
                        className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={20} />
                      </a>
                    ) : (
                      <span
                        className="flex items-center text-gray-400 dark:text-gray-500 italic gap-1"
                      >
                        Source Code <RiGitRepositoryPrivateFill />
                      </span>
                    )}
                    <a
                      href={project.live}
                      className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;