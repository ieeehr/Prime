'use client';
import Link from 'next/link';
import Image from "next/image";
import { motion } from 'framer-motion';
import { VT323, Audiowide, Orbitron } from 'next/font/google';

const vt323 = VT323({ weight: '400', subsets: ['latin'] });
const audiowide = Audiowide({ weight: '400', subsets: ['latin'] });
const orbitron = Orbitron({ weight: '900', subsets: ['latin'] });

export default function Registration() {
  const plans = [
    {
      type: 'RAS Member',
      price: '₹399.00',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      type: 'IEEE Member',
      price: '₹599.00',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      type: 'Non-IEEE Member',
      price: '₹899.00',
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  const features = [
    '4x workshop',
    '1x talk session',
    '2x competitions',
    '1x expo',
    '1x cultural',
  ];

  return (
    <section id="registration" className="py-20 relative overflow-hidden text-white bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none brightness-200">
        {/* <img
          src="/images/robot-head.png"
          alt="Robot Head"
          className="w-full h-full object-contain"
        /> */}
        <Image
    src="/images/robot-head.png"
    alt="Robot Head"
    fill
    className="object-contain"
    priority
  />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={`text-5xl md:text-5xl font-extrabold mb-12 text-center ${audiowide.className}`}
        >
          Registration
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <div
                className={`w-full h-2 bg-gradient-to-r ${plan.gradient} rounded-full mb-6`}
              />
              <h3 className={`text-2xl font-extrabold mb-4 ${orbitron.className}`}>{plan.type}</h3>
              <div
                className={`text-4xl font-bold mb-6 text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text ${orbitron.className}`}
              >
                {plan.price}
              </div>
              <ul className={`space-y-3 mb-8  ${audiowide.className}`}>
                {features.map((text, idx) => (
                  <li key={idx} className="flex items-center text-xl">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 " />
                    {text}
                  </li>
                ))}
              </ul>

              {/* Flip Hover Button */}
              <div className="relative group perspective">
                <button 
                  className={`w-full relative transition-transform duration-500 group-hover:rotate-x-30 bg-gradient-to-r ${plan.gradient} text-white py-3 rounded-md font-semibold transform-style-preserve-3d ${vt323.className}`}
                >
                  <Link href="#home">
                  <span className="block backface-visible text-3xl">Register Now</span>
                  </Link>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
