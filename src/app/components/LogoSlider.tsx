/*'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const logos = [
  '/logos/logo1.png',
  '/logos/logo2.png',
//   '/logos/logo3.png',
//   '/logos/logo4.png',
  // Add more paths as needed
];

export default function LogoSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % logos.length);
    }, 3000); // change every 3 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center py-16 overflow-hidden relative bg-black">
      <div className="w-[200px] h-[100px] relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 flex justify-center items-center"
          >
            <Image
              src={logos[index]}
              alt={`Logo ${index + 1}`}
              width={160}
              height={80}
              className="object-contain max-h-[80px]"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
*/
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({ subsets: ['latin'], weight: '600' });

const logos = [
  '/logos/logo1.png',
  '/logos/logo2.png',
  '/logos/logo3.png',
  '/logos/logo4.png',
  // Add more logo paths
];

export default function LogoSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % logos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black text-white py-20 px-4 text-center">
      {/* Heading */}
      <h2 className={`text-4xl sm:text-5xl font-bold mb-12 ${orbitron.className}`}>
        Logos
      </h2>

      {/* Logo Frame */}
      {/* <div className="mx-auto min-w-[200px] min-h-[140px] w-[80vw] max-w-[400px] h-[200px] border-2 border-white rounded-xl flex items-center justify-center relative overflow-hidden"> */}
      <div className="mx-auto w-[80vw] max-w-[350px] min-h-[120px] h-[220px] border-2 border-white rounded-xl flex items-center justify-center relative overflow-hidden">

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex justify-center items-center"
          >
            <Image
              src={logos[index]}
              alt={`Logo ${index + 1}`}
              width={160}
              height={80}
              className="object-contain max-h-[180px]"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
