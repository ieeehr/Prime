
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Bebas_Neue } from 'next/font/google';
const bebas=Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-bebas' });
const logos = [
  { src: '/images/hlogos/logo1.png', alt: 'IEEE SB GECT' },
  { src: '/images/hlogos/logo2.png', alt: 'PRIM.E' },
  { src: '/images/hlogos/logo3.png', alt: 'IEEE RAS Kerala' },
  { src: '/images/hlogos/logo4.png', alt: 'Robotics & Automation Society' },
  { src: '/images/hlogos/logo5.png', alt: 'IEEE' },
];
const navLinks = [
  'Home',
  'About PRIM.E',
  'About IEEE SB GECT',
  'Workshops',
  'Talk Sessions',
  'Registration',
  'Contact',
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#0F074A] z-50">
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="flex items-center justify-between gap-2 py-2 sm:py-2 md:py-2 lg:py-2 xl:py-2 overflow-hidden">
          
          <div className="flex justify-between items-center w-full gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10">
            {logos.map((logo, idx) => (
              <Link key={idx} href="#home" className="flex-shrink-0">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={100}
                  priority
                  className="h-6 sm:h-8 md:h-10 lg:h-12 object-contain"
                />
              </Link>
            ))}

            
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="text-white p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
            {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[rgba(15,7,74,0.97)] flex flex-col items-start px-6 py-4 gap-4 ">
          {navLinks.map((text, i) => (
            <Link
              key={i}
              href={`#${text.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className={`text-lg text-white hover:underline ${bebas.className}`}
            >
              {text}
            </Link>
          ))}
        </div>
      )}
          </div>
        </div>
      </div>
    </header>
  );
}
