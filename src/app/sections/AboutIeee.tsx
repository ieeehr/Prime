"use client";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import useInView from "../hooks/useInView";
import { Audiowide, IBM_Plex_Mono } from "next/font/google";
const ibmPlexMono = IBM_Plex_Mono({ weight: "400", subsets: ["latin"] });
const audiowide=Audiowide({weight:'400',subsets:['latin']});
export default function Aboutieee(){
    return(<section id="about ieee sb gect" className="py-20 relative bg-about1">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className={`text-4xl md:text-5xl font-bold text-white text mb-8 text-center  ${audiowide.className}`}>About IEEE SB GECT</h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <p className={`text-lg leading-relaxed text-white ${ibmPlexMono.className}`}>
                Being the very first technical society student branch of the institution, the SB has played a very vital
                and crucial role in the development of research and technology in the institution. The SB has evolved
                into being accommodative of all fields of interests apart from science and technology. As amazing as
                it's past, with 8 societies, 35 awards and 200+ events conducted, the SB continues to be one of the top
                tier SBs of the IEEE Kerala Section, courtesy to it's consistently top-notch activities.
              </p>
            </div>
          </motion.div>
        </div>
      </section>)
}


 