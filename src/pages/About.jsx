import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-black text-white min-h-screen px-6 py-20">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-green-400 text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h1>

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Biography */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold text-green-400">Who I Am</h2>
          <p className="text-gray-300 leading-relaxed">
            I'm Samuel Adeoye, a passionate Fullstack Developer from Nigeria who loves solving problems and building beautiful, scalable web applications. I specialize in working with React on the frontend and Node.js with Express on the backend, with MongoDB as my go-to database.
          </p>
          <p className="text-gray-400">
            My journey started with curiosity, and it quickly turned into a mission to create digital experiences that are functional, fast, and user-friendly. From UI design to backend logic, I enjoy writing clean, readable code that gets the job done.
          </p>
        </motion.div>

        {/* Timeline / Experience */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold text-green-400">My Journey</h2>
          <ul className="space-y-2 text-gray-300">
            <li>🚀 Started learning HTML, CSS, and JavaScript</li>
            <li>⚛️ Moved into React and frontend frameworks</li>
            <li>🛠️ Learned backend development with Node.js and Express</li>
            <li>🗃️ Started building fullstack apps using MongoDB</li>
            <li>💼 Built several projects and collaborated with teams</li>
            <li>🔥 Always learning and improving daily</li>
          </ul>
        </motion.div>

        {/* Skills Recap */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-green-400">Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["React", "Tailwind CSS", "JavaScript", "Node.js", "Express", "MongoDB", "C#", "Python", "Java", "C++"].map((tech) => (
              <div
                key={tech}
                className="bg-gray-800 hover:bg-gray-700 transition px-4 py-3 rounded-xl text-center text-white font-medium"
              >
                {tech}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-green-400">Fun Facts</h2>
          <ul className="list-disc pl-6 text-gray-400">
            <li>I love music and coding at night 🌓</li>
            <li>I learn fast and enjoy working in teams 🤝</li>
            <li>I enjoy working on projects that help people 🧠</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
