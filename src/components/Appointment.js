"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { MapPin, Phone, Mail, CheckCircle } from "lucide-react";

export default function Appointment() {
  const [formStatus, setFormStatus] = useState("idle"); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate API call
    setTimeout(() => {
      setFormStatus("success");
      e.target.reset();
    }, 1500);
  };

  return (
    <section id="appointment" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div className="space-y-8">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-serif text-forest-950">
                Begin Your Journey <br /> to a Perfect Smile
              </h2>
              <p className="text-gray-600 text-lg mt-4 max-w-md">
                Schedule your consultation today. Our team is ready to provide you with an exceptional dental experience.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-forest-50 rounded-full text-forest-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-xl text-forest-950">Our Location</h4>
                    <p className="text-gray-600">123 Wellness Avenue, Suite 400<br/>Beverly Hills, CA 90210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-forest-50 rounded-full text-forest-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-xl text-forest-950">Call Us</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="p-3 bg-forest-50 rounded-full text-forest-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-xl text-forest-950">Email</h4>
                    <p className="text-gray-600">concierge@dentalsquare.com</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Form */}
          <Reveal delay={0.3} width="100%">
            <div className="bg-sand-50 p-8 md:p-10 rounded-3xl shadow-xl border border-sand-100">
              {formStatus === "success" ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-forest-950 mb-2">Request Received</h3>
                  <p className="text-gray-600">We'll be in touch shortly to confirm your appointment.</p>
                  <button 
                    onClick={() => setFormStatus("idle")}
                    className="mt-8 text-forest-600 font-medium hover:text-forest-800 underline"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-forest-900 mb-2 uppercase tracking-wide">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-sand-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-200 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-forest-900 mb-2 uppercase tracking-wide">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-sand-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-200 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-bold text-forest-900 mb-2 uppercase tracking-wide">Interested Service</label>
                    <select
                      id="service"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-sand-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-200 outline-none transition-all"
                    >
                      <option>General Consultation</option>
                      <option>Cosmetic Dentistry</option>
                      <option>Invisalign</option>
                      <option>Teeth Whitening</option>
                      <option>Implants</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-forest-900 mb-2 uppercase tracking-wide">Message (Optional)</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-sand-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-200 outline-none transition-all"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full bg-forest-600 text-white py-4 rounded-xl font-bold hover:bg-forest-700 transition-all shadow-lg shadow-forest-200 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formStatus === "submitting" ? "Sending..." : "Request Appointment"}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

