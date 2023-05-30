module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: "class",
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
        dark: '#1e293b',
      },
      backgroundImage: {
        site: "url('./assets/site-bg.jpg')",
        site2: "url('./assets/site-bg1.jpg')",
        about: "url('./assets/about.png')",
        services: "url('./assets/services.png')",
      },
    },
  },
  plugins: [],
};
