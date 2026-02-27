import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1B3A5C", // Navy Blue
          50: "#f0f5f9",
          100: "#e1eaf3",
          900: "#0f2338",
        },
        secondary: "#F4F7F9", // Light Blue-Gray
        accent: {
          DEFAULT: "#E8751A", // Vibrant Orange
          hover: "#c96211",
          light: "#fff0e5",
        },
        surface: "#FFFFFF",
        text: "#1B3A5C",
        muted: "#555555",
      },
      fontFamily: {
        heading: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 20px rgba(27, 58, 92, 0.08)",
        hover: "0 12px 24px rgba(27, 58, 92, 0.12)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;