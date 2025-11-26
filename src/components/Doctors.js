"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Mitchell",
    qualification: "DDS, MS in Prosthodontics",
    specialty: "Cosmetic & Restorative Dentistry",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop",
    experience: "15+ Years",
  },
  {
    id: 2,
    name: "Dr. James Anderson",
    qualification: "DMD, Board Certified",
    specialty: "Orthodontics & Implantology",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop",
    experience: "12+ Years",
  },
  {
    id: 3,
    name: "Dr. Emily Chen",
    qualification: "DDS, Pediatric Specialist",
    specialty: "Family & Pediatric Dentistry",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=2070&auto=format&fit=crop",
    experience: "10+ Years",
  },
  {
    id: 4,
    name: "Dr. Michael Roberts",
    qualification: "DMD, MS in Periodontics",
    specialty: "Periodontal Surgery & Care",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2064&auto=format&fit=crop",
    experience: "18+ Years",
  },
];

export default function Doctors() {
  return (
    <section id="doctors" className="py-32 bg-gradient-to-br from-forest-50/30 via-sand-50 to-white scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <Reveal width="100%">
            <h4 className="text-forest-600 font-bold tracking-widest uppercase text-sm mb-2">Our Expert Team</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-forest-950">Meet Our Doctors</h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              World-class dental professionals dedicated to perfecting your smile with care and expertise.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {doctors.map((doctor, index) => (
            <Reveal key={doctor.id} delay={index * 0.1} variant="scale">
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Experience Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2"
                  >
                    <Award size={16} className="text-forest-600" />
                    <span className="text-sm font-bold text-forest-950">{doctor.experience}</span>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-serif font-bold text-forest-950 mb-2">
                    {doctor.name}
                  </h3>
                  
                  <div className="flex items-center justify-center gap-2 text-forest-600 mb-3">
                    <GraduationCap size={18} />
                    <p className="text-sm font-medium">{doctor.qualification}</p>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {doctor.specialty}
                  </p>

                  {/* Decorative Line */}
                  <div className="mt-4 pt-4 border-t border-sand-200">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-forest-600 font-medium text-sm hover:text-forest-700 transition-colors"
                    >
                      View Profile →
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={0.5}>
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6">
              Ready to experience exceptional dental care?
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-forest-600 text-white px-10 py-4 rounded-full font-bold hover:bg-forest-700 transition-all shadow-lg shadow-forest-200"
            >
              Book Your Consultation
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

