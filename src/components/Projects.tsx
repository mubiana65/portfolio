// src/components/Projects.tsx
import React from "react";
import A from '../a.png'
import B from '../b.png'
import C from '../c.png'

export const Projects: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-800 p-10 pt-24">
      <h2 className="text-4xl font-bold mb-6 text-white">My Projects</h2>
      <br/>
      <br/>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "ITREPID WEBAPP",
            description: "itrepid",
            image: A,
            link:'https://itrepid.vercel.app/'
          },
          {
            title: "TECHNOVA INNOVATION",
            description: "technova innovation",
            image: B,
            link:'https://technova-flax.vercel.app/'
          },
          {
            title: "ELEVATECRAFT GENERAL DEALERS",
            description: "mobile app",
            image: C,
          },
        ].map((project, index) => (
          <a href={project.link}><div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-gray-600"><a >{project.description}</a></p>
            </div>
          </div>
          </a>
        ))}
      </div>
    </section>
  );
};
