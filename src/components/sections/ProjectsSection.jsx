import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';
import { RiGitRepositoryPrivateFill } from "react-icons/ri";

const projects = [
  {
    image: "/Valayal.png",
    title: "E-Commerce Platform for a Bangle Store",
    description: `
      The project involved developing a MEAN-stack E-commerce website with features such as user authentication, product browsing, 
      cart management, and online payments. It also includes an admin panel, enabling administrators to manage the entire site, including 
      product listings, user accounts, and order tracking.
    `,
    note: `
      <strong>Note:</strong>
      Note: For the best experience, please use a desktop or laptop, as the design is not optimized for mobile screens and may appear 
      misaligned.<br><br>
      &ensp;The server may temporarily enter standby mode due to inactivity, causing delays in loading products. If this occurs, wait a minute and 
      refresh the page periodically. Once products are visible, the system is active.<br><br>
      &ensp;The website is fully functional for browsing, signing up, logging in, adding items to your cart or wishlist, and more. However, checkout 
      functionality is currently unavailable.<br><br>
      To access the admin portal, use these credentials: <br>
      <strong>Username:</strong> admin <br>
      <strong>Password:</strong> root
    `,
    technologies: ["Angular", "Json-server"],
    github: "#",
    live: "https://valayal.vercel.app"
  },
  {
    image: "/sKc.png",
    title: "Cable and Internet Service Provider Web Application",
    description: `
      Built a MERN-stack web application with separate user and admin interfaces. The user interface allows customers 
      to explore plans, subscribe to services, and manage their accounts. The admin interface includes features for managing 
      users, plans, and tracking subscriptions.
    `,
    note: `
      <strong>Note:</strong> Login Credentials: <br>
      <div style="display: flex; max-width: 330px">
        <div style="flex: 1;">
          Admin Credentials:
          <ul class="list-disc pl-5">
            <li>Username: admin</li>
            <li>Password: root</li>
          </ul>
        </div>
        <div style="flex: 1;">
          User Credentials:
          <ul class="list-disc pl-5">
            <li>Username: 3102564755</li>
            <li>Password: 3102564755</li>
          </ul>
        </div>
      </div><br>
      Please note that the system may enter standby mode after a period of inactivity, potentially causing delays of 50 seconds or more. 
      To reactivate the server, follow these steps:<br>
      &ensp;1. Refresh or submit demo captcha once. <br>
      &ensp;2. Wait a minute, then reload the page periodically. <br>
      &ensp;3. When the captcha reappears, the server is active, and you may proceed with login. <br><br>
      <strong>Important Note:</strong>
      To avoid future login issues, refrain from changing the user's password or STB Number in the User or Admin panel.
    `,
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    github: "#",
    live: "https://srikumarancables.vercel.app/"
  },
  {
    image: "/Portfolio.png",
    title: "Portfolio Website",
    description: "Modern portfolio website with animations and responsive design",
    note: "#",
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

                  {/* Project Note */}
                  {project.note && project.note !== "#" ? (
                    <div
                      className="border border-gray-300 dark:border-gray-700 p-4 rounded-lg text-gray-400 dark:text-gray-500 mb-4 text-sm"
                      dangerouslySetInnerHTML={{ __html: project.note }}
                    />
                  ) : null}

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