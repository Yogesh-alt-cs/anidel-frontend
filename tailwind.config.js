/** @type {import('tailwindcss').Config} */

const colors = {
  primary: "var(--primary)",
  "primary-hover": "var(--primary-hover)",
  secondary: "var(--secondary)",
  "secondary-hover": "var(--secondary-hover)",
  accent: "var(--accent)",
  background: "var(--background)",
  surface: "var(--surface)",
  card: "var(--card)",
  hover: "var(--hover)",
  text: {
    primary: "var(--text-primary)",
    secondary: "var(--text-secondary)",
    muted: "var(--text-muted)",
  },
};
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: colors,
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'neon-glow': 'linear-gradient(135deg, rgba(168, 85, 247, 0.4) 0%, rgba(6, 182, 212, 0.4) 100%)',
      },
      dropShadow: {
        glow: "0 0 10px rgba(255, 107, 0, 0.5)",
      },
      boxShadow: {
        glow: "var(--glow-primary)",
        modern: "var(--shadow-modern)",
        "modern-lg": "var(--shadow-modern-hover)",
        neon: "0 0 20px rgba(168, 85, 247, 0.5), 0 0 40px rgba(6, 182, 212, 0.3)",
        "neon-sm": "0 0 10px rgba(168, 85, 247, 0.4), 0 0 20px rgba(6, 182, 212, 0.2)",
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        shimmer: 'shimmer 2s infinite',
      },
    },
  },
  plugins: [],
};
