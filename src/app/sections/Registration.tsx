'use client';
//import Link from 'next/link';
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
      price: '₹499.00',
      gradient: 'from-green-500 to-emerald-500',
      //url:"https://makemypass.com/event/prime?ticket_id=1316d586-3d46-49aa-a426-2fa5fbf4eead",
      url:"https://makemypass.com/event/prime",
    },
    {
      type: 'IEEE Member',
      price: '₹699.00',
      gradient: 'from-blue-500 to-cyan-500',
      url:"https://makemypass.com/event/prime",
      //url:"https://makemypass.com/event/prime?ticket_id=e7cb656d-6261-47ad-bc00-834f7dc536ff",
    },
    {
      type: 'Non-IEEE Member',
      price: '₹899.00',
      gradient: 'from-purple-500 to-pink-500',
      url:"https://makemypass.com/event/prime",
      //url:"https://makemypass.com/event/prime?ticket_id=cc44b5a1-c090-465b-9790-cf781038beff"
    },
  ];

  const features = [
    '4x workshop',
    '1x talk session',
    '2x competitions',
    '1x expo',
    '1x cultural',
    `1x Ice breaking session `,
    `Lazer maze (3 free chances)`,


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
              {/* <div className="relative group perspective">
                <button 
                  className={`w-full relative transition-transform duration-500 group-hover:rotate-x-30 bg-gradient-to-r ${plan.gradient} text-white py-3 rounded-md font-semibold transform-style-preserve-3d ${vt323.className}`}
                >
                  <Link href="#home">
                  <span className="block backface-visible text-3xl">Register Now</span>
                  </Link>
                </button>
              </div> */}
              <div className="relative group perspective">
  <a
    href={plan.url}
    target="_blank"
    rel="noopener noreferrer"
    className={`block w-full h-full`}
  >
    {/* <div
      className={`relative transition-transform duration-500 group-hover:rotate-x-180 transform bg-gradient-to-r ${plan.gradient} text-white py-3 rounded-md font-semibold text-center ${vt323.className}`}
      style={{
        transformStyle: 'preserve-3d',
        //  backfaceVisibility: 'hidden',
         
      }}
    >
      <span className="block text-2xl sm:text-3xl hover:text">Register Now</span>
    </div> */}
     <div
      className={`relative h-14 sm:h-16 transition-transform duration-500  transform bg-gradient-to-r ${plan.gradient} text-white py-3 rounded-md font-semibold text-center ${vt323.className}`}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Front Face (Default View) */}
      <span className="absolute inset-0 flex items-center justify-center group-hover:rotate-y-180 backface-hidden text-2xl sm:text-3xl">
        Register Now
      </span>

      {/* Back Face (Shown on Hover) */}
      {/* <span className="invisible rotate-x-0 group-hover:rotate-x-20 group-hover:visible absolute inset-0 flex items-center justify-center  text-2xl sm:text-4xl ">
        Let’s Go →
      </span> */}
      <span
        className={`absolute inset-0  flex items-center justify-center text-2xl sm:text-3xl invisible group-hover:visible groudp-hover:rotate-y-360 transition-opacity duration-3 ${vt323.className}`}
      >Let’s Go →</span>
    </div>
  </a>
</div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
