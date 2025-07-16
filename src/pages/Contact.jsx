import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-black text-white min-h-screen px-6 py-20 flex flex-col items-center">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-green-400 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Contact Me
      </motion.h1>

      {submitted ? (
        <motion.div
          className="bg-green-600 rounded-lg p-6 text-center max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p>Thanks for reaching out! I&apos;ll get back to you soon.</p>
          <button
            className="mt-4 px-6 py-2 bg-green-400 text-black rounded-lg font-semibold hover:bg-green-300 transition"
            onClick={() => setSubmitted(false)}
          >
            Send Another Message
          </button>
        </motion.div>
      ) : (
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-xl w-full space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <label className="block">
            <span className="text-green-400 font-semibold mb-1 block">Name</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              placeholder="Your name"
            />
          </label>

          <label className="block">
            <span className="text-green-400 font-semibold mb-1 block">Email</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              placeholder="Your email"
            />
          </label>

          <label className="block">
            <span className="text-green-400 font-semibold mb-1 block">Message</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              placeholder="Write your message here..."
            />
          </label>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-green-400 text-black rounded-lg font-semibold hover:bg-green-300 transition"
          >
            Send Message
          </motion.button>
        </motion.form>
      )}
    </section>
  );
};

export default Contact;
