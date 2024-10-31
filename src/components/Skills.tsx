// src/components/Skills.tsx
import React from "react";

export const Skills: React.FC = () => {
  return (
    <section className="container mx-auto p-10 text-center">
      <h2 className="text-4xl font-bold mb-6">My Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { name: "React", percentage: 90 },
          { name: "TypeScript", percentage: 85 },
          { name: "Flutter", percentage: 80 },
          { name: "Firebase", percentage: 75 },
        ].map(skill => (
          <div key={skill.name} className="bg-gray-200 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
            <div className="bg-gray-300 rounded-full h-4">
              <div
                className="bg-blue-500 h-4 rounded-full"
                style={{ width: `${skill.percentage}%` }}
              />
            </div>
            <p className="text-sm text-gray-600">{skill.percentage}%</p>
          </div>
        ))}
      </div>
    </section>
  );
};
