import React from "react";
import Header from "./Header";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center py-20 bg-white">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-4 text-green-800">
            <span className="text-green-700">Lalith Adithya Varma</span> 👋
          </h1>
          <h2 className="text-3xl font-medium mb-6 animate-pulse text-gray-800">
            Welcome to My Portfolio
          </h2>
          <p className="text-lg mb-8 text-gray-700">
            Let's explore me through my projects, certifications here
          </p>
          <button className="bg-green-700 text-white hover:bg-green-900 transition px-6 py-3 rounded-lg text-lg shadow-lg">
            Learn More
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900 text-gray-100 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-xl leading-relaxed">
            I'm <span className="text-green-400 font-semibold">Lalith</span>, a developer who loves blending{' '}
            <span className="text-gray-300">creativity</span> with{' '}
            <span className="text-gray-300">technology</span>. I build apps that are vibrant, functional, and approachable.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 px-4">
        <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {[
            { title: "Poll Web Application", desc: "A Spring Boot-based app for creating and managing polls, with real-time visualization.", bg: "bg-gray-900 text-gray-100" },
            { title: "Bank Management System", desc: "A modern solution for managing bank accounts, transactions, and user data.", bg: "bg-gray-50 text-gray-900" },
            { title: "E-Commerce Platform", desc: "A React and Node.js-based platform for seamless online shopping and user-friendly interfaces.", bg: "bg-gray-50 text-gray-900" },
            { title: "Portfolio Website", desc: "A personal portfolio showcasing projects, skills, and certifications, built with React and Tailwind CSS.", bg: "bg-gray-900 text-gray-100" },
          ].map((proj, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 shadow-lg hover:scale-105 transform transition duration-300 ${proj.bg}`}
            >
              <h3 className="text-2xl font-semibold">{proj.title}</h3>
              <p className="mt-3">{proj.desc}</p>
              <a href="https://example.com" className="inline-block mt-4 text-green-400 hover:text-green-600 underline">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-gray-900 px-4 text-gray-100">
        <h2 className="text-4xl font-bold text-center mb-10">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {[
            { title: "Python for Data Science", desc: "Issued by Udemy / IBM", bg: "bg-gray-50 text-gray-800", },
            { title: "React Development", desc: "Issued by Udemy / IBM", bg: "bg-gray-50 text-gray-800" },
            { title: "Advanced React", desc: "Issued by Udemy / IBM", bg: "bg-gray-900 text-gray-100",border: "border border-white" },
            { title: "Full Stack Web Dev", desc: "Issued by Udemy / IBM", bg: "bg-gray-900 text-gray-100",border: "border border-white" },
          ].map((cert, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 shadow-lg hover:scale-105 transform transition duration-300 ${cert.bg} ${cert.border || ""}`}
            >
              <h3 className="text-xl font-semibold">{cert.title}</h3>
              <p className="mt-2">{cert.desc}</p>
              <a href="https://example.com" className="inline-block mt-4 text-green-400 hover:text-green-600 underline">
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-10 bg-gray-50 px-4 text-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-lg">
          Email:{' '}
          <a href="mailto:ravi@example.com" className="underline hover:text-green-600">
            ravi@example.com
          </a>
        </p>
        <p className="mt-2">
          Connect on{' '}
          <a href="https://linkedin.com/in/ravi" className="underline hover:text-green-600">
            LinkedIn
          </a>
        </p>
      </section>
    </div>
  );
};

export default App;


