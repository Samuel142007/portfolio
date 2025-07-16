import { useState } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-900 p-4 shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-green-400 text-2xl font-bold">Samuel Adeoye</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <motion.div
              key={link.path}
              whileHover={{ scale: 1.1 }}
              className={`text-sm font-medium transition duration-200 ${
                location.pathname === link.path
                  ? "text-green-400"
                  : "text-white hover:text-green-400"
              }`}
            >
              <Link to={link.path}>{link.name}</Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="text-white w-6 h-6" /> : <Menu className="text-white w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-gray-800 px-6 pt-4 pb-6 space-y-4"
            variants={stagger}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {navLinks.map((link) => (
              <motion.div
                key={link.path}
                variants={itemVariants}
                onClick={() => setMenuOpen(false)}
                className={`block text-base font-medium ${
                  location.pathname === link.path
                    ? "text-green-400"
                    : "text-white hover:text-green-400"
                }`}
              >
                <Link to={link.path}>{link.name}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
