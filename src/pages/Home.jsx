import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {FaGithub, FaTiktok, FaInstagram } from "react-icons/fa";

const skills = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "C#",
  "Python",
  "Java",
  "C++",
];

const projects = [
  { title: "Project One", desc: "A cool React app", img: "/screen.png" },
  { title: "Project Two", desc: "CHAT APP", img: "/CHAT.png" },
];

const socialLinks = [
  { icon: <FaGithub />, url: "https://github.com/Samuel142007" },
  { icon: <FaInstagram />, url: "https://instagram.com/samuel_.adeoye" },
  { icon: <FaTiktok />, url: "https://tiktok.com/samuel_.adeoye" },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  const [activeSection, setActiveSection] = useState("home");

  // Smooth scroll and active nav link detection
  useEffect(() => {
    const sections = ["home", "skills", "projects", "philosophy", "contact"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (let id of sections) {
        const elem = document.getElementById(id);
        if (elem && scrollPos >= elem.offsetTop) {
          setActiveSection(id);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Sticky Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-black bg-opacity-90 z-20 shadow-md flex justify-center space-x-8 py-4">
        {["home", "skills", "projects", "philosophy", "contact"].map((sec) => (
          <button
            key={sec}
            onClick={() => scrollToSection(sec)}
            className={`text-green-400 font-semibold hover:text-green-300 transition ${
              activeSection === sec ? "underline underline-offset-4" : ""
            }`}
          >
            {sec.charAt(0).toUpperCase() + sec.slice(1)}
          </button>
        ))}
      </nav>

      <main className="bg-black text-white pt-20">
        {/* Home Intro Section */}
        <motion.section
          id="home"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="min-h-screen flex flex-col items-center justify-center px-4 text-center space-y-6 relative"
        >
          {/* Subtle SVG pattern background */}
          <svg
            className="absolute top-10 left-1/2 transform -translate-x-1/2 opacity-10 w-72 h-72"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="48" stroke="#22c55e" strokeWidth="2" />
            <circle cx="50" cy="50" r="32" stroke="#22c55e" strokeWidth="1" />
            <circle cx="50" cy="50" r="16" stroke="#22c55e" strokeWidth="1" />
          </svg>

          <h1 className="text-4xl md:text-6xl font-bold text-green-400 z-10">
            Hello, I'm Samuel Adeoye
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl z-10">
            A passionate Fullstack Developer skilled in building modern web
            applications with React, Node.js, Express, and MongoDB. I also code
            in C#, Python, Java, and C++.
          </p>
          <Link
            to="/projects"
            className="z-10 inline-block px-6 py-3 bg-green-400 text-black rounded-xl font-medium hover:bg-green-300 transition transform hover:scale-105"
          >
            View Projects
          </Link>

          {/* Social Icons */}
          <div className="flex space-x-6 mt-10 z-10 text-2xl">
            {socialLinks.map(({ icon, url }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition transform hover:scale-125"
                aria-label="social link"
              >
                {icon}
              </a>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-6xl mx-auto py-20 px-6 w-full"
        >
          <h2 className="text-3xl font-bold text-green-400 mb-10 text-center">
            Technologies I Use
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
            {skills.map((tech, idx) => (
              <motion.div
                key={tech}
                className="p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition cursor-default"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-lg font-semibold text-white">{tech}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Gallery */}
        <motion.section
          id="projects"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-6xl mx-auto py-20 px-6 w-full"
        >
          <h2 className="text-3xl font-bold text-green-400 mb-10 text-center">
            My Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map(({ title, desc, img }, i) => (
              <motion.div
                key={i}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg cursor-pointer hover:shadow-green-400 transition-transform transform hover:scale-[1.03]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <img
                  src={img}
                  alt={title}
                  loading="lazy"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="text-gray-300 mt-1">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Philosophy Section */}
        <motion.section
          id="philosophy"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="bg-gray-900 py-20 px-6 text-center w-full"
        >
          <h2 className="text-3xl font-bold text-green-400 mb-6">
            My Development Philosophy
          </h2>
          <p className="max-w-3xl mx-auto text-gray-300">
            I believe in writing clean, maintainable, and scalable code. My
            mission is to create digital products that are fast, accessible,
            and intuitive. Whether it&apos;s building frontend interfaces or
            backend logic, I focus on delivering high-quality, user-centered
            solutions.
          </p>
        </motion.section>

        {/* Contact / Call To Action Section */}
        <motion.section
          id="contact"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="py-16 text-center w-full"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            Want to see my work in action?
          </h3>
          <Link
            to="/projects"
            className="inline-block px-8 py-4 bg-green-400 text-black rounded-xl font-medium hover:bg-green-300 transition transform hover:scale-105"
          >
            Browse My Projects
          </Link>
        </motion.section>
      </main>
    </>
  );
};

export default Home;
