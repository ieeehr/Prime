'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Audiowide, Bebas_Neue } from 'next/font/google';
import { Menu, X } from 'lucide-react'; // uses Lucide icons

const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-bebas' });
const audiowide = Audiowide({ weight: '400', subsets: ['latin'] });

const navLinks = [
  'Home',
  'About PRIM.E',
  'About IEEE SB GECT',
  'Workshops',
  'Talk Sessions',
  'Registration',
  'Contact',
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed  top-0 left-0 w-full z-50 bg-[rgba(15,7,74,0.9)] backdrop-blur-md px-6 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className={`text-3xl text-white ${audiowide.className}`}>PRIM.E</div>

      {/* Desktop Nav */}
      <ul className={`hidden md:flex gap-8 text-2xl text-white ${bebas.className}`}>
        {navLinks.map((text, i) => (
          <li key={i} className="hover:text-shadow-white hover:underline transition">
            <Link href={`#${text.toLowerCase()}`}>{text}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white md:hidden"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[rgba(15,7,74,0.97)] flex flex-col items-start px-6 py-4 gap-4 md:hidden">
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
    </header>
  );
}
