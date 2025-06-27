'use client';

import { motion } from 'framer-motion';
import SpeakerCard from '../components/Speaker1';
import { IBM_Plex_Mono, Audiowide } from 'next/font/google';
import '../styles/customGradients.css';

const ibmPlexMono = IBM_Plex_Mono({ weight: '400', subsets: ['latin'] });
const audiowide = Audiowide({ weight: '400', subsets: ['latin'] });

export default function Talks() {
  /*const speakers = [
    {
      name: 'Dr. A. R. Rao',
      topic: 'Space Robotics',
      image: '/speakers/speaker1.jpg',
    },
    {
      name: 'Umakat Soni',
      topic: 'AI in Mobility',
      image: '/speakers/speaker2.jpg',
    },
    {
      name: 'Raghu Krishnapuram',
      topic: 'Autonomous Systems',
      image: '/speakers/speaker3.jpg',
    },
    {
      name: 'Anima Anandkumar',
      topic: 'Smart EVs',
      image: '/speakers/speaker4.jpg',
    },
  ];*/
  const speakers = [
    {
      name: 'Amrita Jiju',
      topic: 'Agentic AI and RAG',
      image: '/speakers/Amrita.jpeg',
    },
    {
      name: 'Alosh Denny',
      topic: 'Reinforcement Learning',
      image: '/speakers/Alosh Denny.jpeg',
    },
    {
      name: 'Shazin Shahul ',
      topic: 'Cyber security in IoT ',
      image: '/speakers/Shazin.jpeg',
    },
    
  ];
/*bg-hero-gradient2*/
  return (
    <section id="talk sessions" className="relative py-20 px-4 text-white bg-diamond-shape overflow-hidden">
      {/* Moving banners */}
      <div className="relative top-4 z-10 w-full space-y-2">
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
            talk sessions • tech insights • innovation • talk sessions • tech insights • innovation •
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
            speakers • prim.e • discussions • future • speakers • prim.e • discussions • future •
          </span>
        ))}
      </div>
    </motion.div>
  </div>
</div>
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className={`text-4xl md:text-5xl font-bold mb-12 mt-20 text-center relative z-20 ${audiowide.className}`}
      >
        Talk Sessions
      </motion.h2>

      {/* Speaker grid */}
      <div className={`relative z-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 lg:gap-16 max-w-4xl mx-auto ${audiowide.className}`}>
        {speakers.map((speaker, i) => (
          <SpeakerCard
            key={i}
            name={speaker.name}
            topic={speaker.topic}
            image={speaker.image}
          />
        ))}
      </div>
    </section>
  );
}
/*${ibmPlexMono.className}*/