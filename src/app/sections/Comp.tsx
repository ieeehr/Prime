'use client';
import '../styles/caro.css';
import { useRef, useState, useEffect } from 'react';
import { motion, useAnimationFrame, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { IBM_Plex_Mono, Audiowide } from 'next/font/google';
//import { audio } from 'framer-motion/client';
const ibmPlexMono = IBM_Plex_Mono({ weight: '400', subsets: ['latin'] });
const audiowide = Audiowide({ weight: '400', subsets: ['latin'] });
const events = [
  {
    title: 'LINE FOLLOWER ',
    subtitle: 'Robotics Navigation Challenge',
    image: '/events/Robo.jpeg',
  },
  {
    title: 'TREASURE HUNT',
    subtitle: 'Clue-Based Adventure Quest',
    image: '/events/Treasure.jpeg',
  },
  {
    title: 'IDEATHON',
    subtitle: ' Collaborative Innovation Sprint',
    image: '/events/Idea.jpeg',
  },
  {
    title: 'TECH EXPO',
    subtitle: 'Interactive Tech Showcase',
    image: '/events/expo.jpeg',
  },
  
  {
    title: 'LAZER MAZE',
    subtitle: 'Agility and Reflex Game',
    image: '/events/laser.jpeg',
  },
];

export default function EventsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const direction = useRef(1);

  const [index, setIndex] = useState(0);

  // Auto-rotate for small screens
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % events.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Scroll animation for large screens
  useAnimationFrame((_, delta) => {
    if (paused || !containerRef.current) return;
    const container = containerRef.current;
    container.scrollLeft += direction.current * (delta * 0.1);
    const maxScroll = container.scrollWidth - container.clientWidth;
    if (container.scrollLeft <= 0) direction.current = 1;
    else if (container.scrollLeft >= maxScroll) direction.current = -1;
  });

  return (
    <section id="competitions & informals" className="relative py-16 bg-[#0F074A] text-white">
        <div className="relative top-0 z-10 w-full space-y-2 mb-16">
  {/* First Banner - Left Scroll */}
  <div className="overflow-hidden w-full bg-white/10">
    <motion.div
      animate={{ x: ['0%', '-100%'] }}
      transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
      className="flex whitespace-nowrap"
    >
      <div className={`flex items-center min-w-fit text-md sm:text-base font-large ${ibmPlexMono.className}`}>
        {[...Array(2)].map((_, i) => (
          <span key={i} className="mr-12">
            inspire • innovate • interact • inspire • innovate • interact •inspire • innovate • interact • inspire • innovate • interact •


          </span>
        ))}
      </div>
    </motion.div>
  </div>

  {/* Second Banner - Right Scroll */}
  <div className="overflow-hidden w-full bg-white/10">
    <motion.div
      animate={{ x: ['-100%', '0%'] }}
      transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
      className="flex whitespace-nowrap"
    >
      <div className={`flex items-center min-w-fit text-md sm:text-base font-large ${ibmPlexMono.className}`}>
        {[...Array(2)].map((_, i) => (
          <span key={i} className="mr-12">
            prim.e • visionaries • breakthroughs • prim.e • visionaries • breakthroughs •
          </span>
        ))}
      </div>
    </motion.div>
  </div>
</div>
      <motion.h2
      initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }} className={`text-4xl sm:text-5xl font-bold text-center mb-8 ${audiowide.className}`}>Competition & Informals</motion.h2>
    {/* Moving banners for EVENTS section */}
{/* <div className="relative top-0 left-0 right-0 z-0">
  
  <motion.div
    animate={{ x: ['-100%', '0%'] }}
    transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
    className="bg-white/10 py-2 w-[200%] transform -rotate-0"
  >
    <div className="whitespace-nowrap text-sm sm:text-base font-semibold text-white">
      EVENTS • EVENTS • EVENTS • EVENTS • EVENTS • EVENTS • EVENTS • EVENTS •{' '}
      {' '.repeat(50)}
    </div>
  </motion.div>

  
  <motion.div
    animate={{ x: ['0%', '-100%'] }}
    transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
    className="bg-white/10 py-2 w-[200%] transform rotate-0 mt-2"
  >
    <div className="whitespace-nowrap text-sm sm:text-base font-semibold text-white">
      PRIM.E • PRIM.E • PRIM.E • PRIM.E • PRIM.E • PRIM.E • PRIM.E •{' '}
      {' '.repeat(50)}
    </div>
  </motion.div>
</div> */}


      {/* Large screen: scrolling carousel */}
      <motion.div
        ref={containerRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="hidden lg:flex overflow-x-auto no-scrollbar space-x-6 px-6 sm:px-10"
      >
        {events.map((event, i) => (
          <motion.div
            key={i}
            className="flex-shrink-0 w-64 sm:w-72 md:w-80 bg-white/10 border border-white/10 backdrop-blur-md rounded-xl p-4 transition hover:scale-105"
          >
            <div className="relative w-full h-40 mb-4  overflow-hidden">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className={`text-xl font-bold mb-1 ${audiowide.className}`}>{event.title}</h3>
            <p className={`text-sm text-gray-300 ${ibmPlexMono.className}`}>{event.subtitle}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Small screen: animated single card */}
      <div className="lg:hidden relative h-[340px] mt-4 flex justify-center items-center overflow-hidden px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="absolute  w-3/4 md:w-1/2 justify-center h-7/8 bg-white/10 border border-white/10 backdrop-blur-md rounded-lg p-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full h-40 mb-4 rounded-md overflow-hidden">
              <Image
                src={events[index].image}
                alt={events[index].title}
                fill
                className="object-cover rounded-md"
              />
            </div>
             <h3 className={`text-xl font-bold mb-1 ${audiowide.className}`}>{events[index].title}</h3>
            <p className={`text-sm text-gray-300 ${ibmPlexMono.className}`}>{events[index].subtitle}</p>
            {/* <h3 className="text-xl font-semibold mb-1">{events[index].title}</h3>
            <p className="text-sm text-gray-300">{events[index].subtitle}</p> */}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
