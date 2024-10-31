// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5", // Indigo for main accent color
        secondary: "#6366f1",
        background: "#1a1a2e",
        accent: "#f9a826",
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to right, #4f46e5, #6366f1)',
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
