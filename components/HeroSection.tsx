"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full bg-linear-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute w-72 h-72 bg-purple-500 rounded-full opacity-30 animate-ping -top-16 -left-16"></div>
        <div className="absolute w-72 h-72 bg-pink-500 rounded-full opacity-20 animate-pulse bottom-0 right-0"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Hi, I&apos;m Pranjal Panging
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Enthusiastic about coding, mathematics, and discovering new ideas. I
          love building web apps that make an impact.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <a
            href="#about"
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-400 transition-colors duration-200"
          >
            Contact Me
          </a>
        </div>

        <div className="flex gap-6 justify-center mt-4 text-2xl">
          <a
            href="https://github.com/PranjalPanging"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/pranjalpanging"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/pangnosis"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
}
