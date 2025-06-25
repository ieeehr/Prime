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
    
  ];
/*bg-hero-gradient2*/
  return (
    <section id="talk sessions" className="relative py-20 px-4 text-white bg-diamond-shape overflow-hidden">
      {/* Moving banners */}
      <div className="relative top-4 left-0 right-0 z-10 overflow-hidden">
        <motion.div
          animate={{ x: ['-100%', '0%'] }}
          transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
          className="bg-white/10 py-2 transform -rotate-0 w-[200%]"
        >
          <div className={`whitespace-nowrap text-sm sm:text-base font-medium ${ibmPlexMono.className}`}>
            talk sessions • tech insights • innovation • talk sessions • tech insights • innovation • talk sessions • tech insights • innovation • talk sessions • tech insights • innovation •{' '.repeat(20)}
          </div>
        </motion.div>
        <motion.div
          animate={{ x: ['0%', '-100%'] }}
          transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
          className="bg-white/10 py-2 transform rotate-0 mt-2 w-[200%]"
        >
          <div className={`whitespace-nowrap text-sm sm:text-base font-medium ${ibmPlexMono.className}`}>
            speakers • prim.e • discussions • future • speakers • prim.e • discussions • future • speakers • prim.e • discussions • future • speakers • prim.e • discussions • future •{' '.repeat(20)}
          </div>
        </motion.div>
      </div>
      {/* <div className="relative top-4 left-0 right-0 z-10">
  <div className="overflow-hidden w-full">
    <motion.div
      animate={{ x: ['-100%', '0%'] }}
      transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
      className="bg-white/10 py-2"
    >
      <div className={`inline-block whitespace-nowrap text-sm sm:text-base font-medium ${ibmPlexMono.className}`}>
        talk sessions • tech insights • innovation • talk sessions • tech insights • innovation • talk sessions • tech insights • innovation •{' '.repeat(20)}
      </div>
    </motion.div>
  </div>

  <div className="overflow-hidden w-full mt-2">
    <motion.div
      animate={{ x: ['0%', '-100%'] }}
      transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
      className="bg-white/10 py-2"
    >
      <div className={`inline-block whitespace-nowrap text-sm sm:text-base font-medium ${ibmPlexMono.className}`}>
        speakers • prim.e • discussions • future • speakers • prim.e • discussions • future • speakers • prim.e • discussions • future •{' '.repeat(20)}
      </div>
    </motion.div>
  </div>
</div> */}

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className={`text-4xl md:text-5xl font-bold mb-12 mt-20 text-center relative z-20 ${audiowide.className}`}
      >
        Talk Sessions
      </motion.h2>

      {/* Speaker grid */}
      <div className={`relative z-20 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto ${audiowide.className}`}>
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