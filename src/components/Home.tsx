// src/components/Hero.tsx
import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from '../p.jpg'; // Replace with your actual image path
import { motion } from "framer-motion";
import M from '../m.jpg'; 

export const Home: React.FC = () => {
    return (
        <section
            className="relative h-screen flex flex-col items-center justify-center text-white text-center p-4 bg-cover bg-center"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
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
            <div className="absolute inset-0 bg-black opacity-50" />
            <div className="relative z-10">
                <h2 className="text-5xl md:text-6xl font-bold mb-4">MUBIANA GIFT</h2>
                <p className="text-xl md:text-2xl mb-6">I'm a passionate web and mobile developer crafting beautiful and functional applications to suit users specification.</p>
                <Link to="/contact" className="bg-white text-blue-500 font-semibold py-2 px-6 rounded-md hover:bg-gray-200 transition duration-300">
                    Get in Touch
                </Link>
            </div>
        </section>
    );
};
