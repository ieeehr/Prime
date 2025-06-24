'use client';

import { motion } from 'framer-motion';
//import WorkshopCard from '/components/WorkshopCard';
//import WorkshopCard from '../components/WorkshopCard';
import { IBM_Plex_Mono, Audiowide } from 'next/font/google';
import '../styles/customGradients.css';

import Image from "next/image";
const ibmPlexMono = IBM_Plex_Mono({ weight: '400', subsets: ['latin'] });
const audiowide = Audiowide({ weight: '400', subsets: ['latin'] });

export default function Workshops() {
 
/*const workshops = [
  {
    title: 'Autonomous Vehicle Control',
    tag: 'Robotics',
    image: '/images/workshop1.png',
  },
  {
    title: 'Rover Design & Mobility',
    tag: 'Space',
    image: '/images/workshop2.png',
  },
  {
    title: 'Embedded EV Systems',
    tag: 'Electronics',
    image: '/images/workshop3.png',
  },
  {
    title: 'AI in Robotics',
    tag: 'Vision',
    image: '/images/workshop4.png',
  },
];*/
const workshops = [
  {
    title: 'Obstacle Avoiding Robot',
    tag: 'Robotics',
    image: '/workshops/Obst.png',
  },
  {
    title: ' Baja Workshop',
    tag: 'Automotive Engineering',
    image: '/workshops/Baja.png',
  },
  {
    title: 'Embedded Systems',
    tag: 'Electronics',
    image: '/workshops/ESe.png',
  },
  {
    title: 'AI in Robotics',
    tag: 'Vision',
    image: '/images/workshop4.png',
  },];
/* bg-hero-gradient2 */
  return (
    <section id="workshops" className="relative w-full bg-diamond-shape sm:bg-sunmobile py-16 px-4 overflow-hidden text-white">
      {/* Cross banners */}
      <div className="absolute top-4 left-0 right-0 z-10">
        <motion.div
          animate={{ x: ['-100%', '0%'] }}
          transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
          className="bg-white/10 py-2 transform -rotate-0 w-[200%]"
        >
          <div className={`whitespace-nowrap text-sm sm:text-base font-medium ${ibmPlexMono.className}`}>
            technical workshops • technical workshops • technical workshops •technical workshops • technical workshops • technical workshops •technical workshops • technical workshops • technical workshops •{' '.repeat(20)}
          </div>
        </motion.div>
        <motion.div
          animate={{ x: ['0%', '-100%'] }}
          transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
          className="bg-white/10 py-2 transform rotate-0 mt-2 w-[200%]"
        >
          <div className={`whitespace-nowrap text-sm sm:text-base font-medium ${ibmPlexMono.className}`}>
            prim.e • workshops • prim.e • workshops •prim.e • workshops • prim.e • workshops •prim.e • workshops • prim.e • workshops •{' '.repeat(20)}
          </div>
        </motion.div>
      </div>

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`relative z-20 text-center text-4xl sm:text-5xl font-bold mt-20 mb-10 ${audiowide.className}`}
      >
        Workshops
      </motion.h2>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
  {/* {[1, 2, 3].map((i) => ( */}
    {workshops.map((workshop, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col items-center text-center"
    >
      {/* Image */}
      {/* <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-200 rounded-full mb-4 overflow-hidden"> */}
      
        {/* <img
          src={`/images/workshop${i}.png`}
          alt={`Workshop ${i}`}
          className="object-cover w-full h-full"
        /> */}
        {/* <img
        src={workshop.image}
        alt={workshop.title}
        className="object-cover w-full h-full"
      /> */}
      {/* <div className={`relative w-full h-[120px] sm:h-[150px] mb-4 overflow-hidden rounded-md `}>
      <Image
    src={workshop.image}
    alt={workshop.title}
    fill
    className="object-contain rounded-md"
    sizes="(max-width: 640px) 00vw, 33vw"
    priority // optional: remove if not needed
  />
      </div> */}

      {/* Text */}
      {/* <div className={`${ibmPlexMono.className}`}>
        <p className="text-lg font-semibold mb-1">{workshop.title}</p>
      <p className="text-sm text-gray-300">{workshop.tag}</p>
      </div> */}
      <div className="relative w-full h-[200px] sm:h-[250px] mb-4 overflow-hidden rounded-xl">
        <Image
          src={workshop.image}
          alt={workshop.title}
          fill
          className="object-contain rounded-lg"
          sizes="(max-width: 768px) 120px, 150px"
        />
      </div>
      
            <p className={`text-2xl font-light mb-1 ${audiowide.className}`}>{workshop.title}</p>
            <p className={`text-lg text-gray-100 ${ibmPlexMono.className}`}>{workshop.tag}</p>
    </motion.div>
  ))}
</div>

    </section>
  );
}
