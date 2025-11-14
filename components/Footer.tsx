import React from "react";
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

interface FooterLink {
  name: string;
  href: string;
}

const footerLinks: FooterLink[] = [
  { name: "Home", href: "/" },
  { name: "About Me", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Publications", href: "/publications" },
  { name: "Contact", href: "/contact" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Pranjal Panging<span className="text-blue-600">.</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-xs">
            Enthusiastic about coding, mathematics, and discovering new
            ideas. Welcome to my little corner of the web.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-gray-800 dark:text-gray-200 font-semibold mb-2">
            Explore
          </h2>
          <ul className="space-y-1">
            {footerLinks.map((link: FooterLink) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h2 className="text-gray-800 dark:text-gray-200 font-semibold mb-2">
            Connect
          </h2>
          <div className="flex space-x-4">
            <a
              href="https://github.com/PranjalPanging"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/pranjalpanging"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-700 transition-colors duration-200"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://instagram.com/pangnosis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-pink-500 transition-colors duration-200"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 dark:text-gray-400 text-sm py-4 border-t border-gray-200 dark:border-gray-700">
        &copy; {new Date().getFullYear()} Pranjal Panging. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
