import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        fucsia: "#6C0D7B",
        hoverFucsia: "#841795",
        hoverWhite: "#e9e6e6",
        violet: "#4E2E80",
        rosa: "#EA69FF",
      },
      fontFamily: {
        textPrimary: " Great Vibes, serif",
        textSecondary: " Poppins, serif",
      },
      backgroundImage: {
        portada: "url('/assets/portada.png')",
        textGradient: "linear-gradient(to right, #EDDB1D,#ED1B10, #C119DC)",
      },
    },
  },
  plugins: [],
} satisfies Config;
