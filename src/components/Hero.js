"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { ArrowRight, Star } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-gradient-to-br from-sand-50 via-sand-50 to-forest-50/30">
      {/* Background Blobs */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 right-0 w-1/2 h-full bg-forest-100/30 blur-3xl -z-10 rounded-l-full" 
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]) }}
        className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-sand-200/40 blur-3xl -z-10 rounded-r-full" 
      />

      <motion.div 
        style={{ opacity }}
        className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center"
      >
        {/* Left Content */}
        <div className="space-y-8">
          <Reveal>
            <h1 className="text-5xl md:text-7xl font-serif font-medium text-forest-950 leading-[1.1]">
              Your Smile, <br />
              <span className="relative inline-block italic text-forest-800">
                Perfected
                <svg
                  className="absolute w-full h-3 bottom-1 left-0 text-sand-400 -z-10"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                </svg>
              </span>{" "}
              at The Square.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg">
              Experience world-class dental care in a sanctuary designed for your comfort and confidence.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="flex flex-wrap gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#contact"
                  className="bg-forest-600 text-white px-8 py-4 rounded-full font-medium hover:bg-forest-700 transition-all flex items-center gap-2 shadow-lg shadow-forest-200 hover:shadow-xl hover:shadow-forest-300"
                >
                  Book Your Visit
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#services"
                  className="px-8 py-4 rounded-full font-medium text-forest-900 border-2 border-forest-300 hover:bg-forest-50 hover:border-forest-500 transition-all"
                >
                  Our Services
                </Link>
              </motion.div>
            </div>
          </Reveal>
          
          <Reveal delay={0.6}>
             <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-3">
                    {[1,2,3,4].map((i) => (
                        <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                             <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="patient" className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
                <div>
                    <div className="flex text-yellow-400 text-sm">
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                    </div>
                    <p className="text-xs font-medium text-gray-500">Trusted by 2,000+ Patients</p>
                </div>
             </div>
          </Reveal>
        </div>

        {/* Right Image */}
        <div className="relative h-[600px] hidden md:block">
          <Reveal delay={0.3} width="100%" variant="scaleBlur">
             <motion.div 
               className="relative h-[600px] w-full rounded-t-[10rem] rounded-b-[2rem] overflow-hidden shadow-2xl"
               whileHover={{ scale: 1.02 }}
               transition={{ duration: 0.3 }}
             >
                <Image
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop"
                  alt="Smiling patient"
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Floating Badge */}
                <motion.div 
                  className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg flex items-center gap-3 max-w-[200px]"
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                    <motion.div 
                      className="bg-forest-100 p-2 rounded-full text-forest-600"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                        <Star size={24} fill="currentColor" />
                    </motion.div>
                    <div>
                        <p className="font-bold text-forest-950 text-sm">Top Rated Clinic</p>
                        <p className="text-xs text-gray-500">5-Star Experience</p>
                    </div>
                </motion.div>
             </motion.div>
          </Reveal>
        </div>
      </motion.div>
    </section>
  );
}

