import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 text-gray-50 py-4 px-4">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-2xl font-bold">
          <a href="#hh" className="hover:text-green-400">
            My Portfolio
          </a>
        </div>
        <ul className="flex space-x-6 text-lg">
          <li>
            <a href="#about" className="hover:text-green-400">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-green-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#certifications" className="hover:text-green-400">
              Certifications
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-green-400">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
