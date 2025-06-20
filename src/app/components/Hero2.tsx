'use client';

import { motion } from 'framer-motion';
import { Audiowide, VT323, Bebas_Neue, IBM_Plex_Mono } from 'next/font/google';

const ibmPlexMono = IBM_Plex_Mono({ weight: '400', subsets: ['latin'] });
const audiowide = Audiowide({ weight: '400', subsets: ['latin'] });
const vt323 = VT323({ weight: '400', subsets: ['latin'] });
const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'] });

export default function Hero2() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-20 bg-hero-gradientf text-white"
    >
      {/* Moving banners */}
      <div className="w-full max-w-[200vw] overflow-hidden flex flex-col gap-2 mb-6 z-20">
        {/* Top banner */}
        <div className="relative overflow-x-hidden">
          <motion.div
            animate={{ x: ['-100%', '0%'] }}
            transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
            className="bg-white/10 py-2 w-[200%]"
          >
            <div className={`whitespace-nowrap text-sm sm:text-base font-bold text-white ${ibmPlexMono.className}`}>
              national level robotics event • national level robotics event • national level robotics event • national level robotics event • national level robotics event • national level robotics event • {' '.repeat(70)}
            </div>
          </motion.div>
        </div>

        {/* Bottom banner */}
        <motion.div
          animate={{ x: ['0%', '-100%'] }}
          transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
          className="bg-white/10 py-2 w-[200%]"
        >
          <div className={`whitespace-nowrap text-sm sm:text-base font-medium text-white ${ibmPlexMono.className}`}>
            prim.e • prim.e • prim.e • prim.e • prim.e • prim.e • prim.e • prim.e • prim.e • {' '.repeat(70)}
          </div>
        </motion.div>
      </div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1.05 }}
        transition={{ duration: 1 }}
        className={`text-[clamp(72px,20vw,240px)] font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent ${audiowide.className}`}
      >
        PRIM.E
      </motion.h1>

      {/* Date Box */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-6 border-2 border-white w-[90vw] sm:w-4/5 md:w-1/2 max-w-3xl h-20 sm:h-24 flex items-center justify-center"
      >
        <div className={`flex space-x-2 text-[36px] sm:text-[48px] md:text-[60px] ${vt323.className}`}>
          {['12', '&', '13', 'AUG', '2025'].map((val, i) => (
            <span
              key={i}
              className="opacity-90 animate-zoomInWord"
              style={{ animationDelay: `${0.8 + i * 0.3}s` }}
            >
              {val}
            </span>
          ))}
        </div>
      </motion.div>

      {/* College Name */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className={`mt-6 text-xl sm:text-2xl md:text-2xl lg:text-3xl uppercase ${bebas.className}`}
      >
        GOVERNMENT ENGINEERING COLLEGE, THRISSUR
      </motion.div>
    </section>
  );
}
