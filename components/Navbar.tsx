"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface NavLink {
  name: string;
  href?: string;
  route: string;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const navLinks: NavLink[] = [
    { name: "Home", route: "/" },
    { name: "About", href: "about", route: "/about" },
    { name: "Blog", href: "blog", route: "/blog" },
    { name: "Publications", href: "publications", route: "/publications" },
    { name: "Contact", href: "contact", route: "/contact" },
  ];

  const handleClick = (link: NavLink) => {
    const isMobile = window.innerWidth < 768;

    if (isMobile || !link.href) {
      router.push(link.route);
    } else {
      const section = document.getElementById(link.href);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(link.route);
      }
    }

    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/70 dark:bg-gray-900/70 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-semibold text-gray-900 dark:text-white"
        >
          Pranjal Panging<span className="text-blue-600">.</span>
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 dark:text-gray-300">
          {navLinks.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => handleClick(link)}
                className="hover:text-blue-600 transition-colors duration-200"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col space-y-1 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 bg-gray-800 dark:bg-gray-200 transition-transform ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-gray-800 dark:bg-gray-200 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-gray-800 dark:bg-gray-200 transition-transform ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <ul className="flex flex-col items-center py-4 space-y-4 text-gray-800 dark:text-gray-200">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => handleClick(link)}
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
