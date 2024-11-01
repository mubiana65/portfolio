// src/components/About.tsx
import React from "react";
import { motion } from "framer-motion";
import M from "../m.jpg"; // Replace with your image path

const educationData = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Student : DMI ST-EUGENE UNIVERSITY",
    year: "2021-2025",
  },
  {
    degree: "Interesting in coding",
    institution: "I work with different frameworks to develop user required application",
    year: "----------",
  },

];

export const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center bg-gray-800 p-10 pt-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center text-center md:text-left mb-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-shrink-0 mb-6 md:mb-0 md:mr-6"
        >
          <img
            src={M} // Replace with your image path
            alt="My Picture"
            className="w-48 h-48 rounded-full border-4 border-accent object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-lg text-gray-300">
            I’m a web and mobile developer with expertise in <span className="font-semibold text-accent">React, TypeScript, and Flutter</span>. I also specialize in backend solutions using <span className="font-semibold text-accent">Firebase</span>. Passionate about creating high-quality applications that offer intuitive user experiences.
          </p>
        </motion.div>
      </div>

      {/* Education and Relevant Information Grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-700 p-5 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
            <p className="text-gray-300 mb-1">{edu.institution}</p>
            <p className="text-gray-400">{edu.year}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
