// tailwind.config.js

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        'h1': {
          css: {
            fontFamily: 'Poppins',
            fontWeight: '600',
            fontSize: '16px',
            lineHeight: '24px',
          },
        },
      }),
    
      colors: {
        theme: '#6911D5',
        light: '#705AE2'
        // Add more custom colors as needed
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
};
