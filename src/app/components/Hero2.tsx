'use client';

import { motion } from 'framer-motion';
import { Audiowide, VT323, Bebas_Neue, IBM_Plex_Mono } from 'next/font/google';
//import Image from 'next/image';
const ibmPlexMono = IBM_Plex_Mono({ weight: '600', subsets: ['latin'] });
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
      <div className="w-full max-w-[200vw] overflow-hidden flex flex-col gap-2 mb-1 z-20">
        {/* Top banner */}
        <div className="relative overflow-x-hidden">
          <motion.div
            animate={{ x: ['-100%', '0%'] }}
            transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
            className="bg-white/10 py-2 w-[200%]"
          >
            <div className={`whitespace-nowrap text-sm sm:text-base sm:overflo font-bold text-white ${ibmPlexMono.className}`}>
              national level robotics event • national level robotics event • national level robotics event • national level robotics event {' '.repeat(70)}
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
      
{/* <motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="mt-1 sm:mt-6 flex justify-center"
>
  <Image
    src="/images/prime-logo.png" // change path as needed
    alt="PRIM.E Logo"
    width={500}
    height={500}
    priority
    // className="w-[80px] sm:w-[100px] md:w-[140px] lg:w-[160px] h-auto object-contain"
    // className="w-[120px] sm:w-[180px] md:w-[220px] lg:w-[280px] xl:w-[320px] h-auto object-contain"
        // className="w-[140px] sm:w-[200px] md:w-[260px] lg:w-[320px] xl:w-[380px] h-auto object-contain"
        className="w-[160px] sm:w-[220px] md:w-[280px] lg:w-[340px] xl:w-[400px] h-auto object-contain"

  />
</motion.div> */}

      <motion.div
  initial={{ opacity: 0, y: 10,scale:0.5 }}
  whileInView={{ opacity: 1, y: 0 ,scale:1.2}}
  transition={{ duration: 1, delay: 0.6 }}
  className={`mt-1 text-2xl sm:text-3xl md:text-3xl tracking-wider text-white font-extrabold ${ibmPlexMono.className}`}
>
  BY IEEE RAS SB GECT
</motion.div>

      {/* Date Box */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        /*className="mt-6 border-2 border-white w-[90vw] sm:w-4/5 md:w-1/2 max-w-3xl h-20 sm:h-24 flex items-center justify-center"*/
        className="mt-6 border-2 border-white w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] max-w-xl h-20 sm:h-24 flex items-center justify-center"

      >
        <div className={`flex space-x-2 text-[36px] sm:text-[48px] md:text-[60px] ${vt323.className}`}>
          {['19', '&', '20', 'JULY', '2025'].map((val, i) => (
            <span
              key={i}
              className="opacity-90 animate-zoomInWord"
              style={{ animationDelay: `${0.8 + i * 0.8}s` }}
            >
              {val}
            </span>
          ))}
        </div>
      </motion.div>

      {/* College Name */}
      <motion.div
        initial={{ opacity: 0, y: 20 ,scale:0}}
        animate={{ opacity: 1, y: 0,scale:1}}
       whileInView={{ opacity: 1, y: 0,scale:1}}
        //viewport={{ once: true, amount: 0.3}} 
        transition={{ duration: 1, delay: 0.6 }}
        className={`mt-6 text-3xl sm:text-3xl md:text-3xl lg:text-4xl uppercase font-bold ${bebas.className}`}
      >
        GOVERNMENT ENGINEERING COLLEGE, THRISSUR
      </motion.div>
    </section>
  );
}
