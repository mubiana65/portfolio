// src/components/Footer.tsx
import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="p-4 bg-background text-center">
      <p>&copy; {new Date().getFullYear()} Your Name. Crafted with 💙 in React.</p>
      <div className="mt-2 flex justify-center space-x-4 text-gray-500">
        {/* Social Links */}
        <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
        <a href="#" className="hover:text-primary transition-colors">GitHub</a>
      </div>
    </footer>
  );
};
