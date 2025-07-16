import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 text-center space-y-4">
        <p className="text-sm">© {new Date().getFullYear()} Samuel Adeoye. All rights reserved.</p>
        <div className="flex justify-center gap-6">
          <Link to="/" className="hover:text-green-400 transition">Home</Link>
          <Link to="/about" className="hover:text-green-400 transition">About</Link>
          <Link to="/projects" className="hover:text-green-400 transition">Projects</Link>
          <Link to="/contact" className="hover:text-green-400 transition">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
