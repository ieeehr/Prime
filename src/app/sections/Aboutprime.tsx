"use client";
import { motion } from "framer-motion";
//import { Menu, X, Download, MapPin, Phone, Mail, Instagram, Linkedin, MessageCircle, Facebook } from "lucide-react"
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button"
//import { useRef, useEffect } from "react";
//import useInView from "../hooks/useInView";
//import Image from "next/image";, Bebas_Neue, Orbitron, VT323,
import { Audiowide,IBM_Plex_Mono } from "next/font/google";
const ibmPlexMono = IBM_Plex_Mono({ weight: '400', subsets: ['latin'] });
const ibmPlexMono1 = IBM_Plex_Mono({ weight: '600', subsets: ['latin'] });
const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-audiowide",
});
/*const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});
const orbitron = Orbitron({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-orbitron",
});
const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});
*/
export default function About(){
    return(<section id="about prim.e" className="py-20 relative bg-about1 ">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className={`text-4xl md:text-5xl font-bold text-white mb-8 text-center underline ${audiowide.className}`}>About PRIM.E</h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <p className={`text-lg text-white leading-relaxed mb-6 ${ibmPlexMono.className}`}>
                
                PRIM.E is an event organized by IEEE RAS SBC GECT as part of receiving the Chapter Initiative Grant by IEEE RAS. It is an all-Kerala robotics and automation conclave that brings together students, professionals, and enthusiasts to explore the latest in technology and innovation. The event features a wide range of workshops on topics such as autonomous vehicles, embedded systems using microcontrollers, cybersecurity, and a hands-on session on building obstacle-avoiding robots. In addition to multiple expert talk sessions, PRIM.E also hosts a vibrant robotics expo, a laser maze, an ideathon, and various fun and interactive events, making it a dynamic platform for learning, networking, and showcasing talent.
              </p>
              {/* <p className={`text-lg text-white leading-relaxed mb-6  ${ibmPlexMono.className}`}>
              PRIM.E explores the intersection of robotics, EVs, and space exploration through hands-on workshops,
                expert talks, and competitions. Participants will gain insights into autonomous systems, mobility
                solutions, and robotics applications.
                Key topics include PID control in automation, space robotics, and embedded systems in EVs. Workshops
                will cover autonomous vehicle control using drive-by-wire tech and rover development.
              </p>
              <p className={`text-lg text-white leading-relaxed mb-8  ${ibmPlexMono.className}`}>
                Competitions like the line follower challenge will test problem-solving and technical skills. PRIM.E
                fosters innovation, collaboration, and prepares participants for the future of autonomous technology on
                Earth and beyond.
              </p> */}
              <a href="/brochure/Prime event brochure.pdf"  download>
              <Button className={`bg-white text-blue hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 ${ibmPlexMono1.className}`}>
                <Download className="mr-2 h-4 w-4" />
                Download Brochure
              </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
);
}
