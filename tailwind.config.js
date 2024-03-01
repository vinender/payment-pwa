// tailwind.config.js

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        theme: '#720EF6',
        light: '#BA99E5'
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
};
