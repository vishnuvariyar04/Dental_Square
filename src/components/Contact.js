"use client";

import Reveal from "./Reveal";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Wellness Avenue, Suite 400",
      subContent: "Beverly Hills, CA 90210",
      link: "https://maps.google.com/?q=123+Wellness+Avenue+Beverly+Hills+CA",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      subContent: "Available during business hours",
      link: "tel:+15551234567",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "concierge@dentalsquare.com",
      subContent: "We'll respond within 24 hours",
      link: "mailto:concierge@dentalsquare.com",
    },
  ];

  const openingHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 3:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-white via-sand-50 to-forest-50/20 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Reveal width="100%">
            <h4 className="text-forest-600 font-bold tracking-widest uppercase text-sm mb-2">Get In Touch</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-forest-950">Visit Our Clinic</h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              Experience premium dental care in a luxurious, spa-like environment. We're here to perfect your smile.
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Reveal key={index} delay={index * 0.1} variant="fadeRight">
                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.icon === MapPin ? "_blank" : undefined}
                      rel={info.icon === MapPin ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-sand-100 group"
                    >
                      <div className="p-3 bg-forest-50 rounded-full text-forest-600 group-hover:bg-forest-600 group-hover:text-white transition-colors">
                        <info.icon size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-serif font-bold text-xl text-forest-950 mb-1">{info.title}</h4>
                        <p className="text-gray-700 font-medium">{info.content}</p>
                        {info.subContent && <p className="text-gray-500 text-sm mt-1">{info.subContent}</p>}
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border border-sand-100">
                      <div className="p-3 bg-forest-50 rounded-full text-forest-600">
                        <info.icon size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-serif font-bold text-xl text-forest-950 mb-1">{info.title}</h4>
                        <p className="text-gray-700 font-medium">{info.content}</p>
                        {info.subContent && <p className="text-gray-500 text-sm mt-1">{info.subContent}</p>}
                      </div>
                    </div>
                  )}
                </motion.div>
              </Reveal>
            ))}

            {/* Opening Hours */}
            <Reveal delay={0.4} variant="fadeRight">
              <div className="p-8 bg-gradient-to-br from-forest-900 to-forest-800 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-forest-700 rounded-full">
                    <Clock size={24} className="text-forest-200" />
                  </div>
                  <h4 className="font-serif font-bold text-xl text-white">Opening Hours</h4>
                </div>
                <div className="space-y-4">
                  {openingHours.map((schedule, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex justify-between items-center pb-3 border-b border-forest-700 last:border-0"
                    >
                      <span className="text-forest-200 font-medium">{schedule.day}</span>
                      <span className="text-white font-bold">{schedule.hours}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Social Media */}
            <Reveal delay={0.5} variant="fadeRight">
              <div className="p-6 bg-white rounded-2xl shadow-lg border border-sand-100">
                <h4 className="font-serif font-bold text-xl text-forest-950 mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="p-3 bg-forest-50 hover:bg-forest-600 text-forest-600 hover:text-white rounded-full transition-colors"
                  >
                    <Instagram size={20} />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="p-3 bg-forest-50 hover:bg-forest-600 text-forest-600 hover:text-white rounded-full transition-colors"
                  >
                    <Facebook size={20} />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="p-3 bg-forest-50 hover:bg-forest-600 text-forest-600 hover:text-white rounded-full transition-colors"
                  >
                    <Twitter size={20} />
                  </motion.a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Map */}
          <Reveal delay={0.2} width="100%" variant="scale">
            <div className="h-[600px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.4537866693567!2d-118.40168492346665!3d34.06939217315489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bbf2e8f3c3f1%3A0x4e8b8e8e8e8e8e8e!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dental Square Location"
              ></iframe>
            </div>
          </Reveal>
        </div>

        {/* CTA Section */}
        <Reveal delay={0.5}>
          <div className="mt-16 text-center">
            <motion.a
              href="tel:+15551234567"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-forest-600 text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-forest-700 transition-all shadow-xl shadow-forest-200 hover:shadow-2xl"
            >
              Book Your Appointment Now
            </motion.a>
            <p className="text-gray-500 text-sm mt-4">
              Or call us directly at <a href="tel:+15551234567" className="text-forest-600 font-medium hover:underline">+1 (555) 123-4567</a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

