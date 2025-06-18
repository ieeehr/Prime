'use client';

import { motion } from 'framer-motion';

type WorkshopCardProps = {
  title: string;
  description: string;
};

export default function WorkshopCard({ title, description }: WorkshopCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-w-[260px] sm:min-w-[300px] md:min-w-[340px] bg-white/10 border border-white/20 rounded-xl p-4 flex-shrink-0"
    >
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-sm text-white/80">{description}</p>
    </motion.div>
  );
}
