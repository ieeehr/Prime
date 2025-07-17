'use client';

import { useEffect, useState } from 'react';
import { Orbitron, Audiowide } from 'next/font/google';
import { motion } from 'framer-motion';

const orbitron = Orbitron({ subsets: ['latin'], weight: '800' });
const orbitron1 = Orbitron({ subsets: ['latin'], weight: '400' });

const audiowide = Audiowide({ subsets: ['latin'], weight: '400' });

// const targetDate = new Date('2025-08-12T00:00:00');
const targetDate = new Date('2025-07-19T09:00:00');

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference < 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    // <section className="text-center py-16 px-4  bg-black text-white">
    <motion.section
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  //viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.9 }}
  className="text-center py-16 px-4 bg-cont-gradient text-white"
>
      <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 ${orbitron.className}`}>
        Event Countdown
      </h1>
      <p className={`text-lg sm:text-xl md:text-2xl mb-10 text-[#9bccb6] ${audiowide.className}`}>
        Join us on 19 July 2025
      </p>

      <div className={`flex justify-center flex-wrap gap-10 ${orbitron1.className}`}>
        {[
          { label: 'Days', value: timeLeft.days },
          { label: 'Hours', value: timeLeft.hours },
          { label: 'Minutes', value: timeLeft.minutes },
          { label: 'Seconds', value: timeLeft.seconds },
        ].map((unit, i) => (
          <div
            key={i}
            className="min-w-[100px] sm:min-w-[120px] px-4 py-6 bg-[#9bccb633] border border-[#9bccb6] rounded-2xl transition-transform duration-300 hover:scale-110"
          >
            {/* <span className="block text-3xl sm:text-4xl md:text-5xl font-light">{unit.value}</span> */}
            <motion.span
  key={unit.value} // re-animates on value change
  initial={{ opacity: 0.6, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.3 }}
  className="block text-3xl sm:text-4xl md:text-5xl font-light"
>
  {unit.value}
</motion.span>

            <small className="text-sm font-bold sm:text-base text-[#e0e1dd]">{unit.label}</small>
          </div>
        ))}
      </div>
      </motion.section>
    
  );
}
{/* </section> */}