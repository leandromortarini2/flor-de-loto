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
        fucsiaClaro: "#EA69FF",
        fucsia: "#6C0D7B",
        hoverFucsia: "#841795",
        hoverWhite: "#e9e6e6",
        violet: "#4E2E80",
        violetOscuro: "#2C2343",
        rosa: "#EA69FF",
      },
      fontFamily: {
        textPrimary: " Great Vibes, serif",
        textSecondary: " Poppins, serif",
      },
      backgroundImage: {
        bgHero: "url('/assets/bghero.jpeg')",
        portadaMovile: "url('/assets/portada.png')",
        textGradient: "linear-gradient(to right, #EDDB1D,#ED1B10, #C119DC)",
        bgAbout: "url('/assets/bg-about.png')",
        bgFooterMb: "url('/assets/bgFooterMB.png')",
        bgFooter: "url('/assets/bgFooter.png')",
        bgProducts: "url('/assets/bgProducts.png')",
        bgHeroMovile: "url('/assets/bgheromovile2.jpeg')",
      },
      screens: {
        xs: "320px",
      },
    },
  },
  plugins: [],
} satisfies Config;
