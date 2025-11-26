"use client";

import Image from "next/image";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-32 bg-sand-50 scroll-mt-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
          {/* Left Image Collage */}
          <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-forest-100/50 blur-3xl rounded-full -z-10" />
            
            <div className="relative h-[500px] w-full">
               <Reveal delay={0.2} width="100%">
                  <div className="absolute top-0 left-0 w-2/3 h-3/4 rounded-3xl overflow-hidden shadow-xl z-10">
                    <Image
                        src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop"
                        alt="Dental tools"
                        fill
                        className="object-cover"
                    />
                  </div>
               </Reveal>
               
               <Reveal delay={0.4} width="100%">
                  <div className="absolute bottom-0 right-0 w-2/3 h-3/4 rounded-3xl overflow-hidden shadow-2xl z-20 border-8 border-sand-50">
                     <Image
                        src="https://images.unsplash.com/photo-1588776814546-1b8c1dd32307?q=80&w=1974&auto=format&fit=crop"
                        alt="Doctor and patient"
                        fill
                        className="object-cover"
                    />
                  </div>
               </Reveal>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <Reveal variant="fadeLeft">
              <h4 className="text-forest-600 font-bold tracking-widest uppercase text-sm">About Dental Square</h4>
              <h2 className="text-4xl md:text-5xl font-serif text-forest-950 mt-2 leading-tight">
                A Sanctuary for <br /> Your Smile
              </h2>
            </Reveal>

            <Reveal delay={0.2} variant="fadeLeft">
              <p className="text-gray-600 text-lg leading-relaxed">
                We believe a visit to the dentist should feel like a retreat. At Dental Square, we've reimagined the dental experience by blending clinical excellence with the tranquility of a premium spa. 
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mt-6">
                From our calming interiors to our gentle approach, every detail is curated to put you at ease while our experts perfect your smile.
              </p>
            </Reveal>

            <Reveal delay={0.3} variant="fadeLeft">
              <div className="pt-10 grid grid-cols-2 gap-10">
                <div>
                    <h3 className="text-5xl font-serif text-forest-600">15+</h3>
                    <p className="text-gray-500 mt-2 font-medium">Years of Excellence</p>
                </div>
                <div>
                    <h3 className="text-5xl font-serif text-forest-600">2k+</h3>
                    <p className="text-gray-500 mt-2 font-medium">Happy Smiles</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

