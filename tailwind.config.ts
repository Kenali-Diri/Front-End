import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: '1.5rem'
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'blue': '#435BC0',
        'pink': '#F6666F',
        'barbie-pink': '#FF9FCD',
        'soft-cream': '#FFF1E3',
        'dark-slate': '#464555',
        'medium-slate': '#AAA9BC',
        'light-slate': '#CECDE1'
      },
    },
  },
  plugins: [],
};
export default config;
