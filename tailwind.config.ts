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
        primary: "#BB9AF7",
        secondary: "#98F6E4",
      },
      keyframes: {
        videoFadeInPlaceholder: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        videoFadeInPip: {
          from: {
            opacity: "0",
            transform: "translateX(100px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        videoFadeInPlaceholder: "videoFadeInPlaceholder 300ms ease-in-out",
        videoFadeInPip: "videoFadeInPip 300ms ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
