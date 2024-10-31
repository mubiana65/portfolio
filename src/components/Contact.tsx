// src/components/Contact.tsx
import React from "react";

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-gray-800 p-10 pt-24">
      <h2 className="text-4xl font-bold mb-6 text-white">Get in Touch</h2>
      <p className="text-lg mb-4 text-white">I would love to hear from you! Please fill out the form below.</p>
      
      {/* Contact Form */}
      <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold mb-1">Name</label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold mb-1">Email</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-semibold mb-1">Message</label>
          <textarea
            id="message"
            className="w-full p-2 border border-gray-300 rounded-md"
            rows={4}
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-300">
          Send Message
        </button>
      </form>

      {/* Social Media Links */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2 text-white">Follow Me</h3>
        <div className="flex justify-center space-x-4">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition duration-300">
            LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 transition duration-300">
            GitHub
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition duration-300">
            Twitter
          </a>
        </div>
      </div>
    </section>
  );
};
