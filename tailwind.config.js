/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFCC00",
        "on-primary": "#000000",
        background: "#0A0A0A",
        surface: "#131313",
        "surface-variant": "#1C1B1B",
        outline: "#3a3939",
        "outline-variant": "#2a2929",
        "on-surface": "#FFFFFF",
        "on-surface-variant": "#A0A0A0",
        secondary: "#A0A0A0",
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      spacing: {
        "stack-md": "16px",
        "margin-desktop": "40px",
        unit: "8px",
        "stack-sm": "8px",
        "margin-mobile": "16px",
        "container-max": "1200px",
        "stack-lg": "32px",
        gutter: "24px",
      },
      fontFamily: {
        "body-lg": ["Inter", "sans-serif"],
        "label-md": ["Sora", "sans-serif"],
        "label-sm": ["Sora", "sans-serif"],
        display: ["Sora", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "headline-lg": ["Sora", "sans-serif"],
        "headline-md": ["Sora", "sans-serif"],
        "display-mobile": ["Sora", "sans-serif"],
      },
    },
  },
  plugins: [],
}
