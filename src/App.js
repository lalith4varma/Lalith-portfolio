import React from "react";
import Header from "./Header";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Importing LinkedIn and GitHub icons

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
            Let's explore me through my projects and certifications here !
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
            <span className="text-gray-300">technology</span>. I love building apps that are vibrant, functional, and approachable.
            I've completed my master's degree in computer Applications (MCA).I am looking forward for an opportunity where i could apply my skills in the real world projects !
          </p>
        </div>
      </section>

      <section id="projects" className="py-20 bg-gray-50 px-4">
  <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
    {[
      {
        title: "NeoBank",
        desc: "A secure and user-friendly web banking platform developed using Spring Boot, MySQL, and Spring Security, enabling features like account balance viewing, transaction history, and fund transfers",
        bg: "bg-gray-900 text-gray-100",
        url: "https://github.com/lalith4varma/NeoBank",  
      },
      {
        title: "Steganography",
        desc: "A Python Based project to securely encrypt and decrypt data within digital media, enhancing data confidentiality and integrity",
        bg: "bg-gray-50 text-gray-900",
        url: "https://github.com/lalith4varma/PROJECT--STEGANOGRAPHY", 
       },
      {
        title: "Complaint Management System",
        desc: "A web application developed using Java Server Pages (JSP) that enables users to submit complaints and receive corresponding solutions to their queries",
        bg: "bg-gray-50 text-gray-900",
        url: "https://github.com/lalith4varma/Complaint-Management-System",  
      },
      {
        title: "Online Social Network",
        desc: "An e-commerce web application developed using JSP, HTML, CSS, and SQL to manage product listings, users, data updates while providing a responsive user experience",
        bg: "bg-gray-900 text-gray-100",
        url: "https://github.com/lalith4varma/Online-Social-network",  
      },
    ].map((proj, index) => (
      <div key={index} className={`rounded-xl p-6 shadow-lg hover:scale-105 transform transition duration-300 ${proj.bg}`}>
        <h3 className="text-2xl font-semibold">{proj.title}</h3>
        <p className="mt-3">{proj.desc}</p>
        <a
          href={proj.url}  // Using the `url` property here to link to my project
          className="inline-block mt-4 text-green-400 hover:text-green-600 underline"
          target="_blank"  // Open the project link in a new tab
          rel="noopener noreferrer"  // Security for external links
        >
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
      {
        title: "Python for Data Science",
        desc: "Issued by Cognitive Class",
        bg: "bg-gray-50 text-gray-800",
        url: "https://courses.cognitiveclass.ai/certificates/8c10b9c089c349dfb26ccb63b64c20d6",
      },
      {
        title: "Introduction To Tableau",
        desc: "Issued by Simplilearn",
        bg: "bg-gray-50 text-gray-800",
        url: "https://www.linkedin.com/posts/lalith-adithya-varma-g-28337b1a5_im-excited-to-have-earned-the-introduction-activity-7321244555851325442-y9R3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC_uNsMBtZ17i4w_ldB0Unh1wEKRtwB922U", 
      },
      {
        title: "Cybersecurity Fundamentals",
        desc: "Issued by IBM SkillsBuild",
        bg: "bg-gray-900 text-gray-100",
        border: "border border-white",
        url: "https://www.credly.com/badges/8af4edda-f3c2-485e-9f34-c3db399d3c35/linked_in_profile", 
      },
      {
        title: "Data Analytics and Visualization Job Simulation",
        desc: "Issued by Forage",
        bg: "bg-gray-900 text-gray-100",
        border: "border border-white",
        url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_r6FCB2SsphDMLMRMS_1715287376831_completion_certificate.pdf", // Replace with actual certificate URL from Udemy
      },
    ].map((cert, index) => (
      <div key={index} className={`rounded-xl p-6 shadow-lg hover:scale-105 transform transition duration-300 ${cert.bg} ${cert.border || ""}`}>
        <h3 className="text-xl font-semibold">{cert.title}</h3>
        <p className="mt-2">{cert.desc}</p>
        <a
          href={cert.url}  // Use the URL property here to link the certificate
          className="inline-block mt-4 text-green-400 hover:text-green-600 underline"
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer" // Adds security to external links
        >
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
          <a href="mailto:lalithgadiraju@gmail.com" className="underline hover:text-green-600">
            lalithgadiraju@gmail.com
          </a>
        </p>
        <p className="mt-4 flex justify-center gap-6">
          {/* LinkedIn Link with Icon */}
          <a
            href="https://www.linkedin.com/in/lalith-adithya-varma-g-28337b1a5/"
            className="inline-flex items-center gap-2 text-lg hover:text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} /> LinkedIn
          </a>
          
          {/* GitHub Link with Icon */}
          <a
            href="https://github.com/lalith4varma"
            className="inline-flex items-center gap-2 text-lg hover:text-gray-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} /> GitHub
          </a>
        </p>
      </section>
    </div>
  );
};

export default App;
