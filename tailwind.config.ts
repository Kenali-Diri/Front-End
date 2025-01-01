import { transform } from 'next/dist/build/swc';
import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        container: {
            padding: '1.5rem',
        },
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                blue: '#435BC0',
                'blue-hovered': '#3C51AB',
                pink: '#F6666F',
                'pink-hovered': '#E85F67',
                'barbie-pink': '#FF9FCD',
                'soft-cream': '#FFF1E3',
                'dark-slate': '#464555',
                'medium-slate': '#AAA9BC',
                'light-slate': '#CECDE1',
            },
            keyframes: {
                shake: {
                    '0%, 100%': {
                        transform: 'translateX(-2px)',
                    },
                    '50%': {
                        transform: 'translateX(2px)',
                    },
                },
                'fade-in': {
                    '0%': {
                        opacity: '0',
                    },
                    '100%': {
                        opacity: '1',
                    },
                },
                'fade-out': {
                    '0%': {
                        opacity: '1',
                    },
                    '100%': {
                        opacity: '0',
                    },
                },
                'loading-progress-bar': {
                    '0%': {
                        width: '0%',
                    },
                    '100%': {
                        width: '100%',
                    },
                },
            },
            animation: {
                shake: 'shake 0.3s ease-in-out 3',
                'fade-in': 'fade-in 0.3s ease-in-out',
                'fade-out': 'fade-out 0.3s ease-in-out',
                'fade-in-out': 'fade-in 0.3s ease-in-out 0s, fade-out 0.2s ease-in-out 2.3s forwards',
                'loading-progress-bar': 'loading-progress-bar 2.5s linear',
            },
        },
    },
    plugins: [],
};
export default config;
