'use client';

import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, MessageCircle, Facebook} from 'lucide-react';
import { Audiowide, Orbitron } from 'next/font/google';

const audiowide = Audiowide({ weight: '400', subsets: ['latin'] });
const orbitron = Orbitron({ weight: '500', subsets: ['latin'] });

export default function Contact() {
  const contacts = [
    { role: "IEEE GECT SB CHAIR", name: "Pavithra S", phone: "8075613378" },
    { role: "RAS CHAIR", name: "Meghna R", phone: "9447472837" },
    { role: "RAS VICE CHAIR", name: "Adithyan V", phone: "8301962849" },
    { role: "RAS SECRETARY", name: "Sreehari M", phone: "8129887185" },
  ];

  /*const socialIcons = [
    { icon: Instagram, color: "text-pink-400" },
    { icon: Linkedin, color: "text-blue-400" },
    { icon: Phone, color: "text-green-400" },
    { icon: Mail, color: "text-red-400" },
    { icon: MessageCircle, color: "text-green-400" },
    { icon: Facebook, color: "text-blue-500" },
  ];*/
  const socialIcons = [
  {
    icon: Instagram,
    color: "text-pink-400",
    url: "https://www.instagram.com/ieeerassbgectcr/",
  },
  {
    icon: Linkedin,
    color: "text-blue-400",
    url: "https://www.linkedin.com/company/ieee-sb-gect/",
  },
  {
    icon: Mail,
    color: "text-red-400",
    url: "mailto:ieeerassbgect@gmail.com",
  },
  {
    icon: MessageCircle,
    color: "text-green-400",
    url: "https://chat.whatsapp.com/Cte9cjphGKy1qjmNchj631", // or WhatsApp
  },
  {
    icon: Facebook,
    color: "text-blue-500",
    url: "https://www.facebook.com/ieeesbgectcr/",
  },
];


  return (
    <section id="contact" className="py-20 relative text-white bg-gradient-to-b from-[#0f074a] to-[#050021] overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={`text-4xl md:text-5xl font-bold text-left sm:text-center mb-8 ${audiowide.className}`}
        >
          Contact.
        </motion.h2>

        {/* Social Icons */}
        <div className="flex justify-center items-center flex-wrap gap-6 mb-8">
          {socialIcons.map((social, i) => (
            // <motion.button </motion.button>
              <motion.a
              key={i}
              href={social.url} // ✅ The link for this icon
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

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-6xl mx-auto mb-12 aspect-video rounded-xl overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.3148561912076!2d76.22208507451461!3d10.554516063248816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7eee301ff400f%3A0x8851e3d8fc9c94f0!2sGovernment%20Engineering%20College%20Thrissur%20(GEC%20Thrissur)!5e0!3m2!1sen!2sin!4v1750331813519!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-sm sm:text-base">
          {contacts.map((contact, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur rounded-xl py-6 px-4 border border-white/10"
            >
              <div className={`uppercase text-xl text-gray-200 mb-2 tracking-wide font-bold ${orbitron.className}`}>
                {contact.role}
              </div>
              <div className={`font-extrabold text-white text-lg ${orbitron.className}`}>{contact.name}</div>
              <div className={`text-md font-bold text-gray-300 mt-1 ${orbitron.className}`}>{contact.phone}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
