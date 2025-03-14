import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "custom-gray": "rgba(185, 185, 185, 0.3)",
      },
      fontFamily: {
        ibmPlexMono: "var(--font-ibm-plex-mono)",
        inter: "var(--font-inter)",
      },
    },
  },
  plugins: [],
} satisfies Config;
