/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          900: "#10382c",
          800: "#195342",
          700: "#226a55",
          600: "#34816a",
          500: "#449c81",
          300: "#a3d4c5",
          100: "#e5f3ee",
          50: "#f0f8f5",
        },
        plum: {
          950: "#120516",
          900: "#1C0920",
          800: "#321639",
          700: "#483949",
          600: "#635064",
          300: "#bc9ebd",
          100: "#f3eaf4",
          50: "#faf5fa",
        },
        cream: {
          50: "#fcfbf9",
          100: "#f7f5f2",
          200: "#ede9e2",
          300: "#dfd8cd",
        },
        ink: {
          DEFAULT: "#2b2025",
          muted: "#666666",
          faint: "#999999",
          light: "#d1cdd0",
        }
      },
      fontFamily: {
        serif: ["sovba", "sans-serif"],
        sovba: ["sovba", "sans-serif"],
        mono: ["'DM Mono'", "monospace"],
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(25, 83, 66, 0.08)',
        'elevated': '0 10px 30px -4px rgba(28, 9, 32, 0.12)',
        'art': '0 20px 40px -15px rgba(25, 83, 66, 0.2)',
      },
    },
  },
  plugins: [],
}

