// import type { Config } from 'tailwindcss'

// const config: Config = {
//   content: [
//     './src/**/*.{js,ts,jsx,tsx}',
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ['var(--font-geist-sans)'],
//         mono: ['var(--font-geist-mono)'],
//         audiowide: ['var(--font-audiowide)', 'cursive'],
//         bebas: ['var(--font-bebas)', 'sans-serif'],
//       },
//     },
//   },
//   plugins: [],
// }
// export default config
// tailwind.config.ts
import { type Config } from "tailwindcss";
module.exports = {
  theme: {
    extend: {
      animation: {
        nucleusMove: "nucleusMotion 4s infinite linear",
      },
      keyframes: {
        nucleusMotion: {
          "0%": { backgroundPosition: "center" },
          "25%": { backgroundPosition: "55% 45%" },
          "50%": { backgroundPosition: "center" },
          "75%": { backgroundPosition: "45% 55%" },
          "100%": { backgroundPosition: "center" },
        },
      },
    },
  },
};
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-geist-sans)",
        mono: "var(--font-geist-mono)",
        audiowide: "var(--font-audiowide)",
        bebas: "var(--font-bebas)",
      },
      backgroundImage: {
        'radial-gradient': 'var(--background-gradient)',
      }
    },
  },
  plugins: [],
};
export default config;
