"use client";

import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-sand-100 py-16 border-t border-forest-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif font-bold text-white mb-2">Dental Square</h3>
            <p className="text-forest-400 text-sm">Premium Dental Care • Est. 2008</p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-sand-300 hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-sand-300 hover:text-white transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-sand-300 hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-sand-300 hover:text-white transition-colors"><Linkedin size={20} /></a>
          </div>

          <div className="text-sm text-forest-400 text-center md:text-right">
             <p>&copy; {new Date().getFullYear()} Dental Square. All rights reserved.</p>
             <div className="mt-2 space-x-4">
                <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

