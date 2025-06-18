'use client';
import { useRef, useEffect } from "react";
import useInView from "../hooks/useInView";
import { Orbitron } from 'next/font/google';
import { motion } from 'framer-motion';
import Image from 'next/image';

const orbitron = Orbitron({ weight: '900', subsets: ['latin'] });

export default function Future() {
  return (
    <section className="relative w-full flex justify-center items-center py-12 px-4 sm:px-6 bg-hero-gradient3">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/arms.png"
          alt="ARMS"
          fill
          className="object-contain opacity-40 pointer-events-none"
        />
      </div>

      {/* Framed Box with Shine Text */}
      <div className="relative z-10 border-4 border-white rounded-md w-[90vw] max-w-6xl h-[300px] sm:h-[500px] md:h-[600px] bg-transparent">
        {/* GET TICKETS Button */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20">
          <button
            className={`bg-white sm:text-2xl lg:text-4xl font-extrabold  text-[#130080] px-4 py-2 sm:px-6 sm:py-3 rounded hover:scale-105 transition-transform ${orbitron.className}`}
          >
            GET TICKETS!
          </button>
        </div>

        {/* Animated Text */}
        
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className={`absolute bg-shine inset-0 flex flex-col items-center justify-center text-[clamp(28px,8vw,100px)] font-bold text-transparent bg-[linear-gradient(to_right,hsl(0,0%,30%)_0%,hsl(0,0%,100%)_10%,hsl(0,0%,30%)_20%)] bg-clip-text bg-[length:200%_100%] animate-shine ${orbitron.className}`}
>
  {['CONNECTING', 'THE', 'FUTURE'].map((word, i) => (
    <div key={i} className="flex gap-1">
      {word.split('').map((char, j) => (
        <span
          key={j}
          className="animate-wave"
          style={{ animationDelay: `${(i * 0.4 + j * 0.05).toFixed(2)}s` }}
        >
          {char}
        </span>
      ))}
    </div>
  ))}
</motion.div>


      </div>
    </section>
  );
}
