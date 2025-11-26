"use client";

import { Sparkles, Shield, HeartPulse, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Cosmetic Dentistry",
    description: "Transform your smile with veneers, whitening, and smile makeovers designed for natural elegance.",
    icon: Sparkles,
  },
  {
    id: 2,
    title: "Preventive Care",
    description: "Maintain optimal oral health with regular cleanings, exams, and personalized hygiene plans.",
    icon: Shield,
  },
  {
    id: 3,
    title: "Restorative Solutions",
    description: "Restore function and beauty with implants, crowns, and bridges crafted with precision.",
    icon: HeartPulse, // closest to 'tooth' or medical feel provided
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-forest-900 text-sand-50 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <Reveal width="100%">
            <h4 className="text-forest-400 font-bold tracking-widest uppercase text-sm mb-2">What We Offer</h4>
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Curated Dental Services</h2>
            <p className="text-forest-200 max-w-2xl mx-auto text-lg">
              Comprehensive care tailored to your unique needs, delivered with artistry and precision.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.15} variant="scale">
              <div className="group relative p-10 rounded-3xl bg-forest-800 border border-forest-700 hover:bg-sand-50 transition-all duration-500 h-full flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-2xl">
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-forest-700/50 group-hover:bg-sand-200 flex items-center justify-center mb-6 transition-colors duration-500">
                    <service.icon className="w-7 h-7 text-forest-300 group-hover:text-forest-800 transition-colors" />
                  </div>
                  
                  <h3 className="text-2xl font-serif mb-4 group-hover:text-forest-950 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-forest-200 group-hover:text-gray-600 mb-8 transition-colors leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <Link
                    href="#contact"
                    className="relative z-10 inline-flex items-center text-sm font-bold uppercase tracking-widest text-forest-300 group-hover:text-forest-700 transition-colors"
                  >
                    Book Now <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

