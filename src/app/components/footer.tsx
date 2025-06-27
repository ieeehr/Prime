'use client';

import { Instagram, Linkedin, Mail, MessageCircle, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const socialIcons = [
    {
      icon: Instagram,
      url: 'https://www.instagram.com/ieeerassbgectcr/',
      color: 'text-pink-400',
    },
    {
      icon: Linkedin,
      url: 'https://www.linkedin.com/company/ieee-sb-gect/',
      color: 'text-blue-400',
    },
    {
      icon: Mail,
      url: 'mailto:ieeerassbgect@gmail.com',
      color: 'text-red-400',
    },
    {
      icon: MessageCircle,
      url: 'https://chat.whatsapp.com/Cte9cjphGKy1qjmNchj631',
      color: 'text-green-400',
    },
    {
      icon: Facebook,
      url: 'https://www.facebook.com/ieeesbgectcr/',
      color: 'text-blue-500',
    },
  ];

  return (
    <footer className="bg-[#0F074A] text-white py-6 border-t border-white/10 mt-0">
      {/* Social Icons */}
      <div className="flex justify-center items-center gap-4 mb-2">
        {socialIcons.map((social, i) => (
          <motion.a
            key={i}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`p-3 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-colors ${social.color}`}
          >
            <social.icon className="w-6 h-6" />
          </motion.a>
        ))}
      </div>

      {/* Credits */}
      <div className="text-center text-sm text-gray-300 space-y-1">
        <p>© 2025 PRIM.E. All rights reserved.</p>
        <p>
          Designed & Developed by{' '}
          <span className="text-white font-semibold">IEEE SB GECT Team</span>
        </p>
      </div>
    </footer>
  );
}
