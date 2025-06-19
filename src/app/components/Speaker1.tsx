'use client';
import Image from "next/image";

import { motion } from 'framer-motion';

type SpeakerCardProps = {
  name: string;
  topic: string;
  image: string;
};

export default function SpeakerCard({ name, topic, image }: SpeakerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.03 }}
      className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col items-center text-center"
    >
      {/* <div className="w-[120px] h-[120px] sm:h-[150px] mb-4 overflow-hidden rounded-lg">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div> */}
      <div className="w-[120px] h-[120px] sm:h-[150px] mb-4 overflow-hidden rounded-lg relative">
  <Image
    src={image}
    alt={name}
    fill
    className="object-cover rounded-lg"
    sizes="(max-width: 768px) 120px, 150px"
  />
</div>

      <p className="text-lg font-semibold mb-1">{name}</p>
      <p className="text-sm text-gray-300">{topic}</p>
    </motion.div>
  );
}
