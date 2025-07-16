// src/pages/Projects.jsx
import { motion } from "framer-motion";

const projects = [
  {
    title: "Project One",
    description: "A React app with awesome UI",
    img: "/comp.jpg",
    link: "https://github.com/yourusername/project-one",
  },
  {
    title: "Project Two",
    description: "Node.js REST API",
    img: "/comp.jpg",
    link: "https://github.com/yourusername/project-two",
  },
  {
    title: "Project Three",
    description: "Fullstack MERN app",
    img: "/comp.jpg",
    link: "https://github.com/yourusername/project-three",
  },
  {
    title: "Project Four",
    description: "Open source contribution",
    img: "/comp.jpg",
    link: "https://github.com/yourusername/project-four",
  },
];

const Projects = () => {
  return (
    <section className="bg-black text-white min-h-screen px-6 py-20">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-green-400 text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        My Projects
      </motion.h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(({ title, description, img, link }, idx) => (
          <motion.a
            key={idx}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-green-400 transition transform hover:scale-[1.05]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15 }}
          >
            <img
              src={img}
              alt={title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-green-400">{title}</h3>
              <p className="text-gray-300 mt-2">{description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
